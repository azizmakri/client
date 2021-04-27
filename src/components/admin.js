
import React, { Component } from 'react'
import Nav from './nav.js'
import Login from './login/login'
import Signup from './signup/signup'
import {BrowserRouter as Router, Switch ,Route } from 'react-router-dom'
import axios from 'axios'
import List from './dashboard/listsfac/listfac'
import Nav1 from './dashboard/layout/nav'
import Sidebar from './dashboard/layout/sidenav'
import './admin.css'
import ListSpe from './dashboard/listspe/listspe'
import Amet from './dashboard/ajoutmet/ajoutmet'
import Lmet from './dashboard/listmet/listmet'
import Afac from './dashboard/ajoutfac/ajoutfac'
import Aspe from './dashboard/ajoutspe/ajoutspe'

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
        users:[]
    };
  }
    componentDidMount (){
        const config ={
            headers:{
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
            
        }
        axios.get('http://localhost:8080/api/user/me',config).then(
            res => {
                console.log(res.data.id)
                this.setState({
                    users : res
                })
            }
        ).catch(err => console.log(err))

    }
    
    
  render(){
    console.log(localStorage.getItem('token'))
    if(localStorage.getItem('token')){
        return (
            <Router>
                <div className="cont">
                <Nav1 />
                <Sidebar></Sidebar>
                <Switch>
                    <Route path="/" exact component={Lmet}></Route>
                    <Route path="/list" component={List}></Route>
                    <Route path="/listspe" component={ListSpe}></Route>
                    <Route path="/ajoutfac" component={Afac}></Route>
                    <Route path="/ajoutmet" component={Amet}></Route>
                    <Route path="/ajoutspe" component={Aspe}></Route>
                </Switch>
                
                </div>
            </Router>
          )
    }else{
        return (
            <Router>
                <Nav />
                
                <Switch>
                    <Route path="/" exact component={Login}></Route>
                    <Route path="/signup" component={Signup}></Route>
                </Switch>
                
           
            </Router>
          )
    }
        
  }
}

export default Admin;
