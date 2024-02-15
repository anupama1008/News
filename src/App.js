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
              <Route exact path='/news' Component={() => <News items={3} />} />
              <Route exact path='/' Component={() => <News items={3} />} />
            </Routes>
          </Router>
        </div>
      </>
    )
  }
}
