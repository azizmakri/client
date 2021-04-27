import React, { Component } from 'react'
import './nav.css'
import { Link } from 'react-router-dom'


class Nav1 extends Component {

    render(){
        return (
          <div className="nav">
            <div><b><a href="">UniversAfrica</a></b></div>
            <div>
                <div><Link to={"/"} onClick={()=>{localStorage.clear()
                window.location.reload(false);
                }}><b>Logout</b></Link></div>
                
            </div>
          </div>
        )}
}
export default Nav1