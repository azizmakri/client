import React, { Component } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import './ajoutfac.css'

class Afac extends Component {
  state = {}
  handleSubmit = e =>{
    e.preventDefault();
  
    const data ={
        nomFaculte : this.nomfac,
        image : this.img,
        description : this.description
  }
  const config ={
    headers:{
        Authorization: 'Bearer ' + localStorage.getItem('token')
    }
    
}
  axios.post('http://localhost:8080/api/facultes/facultes',data,config).then(res => {
    console.log(res)
    
  }).catch(err => {
    console.log(err)
  })
  window.location.reload();
  alert("successful")
}
    render(){
        return (
          <div className="login amet">

            <form onSubmit={this.handleSubmit}> 
            <h1>Ajouter un Faculte</h1>
                <div>
                <FontAwesomeIcon className="icon" icon={faUser} />
                <input type="text" placeholder="Nom du Faculte" onChange={e=> this.nomfac = e.target.value}></input>
                </div>
                <div>
                <FontAwesomeIcon className="icon" icon={faLock} />
                <input type="text" placeholder="description"onChange={e=> this.description = e.target.value} ></input>
                </div>
                <input type="submit"></input>
            </form>
          </div>
        )}
}
export default Afac