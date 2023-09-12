// import logo from './logo.svg';
// 1001 : about instate of textform
import './App.css';
import React,{useState} from "react";
// 
// import About1001 from "./componants/About1001";
import Navbar from "./componants/Navbar1701";
import Textform from"./componants/Textform1701";
import Alert from './componants/Alert1701';

// 1501: changes in index.html in public (orginal index.html  rename to index101.html) -change icon
// 1502: display mode in browser tabe name daynemically using toggle func
// Use case : it can use for showing as unread mail in gmail, or unread meaasge in fb-whats app

// 1701 : using this previous 1502 which is without router to deploy on git-pages
// also making changes in navbar 1202 to 1701



function App() {
    const [mode,setMode]=useState('light'); 
    const [alert,setAlert]=useState(null); 
    
          
    const toggleMode = () => {
        if (mode === "light") {
          setMode("dark"); 
          document.body.style.backgroundColor='#01193a';
        showAlert("Dark mode has been enabled","success");
        document.title="TextUtiles- Dark Mode";
        
    } else {
        setMode("light");
        document.body.style.backgroundColor='white';
        showAlert("Light mode has been enabled","success");
        document.title="TextUtiles- Light Mode";
        }
      };


      const showAlert = (message, type)=>{
        setAlert({
          msg: message,
          type: type
        })
        setTimeout(()=>{
            setAlert(null);
        },1500)

    }





    return (
  <>
  {/* <Navbar title="Textute604" aboutText="About Us!"/> */}
  {/* toggleMode={toggleMode} */}
  <Navbar title="Textut1701" mode ={mode} toggleMode={toggleMode}/>
  {/* <Navbar /> */}
  <Alert alert={alert}/>
  <div className="container">
  <Textform showAlert={showAlert} heading="Enter text to analyze below" mode={mode}/>
  {/* <About1001/> */}
  </div>
  
  </>
    );
  } 
  
  export default App;
  