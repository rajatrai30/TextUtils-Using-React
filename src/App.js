import React, { useState } from 'react';
import Navigation from './Components/Navigation/Navigation';
import Textform from './Components/Text Form/Textform';
import Alert from './Components/Alert';
import About from './Components/About/About';

//ROUTER IMPORTS
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";








// BASIC COMPONENTS
// import UserGreeting from './Components/UserGreeting';
// import ClassClick from './Components/Event Handling/ClassClick';
// import EventBind from './Components/Event Handling/EventBind';
// import { BrowserRouter, Route } from 'react-router-dom';
// import FunctionClick from './Components/Event Handling/FunctionClick';
// import ParentComponent from './Components/ParentComponent';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }



  // REMOVE BODY CLASSES
  // const RemoveBodyClasses = () => {
  //   document.body.classList.remove('bg-light')
  //   document.body.classList.remove('bg-dark')
  //   document.body.classList.remove('bg-primary')
  //   document.body.classList.remove('bg-danger')
  //   document.body.classList.remove('bg-success')
  //   document.body.classList.remove('bg-warning')
  // }

  const handleDarkMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode enabled", "success");
      document.title = 'TextUtils | Dark Mode';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled", "success");
      document.title = 'TextUtils | Light Mode';
    }
  }


  return (
    <Router>
      <div>
        {/* <FunctionClick/>
  <ClassClick/> */}
        {/* <EventBind/> */}
        {/* <ParentComponent/> */}
        {/* <UserGreeting/> */}
        <Navigation title="TextUtils" about="About" mode={mode} handleDarkMode={handleDarkMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About mode={mode} />
            </Route>
            <Route exact path="/">
              <Textform heading="Try TextUtils - Word Counter, Character Counter, Remove extra spaces" mode={mode} showAlert={showAlert} />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>

  )
}
export default App;
