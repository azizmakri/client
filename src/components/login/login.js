import React, { Component } from 'react'
import './login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { Redirect } from "react-router-dom";


class Login extends Component {
  state = {}
  handleSubmit = e =>{
    e.preventDefault();
  
    const data ={
    usernameOrEmail : this.email,
    password : this.password
  }
  
  axios.post('http://localhost:8080/api/auth/signin',data).then(res => {
    localStorage.setItem('token',res.data.accessToken)
    this.setState({
      islogin:true
    })
  }).catch(err => {
    console.log(err)
  })
  
}
    render(){
      if (this.state.islogin) {
        window.location.reload(false);
        return <Redirect to='/' />
      }
        return (
          <div className="login">

            <form onSubmit={this.handleSubmit}> 
            <h1>Login</h1>
                <div>
                <FontAwesomeIcon className="icon" icon={faUser} />
                <input type="text" placeholder="Username or Email" onChange={e=> this.email = e.target.value}></input>
                </div>
                <div>
                <FontAwesomeIcon className="icon" icon={faLock} />
                <input type="password" placeholder="Password"onChange={e=> this.password = e.target.value} ></input>
                </div>
                <input type="submit"></input>
            </form>
          </div>
        )}
}
export default Login