import React from 'react'
import InputText from './components/InputText'
import NavBar from './components/NavBar'


const App = () => {
  const [mode, setMode] = React.useState('light')
  const changeMode = ()=> mode === 'light'? setMode('dark'):setMode('light')
  const navBarProps = {
    webTitle: "Basic React Tutorial",
    home: "Home1",
    about: "About us",
    Mode : mode
  }
  const inputTextProps = {
    heading: "Enter the text to analyse",
    randerText: `Enter your text here`,
    Mode : mode
  }


  return (
    <>
      <div className={`w-100 min-vh-100 bg-${mode} text-${mode === 'light'?'dark':'light'} position-relative`}>
        <div className="position-absolute" style={{ top: 15, right: 2, zIndex:10000000}}>
          <div className="form-check form-switch" onClick={changeMode}>
            <input className="form-check-input " type="checkbox" role="switch" />
          </div>
        </div>
        <NavBar {...navBarProps} />
        <div className="container">
          <InputText {...inputTextProps} />
        </div>
      </div>
    </>
  )
}

export default App
