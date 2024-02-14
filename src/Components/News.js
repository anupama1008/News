import React, { Component } from 'react'
import Newsitem from '../Newsitem'

export class News extends Component {
  render() {
    return (
      <div>
        This is news.
        <Newsitem title='Coffee' description='Coffee is the most important part of some people life. Do you agree?'/>
      </div>
    )
  }
}

export default News
