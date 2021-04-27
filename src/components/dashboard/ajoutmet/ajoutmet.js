import React, { Component } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import './ajoutmet.css'

class Amet extends Component {
  state = {}
  handleSubmit = e =>{
    e.preventDefault();
  
    const data ={
        nomMetier : this.nomMet,
        description : this.desc,
        image :this.image
  }
  const config ={
    headers:{
        Authorization: 'Bearer ' + localStorage.getItem('token')
    }
    
}
  axios.post('http://localhost:8080/api/metier/metiers',data,config).then(res => {
    console.log(res)
  }).catch(err => {
    console.log(err)
  })
}
    render(){
        return (
          <div className="login amet">

            <form onSubmit={this.handleSubmit}> 
            <h1>Ajouter un Metier</h1>
                <div>
                <FontAwesomeIcon className="icon" icon={faUser} />
                <input type="text" placeholder="nom du metier" onChange={e=> this.nomMet = e.target.value}></input>
                </div>
                <div>
                <FontAwesomeIcon className="icon" icon={faLock} />
                <input type="text" placeholder="description"onChange={e=> this.desc = e.target.value} ></input>
                </div>
                <input type="submit"></input>
            </form>
          </div>
        )}
}
export default Amet