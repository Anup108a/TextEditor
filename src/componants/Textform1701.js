import React,{useState} from 'react'
// add {useState} - understand react hook (search-Introducing Hooks in raactjs org docs)

// 1203 preview change in para3 using javascript -turnury opratery '?'
// 1303 showAleart for each button action


export default function Textform801(props) 
{
    const [text, setText] = useState('');
    // right now text value is : 'Enter text here'
    // without change value reflact in Web -with error 'setText' function not used
    // but setText will update text value to :'ABCDEFG' -showing error -so comment out
    // setText("ABCD Changed text");
      // Define a function to handle the button click and update the text
  const convertToUppercase = () => {
    console.log("function convertToUppercase fire");
    let newText=text.toLocaleUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase","success");
  };
  const convertToLowercase = () => {
    
    let newText=text.toLocaleLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase","success");
};


const convertToTitleCase1 = (text) => {
    return text.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
   
};

const convertToTitleCase = () => {
    const newText = convertToTitleCase1(text);
    setText(newText);
    props.showAlert("Converted to Titlecase","success");
};

const clearText = () => {
    let newText="";
    setText(newText);
    props.showAlert("All text cleared","success");
  };

const copyText =()=>{
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied","success");

}  

const removeExtraSpace =()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra space removed","success");

}


//   for input in textare 
  const handleOnChange = (event) => {
    console.log("on change");
    setText(event.target.value); 
    
  };
    
  return (
    <>
    <div className="container1" style={{color:props.mode==='light'?'black':'white'}}>
        <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div className="mb-3">
    <h2>{props.heading}</h2>
  {/* <label htmlFor="myBox" className="form-label">Example textarea</label> */}
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'#03306e',color:props.mode==='light'?'black':'white'}} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary" onClick={convertToUppercase}>Convert to Uppercase</button>
<button className="btn btn-primary mx-2" onClick={convertToLowercase}>Convert to Lowercase</button>
<button className="btn btn-primary mx-2" onClick={convertToTitleCase}>Convert to TitleCase</button>
<button className="btn btn-primary mx-2" onClick={clearText}>Clear Text</button>
<button className="btn btn-primary mx-2" onClick={copyText}>Copy Text</button>
<button className="btn btn-primary mx-2" onClick={removeExtraSpace}>Remove Extra Space</button>
      
    </div>
    <div className="container2 my-4" style={{color:props.mode==='light'?'black':'white'}}>
        <h2>Your text summary </h2>
        <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Words : {text.split(" ").length}<br />
            Characters : {text.length} <br />
            Read time : {0.008*text.split(" ").length} </p>
            <h2>Preview</h2>
            <p className='para3' > {text.length>0?text:"Enter youur text in textarea to preview here" }</p>

    </div>
    </>
  )
}
