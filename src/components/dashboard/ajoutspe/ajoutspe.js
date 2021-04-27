import React, { Component } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import './ajoutmet.css'

class Aspe extends Component {
    constructor(props) {
        super(props);
        this.state = {
         fac: []
        };
      }
    componentDidMount(){
        const config ={
            headers:{
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
            
        }
         axios.get("http://localhost:8080/api/facultes/facultes",config).then(
            res => {
            console.log(res.data)
            this.setState({posts: res.data})
            }
        ).catch(err => console.log(err))
        
    }

  state = {}
  handleSubmit = e =>{
    e.preventDefault();
  
    const data ={
        nomSpecialite : this.nomSpe,
        description : this.desc,
        image :this.image
  }
  const config ={
    headers:{
        Authorization: 'Bearer ' + localStorage.getItem('token')
    }
    
}
  axios.post('http://localhost:8080/api/specialite/metiers',data,config).then(res => {
    console.log(res)
  }).catch(err => {
    console.log(err)
  })
}
    render(){
        const { fac} = this.state
        console.log(fac)
        return (
          <div className="login amet">

            <form onSubmit={this.handleSubmit}> 
            <h1>Ajouter un specialite</h1>
                <div>
                <FontAwesomeIcon className="icon" icon={faUser} />
                <input type="text" placeholder="nom du spécialité" onChange={e=> this.nomSpe = e.target.value}></input>
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
export default Aspe