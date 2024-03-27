
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'


function App() {
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)

  const ShowAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null)
    },1000)
  }
  

  const toggleMode = ()=>{
    if(mode==="dark"){
      setMode("light")
      // document.body.style.backgroundColor="white"
      document.body.style.backgroundImage = "none";
        ShowAlert("light mode Enable","success")

    }else{
      setMode("dark")
      // document.body.style.backgroundColor="grey"
      document.body.style.backgroundImage = "linear-gradient(147deg, #d7d7d7 0%, #353535 74%)";
      ShowAlert("Dark mode Enable","success")
    }

   
  }
  return (
   <>
   
   

   <Navbar mode={mode}  toggleMode={toggleMode} />
   <Alert Alert={alert} />
   <TextForm ShowAlert={ShowAlert} heading="Enter Your Numbers"  mode={mode} />
   
   
   </>
  );
}

export default App;
