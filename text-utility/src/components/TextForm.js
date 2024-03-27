import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleOnChange = (e)=>{
    setText(e.target.value)
  }

  const handleUpClick = ()=>{
    // let sum  = number.reduce((a,b)=>{
    //     return a+b
    // })
    
    const newText = text.toUpperCase()
    setText(newText)
    props.ShowAlert("Text Converted to UpperCase", "success")
  }

  const handleLwClick = ()=>{
    const newtext = text.toLowerCase()
    setText(newtext)
    props.ShowAlert("Text Converted to LowerCase", "success")
  }

  const handleClearClick = ()=>{
    const clearText = ""
    setText(clearText)
  }

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }

  const handleSumClick = ()=>{
    const numberArr = text.split(",")

    const sum = numberArr.reduce((acc,curr)=>{
      return acc+Number(curr)
    },0)
    
    setText(sum.toString())
  }

  return (
    <>
    <div className="container my-5">
      <h2 style={{color: props.mode ==="dark"?"white":"black"}}>{props.heading}</h2>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode ==="dark"?"grey":"white",color: props.mode ==="dark"?"white":"black"}} id="mybox" rows="6"></textarea>
      </div>
      <button className="btn btn-danger my-1" onClick={handleUpClick}>Click here to Up</button>
      <button className="btn btn-primary mx-3 my-1" onClick={handleLwClick}>Click here to lower</button>
      <button className="btn btn-primary mx-3 my-1" onClick={handleClearClick}>Clear Text</button>
      <button className="btn btn-primary mx-3 my-1" onClick={handleSumClick}>sum Text</button>
      <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
    </div>
    <div className="container my-3">
        <h2 style={{color: props.mode ==="dark"?"white":"black"}}>Number Summary</h2>
        <p style={{color: props.mode ==="dark"?"white":"black"}}>{text.split(" ").filter((elememt)=>{return elememt.length!==0}).length} words and {text.length} characters</p>
    </div>
    </>
  );
}
