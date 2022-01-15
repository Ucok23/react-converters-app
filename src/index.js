import React from "react";
import ReactDOM from 'react-dom';
import LengthConvert from "./Length";
import TempConverterV2 from "./Temperature";

const App = () => {
    return (
        <>
            <h1>Temperature Converter</h1>
            <TempConverterV2 />
            <hr />
            <h1>Length Converter</h1>
            <LengthConvert />
            <hr />
        </>
    )
}

ReactDOM.render(
    <App />, document.getElementById('root')
)