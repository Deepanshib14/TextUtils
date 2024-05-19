import React,
{useState} from 'react'

export default function TextForm(props) {

    const handleClick=()=>{
        let newText=text.toUpperCase();
setText(newText)
props.showAlert(":Converted to uppercase", "success");
    }
    const handleClickLower=()=>{
        let newText=text.toLowerCase();
setText(newText);
props.showAlert(":Converted to lowercase", "success");
    }
    const handleChange=(event)=>{
        setText(event.target.value);

}
const handleClickclear=()=>{
    let newText='';
    setText(newText);
    props.showAlert(":Text has been cleared", "success");
}
const handleClickCap=()=>{
    let newText = text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
    setText(newText);
    props.showAlert(":Text changed", "success");
}
const onAlternatingCase = () => {
    let newtext = ""
    for (let index = 0; index < text.length; index++) {
        if ((index % 2) === 0) {
            newtext += text[index].toLowerCase()
        }
        else {
            newtext += text[index].toUpperCase()
        }

    }
    setText(newtext)
    props.showAlert(":Converted to Alternate case", "success");
}
const copyText = () => {
    navigator.clipboard.writeText(text)
    document.getSelection().removeAllRanges();
    props.showAlert(":Text has been copied to clipboard", "success");
  }
  const download=()=>{
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "text.txt";
    link.click();
    URL.revokeObjectURL(url);
    props.showAlert(":You have downloaded text successfully ",  "success",);
  }
  const remex=()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert(":Extra spaces has been removed", "success");
  }
 
    const [text,setText]=useState('');
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1 className='mb-2'>{props.heading}</h1>
<div className="mb-2">
  <textarea className="form-control" value={text} onChange={handleChange}  style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
</div>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClick}>Convert to Uppercase</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClickLower}>Convert to Lowercase</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClickCap}>Convert into Captitalized word</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClickclear}>Clear Text</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={onAlternatingCase}>Convert to alternate case</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={copyText}>Copy Text</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={download}>Download Text</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={remex}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#051c3f'}}>
        <h3>Your text summary</h3>
       
        <p><i>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</i></p>
            <p><i>{0.008 *  text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</i></p>
     
        <h3>Preview</h3>
        <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
    </>
  )
}
