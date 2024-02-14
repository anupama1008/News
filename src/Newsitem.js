import React, { Component } from 'react'
import {Link} from "react-router-dom";
export class Newsitem extends Component {
  render() {
  let {title, description}=this.props;
    return (
      <div>
        <div className="card" style={{width:'18rem'}}>
          <img src="..." class="card-img-top" alt="..."/>
          <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <Link to="/" class="btn btn-primary">Go somewhere</Link>
          </div>
</div>
</div>
    )
  }
}

export default Newsitem
