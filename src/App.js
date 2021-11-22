import React from 'react'
import About from './components/About'
import InputText from './components/InputText'
import NavBar from './components/NavBar'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const App = () => {

  const [mode, setMode] = React.useState(localStorage.getItem("mode") ? localStorage.getItem("mode") : "light")
  const btnHide = (pm) => {
    switch (pm) {
      case 'dark':
        return 'inline'

      case 'light':
        return 'none'

      case 'NightPurp':
        return 'inline'

      case 'NightTeal':
        return 'inline'

      default:
        return 'inline'
    }
  }
  const [display, setDisplay] = React.useState(btnHide(mode))
  localStorage.setItem("mode", mode)

  const changeMode = () => {
    mode === 'light' ? setMode('dark') : setMode('light')
    setDisplay(btnHide(mode) === 'inline' ? 'none' : 'inline')
  }
  const bgColor = {
    dark: '#212529',
    light: '#f8f9fa',
    NightPurp: "#0a0121",
    NightTeal: "#001917",
    NightOwl: "#1d000c"
  }
  const textColor = {
    dark: '#212529',
    light: '#f8f9fa',
    NightPurp: "#7038f0",
    NightTeal: "#03dac5",
    NightOwl: "#f2307d"
  }

  const bgMode = (pm) => {
    switch (pm) {
      case 'dark':
        return bgColor.dark

      case 'light':
        return bgColor.light

      case 'NightPurp':
        return bgColor.NightPurp

      case 'NightTeal':
        return bgColor.NightTeal

      default:
        return bgColor.NightOwl
    }
  }
  const colorMode = (pm) => {
    switch (pm) {
      case 'dark':
        return textColor.light

      case 'light':
        return textColor.dark

      case 'NightPurp':
        return textColor.NightPurp

      case 'NightTeal':
        return textColor.NightTeal

      default:
        return textColor.NightOwl
    }
  }
  const navBarProps = {
    webTitle: "Basic React Tutorial",
    home: "Home",
    about: "About us",
    Mode: mode
  }
  const inputTextProps = {
    heading: "Enter the text to analyse",
    randerText: `Enter your text here`,
    Mode: mode,
    colorMode: colorMode,
    bgMode: bgMode
  }
  return (
    <>
      <Router>
        <div className={`w-100 min-vh-100 position-relative`} style={{ backgroundColor: bgMode(mode), color: colorMode(mode) }}>
          <div className="position-absolute" style={{ top: 15, right: 2, zIndex: 10000000 }}>
            <div className="form-check form-switch" onClick={() => { changeMode() }}>
              <input className="form-check-input " type="checkbox" role="switch" />
            </div>
          </div>
          <div onClick={() => { setMode("dark") }} className={`position-absolute d-${display}`} style={{ top: 15, right: 341, zIndex: 10000000 }}>
            <button type="button" className={`btn btn-light rounded-pill p-1 bg-dark text-info`}>Basic</button>
          </div>

          <div className={`position-absolute d-${display}`} style={{ top: 15, right: 250, zIndex: 10000000 }}>
            <button onClick={() => { setMode("NightPurp") }} type="button" className={`btn btn-light rounded-pill p-1 `} style={{ backgroundColor: bgColor.NightPurp, color: textColor.NightPurp }}>NightPurp</button>
          </div>


          <div className={`position-absolute d-${display}`} style={{ top: 15, right: 160, zIndex: 10000000 }}>
            <button onClick={() => { setMode("NightTeal") }} type="button" className={`btn btn-light rounded-pill p-1 `} style={{ backgroundColor: bgColor.NightTeal, color: textColor.NightTeal }}>NightTeal</button>
          </div>


          <div className={`position-absolute d-${display}`} style={{ top: 15, right: 70, zIndex: 10000000 }}>
            <button onClick={() => { setMode("NightOwl") }} type="button" className={`btn btn-light rounded-pill p-1 `} style={{ backgroundColor: bgColor.NightOwl, color: textColor.NightOwl }}>NightOwl</button>
          </div>



          <NavBar {...navBarProps} />
          <div className="container">

            

            <Routes>
              <Route exact path="/" element={<InputText {...inputTextProps} />} />
              <Route exact path="/about" element={<About modeDefine={{bgMode:bgMode,colorMode:colorMode,Mode:mode}}/>} />
            </Routes>

          </div>
        </div>
      </Router>
    </>
  )
}

export default App
