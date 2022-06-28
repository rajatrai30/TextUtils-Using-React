import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'

export default function Navigation(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} style={{
        backgroundColor: "#3e96e3 !important",
        'boxShadow': '0 2px 8px 0 rgb(0 0 0)'
      }}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/about">About Us</Link>
              </li>
            </ul>


            {/* CLASSES FOR DIFFERENT TEMPLATES FOR THE APP */}
            {/* <div className="d-flex">
              <div className="bg-primary rounded mx-2" onClick={() => props.handleDarkMode('primary')} style={{width:'30px', height:'30px', cursor:'pointer', border: '2px solid'}}></div>
              <div className="bg-danger rounded mx-2" onClick={() => props.handleDarkMode('danger')} style={{width:'30px', height:'30px', cursor:'pointer', border: '2px solid'}}></div>
              <div className="bg-success rounded mx-2" onClick={() => props.handleDarkMode('success')} style={{width:'30px', height:'30px', cursor:'pointer', border: '2px solid'}}></div>
              <div className="bg-warning rounded mx-2" onClick={() => props.handleDarkMode('warning')} style={{width:'30px', height:'30px', cursor:'pointer', border: '2px solid'}}></div>
              <div className="bg-light rounded mx-2" onClick={() => props.handleDarkMode('light')} style={{width:'30px', height:'30px', cursor:'pointer', border: '2px solid'}}></div>
              <div className="bg-dark rounded mx-2" onClick={() => props.handleDarkMode('dark')} style={{width:'30px', height:'30px', cursor:'pointer'}}></div>
            </div> */}



            <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
              <input className="form-check-input" onClick={props.handleDarkMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label light" htmlFor="flexSwitchCheckDefault"><b>Enable Dark Mode</b></label>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}



Navigation.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired
}

Navigation.defaultProps = {
  title: "set title",
  about: "set about"
}