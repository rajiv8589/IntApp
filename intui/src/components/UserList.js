import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import AuthBackendService from '../backend/AuthBackendService';
import { lightBlue100 } from 'material-ui/styles/colors';


class  UserList extends Component {
    constructor(){
        super();
        this.state = {
            id : '',
            firstName : '',
            middleName : '',
            lastName : '',
            username : '',
            password : '',
            confirmPassword : '',
            dOB : '',
            address : {address1:'', address2: '', address3: '', pinCode: '', state: '', country: ''},
            email : '',
            phoneNo : 0,
            userType : '',
            userData: []
          };
          const authBackendService =  new AuthBackendService();
          authBackendService.getUsers().then((response) => {
            console.log(response.data);
            this.setState({
                userData: response.data
            }) 
          });
        
    }
    
    componentDidMount(){
        console.log("componentDidMount")
    }

    render(){
        const rows = this.state.userData;
        console.log("render" + rows);
        return (
            <TableContainer component={Paper}>
              <Table  aria-label="simple table">
                <TableHead style={styles.header}>
                  <TableRow>
                    <TableCell>First Name</TableCell>
                    <TableCell >Middle Name</TableCell>
                    <TableCell >Last Name</TableCell>
                    <TableCell >User Name</TableCell>
                    <TableCell >Date of Birth</TableCell>
                    <TableCell >Email</TableCell>
                    <TableCell >Phone Number</TableCell>
                    <TableCell >User Type</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map(row => (
                    <TableRow key={row.id}>
                      <TableCell component="th" scope="row">
                        {row.firstName}
                      </TableCell>
                      <TableCell >{row.middleName}</TableCell>
                      <TableCell >{row.lastName}</TableCell>
                      <TableCell >{row.username}</TableCell>
                      <TableCell >{row.dob}</TableCell>
                      <TableCell >{row.email}</TableCell>
                      <TableCell >{row.phoneNo}</TableCell>
                      <TableCell >{row.userType}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          );
    }

  
}
const styles = {
    header: {
        color: lightBlue100,
        margin: 15
    }
}

export default UserList;