import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <Navbar/>
        <News/>
        <News/>
      </div>
    )
  }
}