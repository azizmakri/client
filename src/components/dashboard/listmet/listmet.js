import React, { Component } from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios'
import '../listsfac/listfac.css'
import { Link } from 'react-router-dom';



class Lmet extends Component {
    constructor(props) {
        super(props);
        this.state = {
         metiers: []
        };
      }
    componentDidMount(){
        const config ={
            headers:{
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
            
        }
         axios.get("http://localhost:8080/api/metier/metiers",config).then(
            res => {
            console.log(res.data)
            this.setState({metiers: res.data})
            }
        ).catch(err => console.log(err))
        
    }
    deleteRow(id){
      axios.delete(`http://localhost:8080/api/metier/metiers/${id}`,{
        headers:{
          Authorization: 'Bearer ' + localStorage.getItem('token')
      }
      })
        .then(res => {
          console.log(res);
          console.log(res.data);
    
          const metiers = this.state.metiers.filter(row => row.id !== id);
        })
        window.location.reload();
    
    }
    async updateRow(id) {
      axios.put(`http://localhost:8080/api/metier/metiers/${id}`,{
        headers:{
          Authorization: 'Bearer ' + localStorage.getItem('token')
      }
      }
      );
  }
    
    
    render(){
      
        
        const { metiers} = this.state
              
        return (
          
          <div className="list">
            <TableContainer component={Paper}>
      <Table className="test" aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><b>id</b></TableCell>
            <TableCell ><b>nom de metier</b></TableCell>
            <TableCell ><b>description</b></TableCell>
            <TableCell ><b>action</b></TableCell>
            <TableCell ><b></b></TableCell>
            
            
          </TableRow>
        </TableHead>
        <TableBody>
          {metiers.length ?metiers.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell >{row.nomMetier}</TableCell>
              <TableCell >{row.description}</TableCell>
              <TableCell><button className="btnS" onClick={this.deleteRow.bind(this,row.id)}> <b>supprimer</b></button></TableCell>
            </TableRow>
          )):null}
        </TableBody>
      </Table>
    </TableContainer>
            
          </div>
        );
            
          
}}
export default Lmet