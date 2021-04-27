import React, { Component } from 'react'
import './nav.css'
import { Link } from 'react-router-dom'


class Nav extends Component {

    render(){
        return (
          <div className="nav">
            <div><b><a href="">UniversAfrica</a></b></div>
            <div>
                <div><Link to="/"><div><b>Login</b></div></Link></div>
                <div><Link to="/signup"><div><b>Signup</b></div></Link></div>
            </div>
          </div>
        )}
}
export default Nav