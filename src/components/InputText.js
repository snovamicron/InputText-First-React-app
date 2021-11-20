import React from 'react'
import Button from './Button';


const InputText = (prop) => {
    const [text, setText] = React.useState(prop.randerText);
    const [font, setFont] = React.useState("");
    const entrVal = (event) => {
        setText(event.target.value)
    }
    const cvrtCaps = () => {
        setText(text.toUpperCase())
    }
    const cvrtLowCaps = () => {
        setText(text.toLowerCase())
    }
    const fontFami = () => {
        alert("make sure that the font is installed in your device")
        let input = prompt("Enter the font name")
        setFont(input)
    }
    const textFilter = () => {
        return text.split(" ").filter(e => e)
    }
    const textCopy = () => {
        navigator.clipboard.writeText(text)
    }

    return (
        <>
            <h1 className="text-info">{prop.heading}</h1>
            <div className="mb-3">

                <label htmlFor="inputText" className={`form-label text-${prop.Mode === "light" ? "warning" : "dark"} bg-${prop.Mode === "light" ? "dark" : "light"} px-2 py-1 rounded-3`}>Example textarea</label>

                <textarea style={{ fontFamily: font }} className="form-control bg-info pt-3" id="inputText" rows="10" value={text} onChange={entrVal}></textarea>
            </div>
            <div className="d-flex p-2">
                <Button title="Caps on" btnFunc={cvrtCaps} classProps="btn btn-danger m-1 rounded-pill" />
                <Button title="Caps off" btnFunc={cvrtLowCaps} classProps="btn btn-success m-1 rounded-pill" />
                <Button title="Change Font" btnFunc={fontFami} classProps="btn btn-warning m-1 rounded-pill" />
                <Button title="Copy" type="button" btnFunc={textCopy} classProps="btn btn-primary m-1 rounded-pill" />
            </div>
            <samp>Number of Words are {textFilter().length}</samp><br />
            <samp>Number of characters(with spaces) are {text.length}</samp><br />
            <samp>Number of characters(without spaces) are {textFilter().length ? textFilter().reduce((pv, e) => pv + e).length : 0}</samp><br />
        </>
    )
}

export default InputText

