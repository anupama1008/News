import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default class App extends Component {
  render() {
    const pagesize=20;
    return (
      <>
        <div className='py-4'>
          <Router>
            <Navbar/>
            <Routes>
              <Route exact path='/news' Component={() => <News items={pagesize} category='General'/>} />
              <Route exact path='/' Component={() => <News items={pagesize} category='General'/>} />
              <Route exact path='/science' Component={() => <News items={pagesize} category='Science'/>} />
              <Route exact path='/entertainment' Component={() => <News items={pagesize} category='Entertainment'/>} />
            </Routes>
          </Router>
        </div>
      </>
    )
  }
}
