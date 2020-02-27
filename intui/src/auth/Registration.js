import React, { Component } from "react";
import AuthBackendService from '../backend/AuthBackendService';
import Login from './Login';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TextField from "material-ui/TextField";
import AppBar from "material-ui/AppBar";
import RaisedButton from 'material-ui/RaisedButton';

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
      userType : ''
    };

   this.register = this.register.bind(this);
   this.redirectToLogin = this.redirectToLogin.bind(this);
  }
  register(){
    const authBackendService =  new AuthBackendService();
    const formdata = this.state;
    console.log(formdata)
    const response = authBackendService.saveUser(formdata);
    if(response){
      
    }
  }

  redirectToLogin(){
  return (<Login/>) 
  }
   
   render() {
    return(
        <MuiThemeProvider> 
          <React.Fragment>
            <AppBar title="User Registration Page" />
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
              <TextField type="password" name="confirmPassword" 
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
              <RaisedButton style={styles.button} primary={true} onlcik={()=>this.redirectToLogin()} >Exist User</RaisedButton>
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
  }
}
export default Registration;
