type TableItem = string | { value: string; weight?: number };
type DataObject = Record<string, any>;
type OutputObject = Record<string, string | any>;

function randomItem<T>(arr: T[]): T {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
}

function getNestedValue(data: DataObject, key: string): any {
    const keys = key.split('.');
    let value = data;
    for (const k of keys) {
        value = value[k];
        if (value === undefined) {
            throw new Error(`Undefined key: ${k}`);
        }
    }
    return value;
}

export function getGenerator(resolveImport: Function): Function {

    const importPattern = /^<<(.+?)>>$/;

    async function resolveImportsDeep(obj: DataObject): Promise<DataObject> {
        const walk = async (node: any): Promise<any> => {
            if (typeof node === 'string') {
                const match = node.match(importPattern);
                if (match) {
                    const imported = await resolveImport(match[1]);
                    return await walk(imported);
                }
                return node;
            } else if (Array.isArray(node)) {
                return Promise.all(node.map(item => walk(item)));
            } else if (typeof node === 'object' && node !== null) {
                const result: DataObject = {};

                for (const [key, value] of Object.entries(node)) {
                    const keyMatch = key.match(importPattern);

                    if (keyMatch) {
                        const imported = await resolveImport(keyMatch[1]);
                        const walked = await walk(imported);
                        Object.assign(result, walked);
                    } else {
                        result[key] = await walk(value);
                    }
                }

                return result;
            }

            return node;
        };

        return await walk(obj);
    }
    function resolveReference(ref: string, data: DataObject): string {
        const table = getNestedValue(data, ref);
        if (!Array.isArray(table)) {
            throw new Error(`Expected a list for table: ${ref}`);
        }

        const weightedArray: string[] = [];
        for (const item of table as TableItem[]) {
            const value = typeof item === 'object' ? item.value : item;
            const weight = typeof item === 'object' ? item.weight ?? 1 : 1;
            for (let i = 0; i < weight; i++) {
                weightedArray.push(value);
            }
        }
        return randomItem(weightedArray);
    }

    function replaceReferencesInString(
        value: string,
        data: DataObject,
        result: OutputObject,
        counter: number
    ): string {
        if (counter > 100) {
            throw new Error('Too many references. Infinite loop?');
        }

        const pattern1 = /(?<!\\)\[([a-zA-Z0-9._-]+)]/g;
        const pattern2 = /(?<!\\)<([a-zA-Z0-9._-]+)>/g;

        value = value.replace(pattern1, (_match, p1) => {
            const ref = p1;
            return getNestedValue(result, ref);
        });

        value = value.replace(pattern2, (_match, p1) => {
            const ref = p1;
            return resolveReference(ref, data);
        });

        if (pattern1.test(value) || pattern2.test(value)) {
            return replaceReferencesInString(value, data, result, counter + 1);
        }

        return value;
    }

    async function generateContent(data: DataObject): Promise<Record<string, string>> {
        data = await resolveImportsDeep(data);
        const output = data.output;
        if (output === undefined) {
            throw new Error('No output defined');
        }
        if (typeof output !== 'object') {
            throw new Error('Output should be an object');
        }

        const result: OutputObject = {};
        for (const [key, value] of Object.entries(output)) {
            result[key] = typeof value === 'string'
                ? replaceReferencesInString(value, data, result, 0)
                : value;
        }

        const out: Record<string, string> = {};
        for (const [key, value] of Object.entries(result)) {
            if (!key.startsWith('_') && typeof value === 'string') {
                out[key] = value.replace(/\\(\[|<)/g, '$1');
            }
        }

        return out;
    }

    return generateContent;

}
