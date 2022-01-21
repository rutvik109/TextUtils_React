import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState, Component } from 'react'; 
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null)
  const [Mode, setMode] = useState("light")

  const showAlert = (message,type) =>{
    setAlert({
    msg : message,
    type : type})

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const modeChange = ()=>{
    if(Mode === "light"){
      setMode('dark')
      document.body.style.backgroundColor = "#495057";
      showAlert("Dark Mode is Enabled!!","success");
      //document.title = "TextUtils - Dark Mode";
      // setInterval(() => {
      //   document.title = "TextUtils is amazing."
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils Now."
      // }, 1500);
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode is Enabled!!","success");
      //document.title = "TextUtils - Light Mode";
    }
  }
  
  return (
    <>
    <BrowserRouter>
    <Navbar title = "TextUtils" about = "About" mode = {Mode} modechange = {modeChange}/>
    <Alert alert = {alert}/>
    <div className="container my-3">
    
    <Routes>
      <Route exact path="/" element={<TextForm heading = "Try TextUtils - word counter, character counter, remove extra spaces" mode = {Mode} showAlert= {showAlert}/>}/>
      <Route exact path="/about" element={<About mode = {Mode}/>}/>
   </Routes>
  
    </div>
    </BrowserRouter>
    
    </>
  );
}

export default App;

