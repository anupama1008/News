import React, { Component } from 'react'
import {Link} from "react-router-dom";
export class Newsitem extends Component {
  render() {
  let {title, description,url}=this.props;
    return (
      <div>
        <div className="card container" style={{width:'18rem', padding:'4px'}}>
          <img src={url} className="card-img-top" alt="..."/>
          <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <Link to="/" className="btn btn-primary">Read More</Link>
          </div>
</div>
</div>
    )
  }
}

export default Newsitem
