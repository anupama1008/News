import React, { Component } from 'react'
import Newsitem from '../Newsitem'

export class News extends Component {
  render() {
    return (
      <div className='row'>
        <h2>I am a news portal.</h2>
        <div className='col-md-4'>
          <Newsitem title='Coffee' description='Coffee is the most important part of some people life. Do you agree?' url='https://ichef.bbci.co.uk/news/1024/branded_news/1605B/production/_132530209_06236e896487ddce4757e5b4af0d819739332c85.jpg'/>
        </div>
        <div className='col-md-4'>
          <Newsitem title='Tea' description='Tea is the most important part of some people life. Do you agree?'/>
        </div>
        <div className='col-md-4'>
          <Newsitem title='Drinks' description='Drinks is the most important part of some people life. Do you agree?'/>
        </div>
      </div>
    )
  }
}

export default News
