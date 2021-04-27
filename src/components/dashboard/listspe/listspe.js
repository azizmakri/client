import React, { Component } from 'react'

import axios from 'axios'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './listspe.css'
import '../listsfac/listfac.css'


class ListSpe extends Component {
    constructor(props) {
        super(props);
        this.state = {
         spe: []
        };
        
        
        
        
      }
      
    componentDidMount(){
        const config ={
            headers:{
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
            
        }
         axios.get("http://localhost:8080/api/specialite/specialites",config).then(
            res => {
            console.log(res.data)
            this.setState({spe: res.data})
            }
        ).catch(err => console.log(err))
        
    }
    deleteRow(id){
      axios.delete(`http://localhost:8080/api/specialite/specialites/${id}`,{
        headers:{
          Authorization: 'Bearer ' + localStorage.getItem('token')
      }
      })
        .then(res => {
          console.log(res);
          console.log(res.data);
    
          const specs = this.state.spe.filter(row => row.id !== id);
        })
        window.location.reload();
    }
    
    render(){
      
        
        const { spe } = this.state
        return (
          <div className="list">
            
    <TableContainer component={Paper}>
      <Table className="test" aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><b>id</b></TableCell>
            <TableCell ><b>nom de Specialite</b></TableCell>
            <TableCell ><b>description</b></TableCell>
            <TableCell ><b>action</b></TableCell>
            <TableCell ><b></b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {spe.length ?spe.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell >{row.nomSpecialite}</TableCell>
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
export default ListSpe