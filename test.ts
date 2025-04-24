import {getGenerator} from "./src/rand-yaml.ts";
import {parse} from "yaml";

const generator = getGenerator(async (string) => {
    console.log('Importing', string);

    const text = await Deno.readTextFile(string);
    const obj = await parse(text);
    return obj;
});

console.log(await generator(await parse(await Deno.readTextFile('./test.yaml'))));
