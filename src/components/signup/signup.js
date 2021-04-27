import React, { Component } from 'react'
import './signup.css'
import axios from 'axios'

class Signup extends Component {
  constructor(props){
    super(props);
    this.state = {
       name:'',
       username:'',
       email : '' ,
       password : ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange(event){
        this.setState({
            [event.target.name] : event.target.value
            
        });
}
handleSubmit(event){
        event.preventDefault();

        const signin = {
        name:this.state.name,
        username:this.state.username,
        email : this.state.email,
        password : this.state.password
        };
        console.log(signin);
        

 axios.post("http://localhost:8080/api/auth/signup",signin)
 .catch((error) => alert("User Already exists"))

}



    render(){
        return (
          <div className="signup">
            <form className="form-horizontal" ref="form" onSubmit={this.handleSubmit}>
            <h1>Sign up</h1>
                <div>
                <input type="name" name="name" onChange={this.handleChange} className="form-control" placeholder="name" required />
                </div>

                <div>
                <input type="username" name="username" onChange={this.handleChange} className="form-control" placeholder="username" required />
                </div>
              
                <div>
                <input type="email" name="email" onChange={this.handleChange} className="form-control" placeholder="email" required />
                </div>

                <div>
                <input type="password" name="password" onChange={this.handleChange} className="form-control" placeholder="password" required />
                </div>
                
                <button type="submit" className="btn btn-default">Envoyer</button>
            </form>
          </div>
        )}
}
export default Signup