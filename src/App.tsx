import {Viewer} from 'fey-script';
import './App.css';
import {useState} from "react";

interface AppProps {
    code: string;
}

function App({code}: AppProps) {
    const [data, setData] = useState({});

    return <div className="container">
        <div>
            <Viewer
                content={code}
                data={data}
                onChange={(e) => {
                    console.log(e);
                    setData(e);
                }}
                onDiceRoll={(e) => {
                    console.log(e);
                    alert(e.result.output);
                }}
            />
        </div>
        <div>
            <code>
                {JSON.stringify(data, null, 2)}
            </code>
        </div>
    </div>
}

export default App
