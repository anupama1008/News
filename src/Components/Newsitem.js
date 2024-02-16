import React, { Component } from 'react'
//import {Link} from "react-router-dom";
export class Newsitem extends Component {
  render() {
  let {title, description,newsurl,image}=this.props;
    return (
        <div className="container card">
          <img src={image?image:"https://img.freepik.com/free-photo/3d-rendering-illustration-letter-blocks-forming-word-news-white-background_181624-60840.jpg"} className="card-img-top" alt="..."/>
          <div className="card-body">
              <h5 className="card-title">{title}...</h5>
              <p className="card-text">{description}...</p>
              <a rel='noreferrer'href={newsurl} target='_blank' className="btn btn-dark">Read More</a>
          </div>
</div>
    )
  }
}

export default Newsitem
