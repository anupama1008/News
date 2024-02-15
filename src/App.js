import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
export default class App extends Component {
  render() {
    return (
      <>
      <div className='py-4'>
        <Router>
        <Navbar/>
        <Routes>
          <Route exact path='/home' Component={News}></Route>
        </Routes>
        </Router>
      </div>
      </>
    )
  }
}