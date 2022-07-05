import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from "./components/Alert";
import About from "./components/About";
import {
  BrowserRouter,
  Routes,
  Route

} from "react-router-dom";


function App() {
  // TO ENABLE LIGHT AND DARK MODE
  const [mode, setMode] = useState("light")
  const toggleMode = () => {
    if (mode === 'light') {
      setMode("dark")
      document.body.style.backgroundColor = "rgb(0 0 0 / 90%)"
      showAlert("Success", "Dark Mode Enabled")
      // TO DYNAMICALLY CHANGE TITLE
      //   setInterval(() => {
      //     document.title = "follow On IG"
      //   }, 1000);
      //   setInterval(() => {
      //     document.title = "Click me"
      //   }, 2500);
    }
    else if (mode === "secondary") {
      setMode("dark")
      document.body.style.backgroundColor = "rgb(0 0 0 / 90%)"
      showAlert("Success", "Dark Mode Enabled")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = "white"
      showAlert("Success", "Light Mode Enabled")
    }
  };

  const toggleModeSecondary = () => {
    if (mode === "light") {
      setMode("secondary")
      showAlert("Success", "Grey Mode enabled")
      document.body.style.backgroundColor = "rgb(0 0 0 / 50%)"
    }
    else if (mode === "dark") {
      setMode("secondary")
      document.body.style.backgroundColor = "grey"
      showAlert("Success", "Dark Mode Enabled")

    }
    else {
      setMode("light")
      showAlert("Success", "Light Mode Enabled")
      document.body.style.backgroundColor = "white"

    }
  }
  const [alert, setAlert] = useState(null)

  const showAlert = (type, message) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }


  return (
    < >
      <BrowserRouter>
        <Navbar title="Text Corrector" mode={mode} toggleMode={toggleMode} toggleModeSecondary={toggleModeSecondary} />
        <Alert alert={alert} />
        <div className="container my-3" >
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />} />
            <Route exact path="/" element={<TextForm h1="Input text to check" mode={mode} showAlert={showAlert} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ >
  );
}

export default App;

