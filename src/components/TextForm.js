import React, {useState} from 'react'

export default function TextForm(props) {

    const handelOnChange = (event) =>{
        //console.log('On change');
        setText(event.target.value)
    }

    const handelUpclick = () =>{
        //console.log("Uppercase was clicked: " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Changed to Uppercase!!","success");
    }

    const handelLoclick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Changed to Lowercase!!","success");
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text Copied to Clipboard!!","success");
        }
     
    const handleExtraSpaces = () => {
        var newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Space Removed!!","success");
        }

    const handleClear = () =>{
        var newText = '';
        setText(newText);
        props.showAlert("Text Cleared!!","success");
    }
    const [text, setText] = useState("");
    // setText('Enter new text');
    return (
        <>
        <div className='container' style={ {color: props.mode === "dark"? "white": "black"} }>
            <h2 className='mb-2'>{props.heading}</h2>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handelOnChange} style={{backgroundColor: props.mode === "dark"? "#5c6d7e": "#98a0a90d" , color: props.mode === "dark"? "white": "black"}} 
            id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handelUpclick}>convert to Uppercase</button>
            <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handelLoclick}>convert to Lowercase</button>
            <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Space</button>
            <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleClear}>Clear Text</button>
        </div>
        <div className="container my-3" style={ {color: props.mode === "dark"? "white": "black"} } >
            <h2>Text Summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} caharacters</p>
            <p>{0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length === 0 ? "Nothing to Preview!": text}</p>
        </div>
        </>
    )
}
