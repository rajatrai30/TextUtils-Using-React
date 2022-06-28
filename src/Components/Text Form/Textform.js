import React, { useState } from 'react';

function Textform(props) {
  const [text, settext] = useState("Enter your text")

  //DIFFERENT BUTTON FUCNTIONS FOR TEXT UTILS
  const handleUpEvent = () => {
    let newtext = text.toUpperCase()
    settext(newtext)
    props.showAlert("Converted to Uppercase", "success")
  }

  const handleLoEvent = () => {
    let newtext = text.toLowerCase()
    settext(newtext)
    props.showAlert("Converted to Lowercase", "success")

  }

  const clearEvent = () => {
    settext('')
    props.showAlert("Text Cleared", "success")

  }

  const copyEvent = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text Copied to Clipboard", "success")

  }

  const handleSpaceEvent = () => {
    let spacetext = text.split(/[  ]+/)
    settext(spacetext.join(" "))
    props.showAlert("Extra Spaces Removed", "success")

  }

  const handonchange = (event) => {
    settext(event.target.value)
  }

  return (
    <>
      <div className="container my-4" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }} >
        <h2>{props.heading}</h2>
        <div className='my-3'>
          <textarea className="form-control my-3" value={text} onChange={handonchange} style={{ backgroundColor: props.mode === 'dark' ? 'rgb(20, 81, 131)' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} id="mybox" rows="8"></textarea>
          <button disabled={text.length === 0} className="btn btn-primary my-1" onClick={handleUpEvent}>Convert to Uppercase</button>
          <button disabled={text.length === 0} className="btn btn-primary mx-3 my-1" onClick={handleLoEvent}>Convert to Lowercase</button>
          <button disabled={text.length === 0} className="btn btn-primary" onClick={clearEvent}>Clear Text</button>
          <button disabled={text.length === 0} className="btn btn-primary mx-3 my-1" onClick={copyEvent}>Copy Text</button>
          <button disabled={text.length === 0} className="btn btn-primary" onClick={handleSpaceEvent}>Remove Extra Spaces</button>

        </div>
        <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
          <h2>Your Text Summary</h2>
          <p><b>{text.split(/\s/).filter((element) => { return element.length !== 0 }).length}</b> words, <b>{text.length}</b> characters</p>
          <p><b>{0.08 * text.split(" ").filter((element) => { return element.length !== 0 }).length}</b> Minutes Read</p>
          <h2>Preview</h2>
          <p>{text.length > 0 ? text : "Nothing to Preview"}</p>
        </div>
      </div>
    </>
  )
}
export default Textform