import React, { useState } from 'react'
export default function TextForm(prop) {

    // TO CONVERT TO UPPER CASE
    const handleUpCase = () => {
        let upperCase = text.toUpperCase()
        setText(upperCase)
        prop.showAlert("Success", "Converted to UpperCase")
    };
    // TO CONVERT TO LOWER CASE
    const handleLowerCase = () => {
        let lowerCase = text.toLowerCase();
        setText(lowerCase)
        prop.showAlert("Success", "Converted to LowerCase")
    }
    const handleCopyText = () => {
        let copyText = document.getElementById("myText")
        copyText.select()
        navigator.clipboard.writeText(copyText.value)
        prop.showAlert("Success", "Copied to clipboard")

    }
    const handleExtraSpace = () => {
        let ExtraSpace = text.split(/[ ]+/)
        setText(ExtraSpace.join(" "))
        prop.showAlert("Success", "Extra spaces removed")
    };
    const handleFirstUpCase = () => {
        let FirstUpCase = text.replace(/(^\w|\s\w)/g, m => m.toUpperCase());
        setText(FirstUpCase)
        prop.showAlert("Success", "First Letters made Capital")
        //         Explanation:
        // /(^\w|\s\w)/g
        // ^\w: first character of the string
        //             | : or
        //     \s\w: first character after whitespace
        //         (^\w |\s\w) Capture the pattern.
        // g Flag: Match all occurrences.
    }
    const handleClearAll = () => {
        setText("")
        prop.showAlert("Sucess", "Text Cleared")
    }
    const handleOnChange = (event) => {
        // .value is taken from {text}
        //appends(adds) users input values to exisiting {text}+a. 
        setText(event.target.value)
    };
    // the state of text can only be updated using setText
    const [text, setText] = useState("");

    return (
        <>
            <div className={`container my-3 text-${prop.mode === "light" ? "dark" : "light"}`}>
                <div className="mb-3">
                    <h3>{prop.h1}</h3>
                    <textarea className="form-control" style={{ backgroundColor: prop.mode === "dark" ? "black" : "white", color: prop.mode === "dark" ? "white" : "black" }} id="myText" rows="10" value={text} onChange={handleOnChange}  ></textarea>
                </div>
                <button style={{ margin: 3 }} className="btn btn-primary " onClick={handleUpCase}  >
                    To Uppercase</button>
                <button style={{ margin: 3 }} className="btn btn-primary" onClick={handleLowerCase}  >
                    To Lowercase </button>
                <button style={{ margin: 3 }} className="btn btn-primary" onClick={handleFirstUpCase}  > First Letter To UpperCase</button>
                <button style={{ margin: 3 }} className="btn btn-primary" onClick={handleCopyText}  > Copy Text</button>
                <button style={{ margin: 3 }} className="btn btn-primary" onClick={handleExtraSpace}  > Rem Extra Spaces</button>
                <button style={{ margin: 3 }} className="btn btn-primary" onClick={handleClearAll}  > Clear All</button>
            </div >

            <div className={`container my-3 text-${prop.mode === 'light' ? 'dark' : 'light'}`} >
                <h3>Your Text Summary</h3>
                <p>
                    <li> Total Words = {text.split(" ").length - 1}</li>
                    <li>Total Characters = {text.length}</li>
                    <li>Estimated Time to read this text  = {0.008 * (text.split(" ").length - 1)} minutes </li>

                </p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : "Enter Text To Preview"}</p>

            </div>
        </>
    )

}
