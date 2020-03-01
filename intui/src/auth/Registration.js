import React, { Component } from "react";
import AuthBackendService from '../backend/AuthBackendService';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TextField from "material-ui/TextField";
import Typography from '@material-ui/core/Typography'
import RaisedButton from 'material-ui/RaisedButton';
import { blueA200 } from "material-ui/styles/colors";
import {Redirect} from 'react-router-dom'


class Registration extends Component {
  constructor(){
    super()

    this.state = {
      id : '',
      firstName : '',
      middleName : '',
      lastName : '',
      username : '',
      password : '',
      confirmPassword : '',
      dOB : '',
      address : {},
      email : '',
      phoneNo : 0,
      userType : '',
      redirect : false,
      redirectUserList :false
    };

   this.register = this.register.bind(this);
   //this.redirectToLogin = this.redirectToLogin.bind(this);
  }
  register(){
    const authBackendService =  new AuthBackendService();
    const {firstName, middleName, lastName, username, password, confirmPassword,
    dOB, address, email, phoneNo, userType} = this.state;
    const formdata = {firstName, middleName, lastName, username, password, confirmPassword, dOB, address, email, phoneNo, userType}
    authBackendService.saveUser(formdata).then(response =>{
      if(response.data){
        this.setState({redirectUserList: true});
      }
    } );
  }

  redirectToLogin() {
    this.setState({redirect: true});
  }
   
   render() {
     const {redirect, redirectUserList} = this.state;
     if(redirect){
      return (<Redirect to='/login'/>)
     }
     if(redirectUserList){
      return (<Redirect to='userList'/>)
     }
    return(
        <MuiThemeProvider> 
          <React.Fragment>
            <Typography variant="h3" style={styles.typ}> User Registration Page</Typography>
              <TextField type="text" name="firstName" floatingLabelText="First Name"
               hintText="Please enter your first name." style={styles.txt}
                onChange={event => {this.setState({firstName: event.target.value})}}/>
              <TextField type="text" name="middleName" floatingLabelText="Middle Name"
               hintText="Please enter your middle name." style={styles.txt}
                onChange={event => {this.setState({middleName: event.target.value})}}/> 
              <TextField type="text" name="lastName" floatingLabelText="Last Name"
              hintText="Please enter your last name." style={styles.txt}
              onChange={event => {this.setState({lastName: event.target.value})}}/> <br />
              <TextField type="text" name="username" floatingLabelText="User Name"
              hintText="Please enter your user ID." style={styles.txt}
              onChange={event => {this.setState({username: event.target.value})}}/> 
              <TextField type="password" name="password" floatingLabelText="Password"
              hintText="Please enter your password." style={styles.txt}
              onChange={event => {this.setState({password: event.target.value})}}/>
              <TextField type="password" name="confirmPassword" floatingLabelText="Confirm Password"
              hintText="Please renter your password." style={styles.txt}
              onChange={event => {this.setState({confirmPassword: event.target.value})}}/> <br />
              <TextField type="text" name="dOB" floatingLabelText="DOB" style={styles.txt} 
              hintText="Please enter your DOB." 
              onChange={event => {this.setState({dOB: event.target.value})}} />
              <TextField type="text" name="email" floatingLabelText="Email" 
              hintText="Please enter your email adress." style={styles.txt}
              onChange={event => {this.setState({email: event.target.value})}} />
              <TextField type="text" name="phoneNo" floatingLabelText="Phone Number" 
              hintText="Please enter your phoneNo." style={styles.txt}
              onChange={event => {this.setState({phoneNo: event.target.value})}}/> <br />
              <TextField type="text" name="address" floatingLabelText="Address" 
              hintText="Please enter your adress." style={styles.txt}
              onChange={event => {this.setState({address: {}})}}/>
              <TextField type="text" name="userType" floatingLabelText="User Type" 
              hintText="Please enter your userType." style={styles.txt}
              onChange={event => {this.setState({userType: event.target.value})}}/> <br />
              <RaisedButton style={styles.button} primary={true} onClick={()=>this.register()}>Register</RaisedButton>
              <RaisedButton style={styles.button} primary={true} onClick={() => this.redirectToLogin()} >Exist User</RaisedButton>
          </React.Fragment>
        </MuiThemeProvider>
    ); 
  }
}
const styles = {
  button : {
    margin:15,
    innerWidth : 30
  },
  txt : {
    margin : 20
  },
  typ : {
    color: blueA200
  }
}
export default Registration;
