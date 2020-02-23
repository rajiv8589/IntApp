import React, { Component } from "react";
import AuthBackendService from '../backend/AuthBackendService'
import axios from 'axios';

window.axios =axios;
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
   
  }
  register(){
    const authBackendService =  new AuthBackendService();
    const formdata = this.state;
    console.log(formdata)
    const response = authBackendService.saveUser(formdata);
    console.log(response);
  }
  
   render() {
    return(
        <div> 
            <input type="text" name="firstName" placeholder="Please enter your first name."
             onChange={event => {this.setState({firstName: event.target.value})}}/> <br /><br />
            <input type="text" name="middleName" placeholder="Please enter your middle name."
             onChange={event => {this.setState({middleName: event.target.value})}}/> <br /><br />
            <input type="text" name="lastName" placeholder="Please enter your last name." 
            onChange={event => {this.setState({lastName: event.target.value})}}/> <br /><br />
            <input type="text" name="username" placeholder="Please enter your user ID." 
            onChange={event => {this.setState({username: event.target.value})}}/> <br /><br />
           <input type="password" name="password" placeholder="Please enter your password." 
           onChange={event => {this.setState({password: event.target.value})}}/> <br /><br />
           <input type="password" name="confirmPassword" placeholder="Please renter your password." 
           onChange={event => {this.setState({confirmPassword: event.target.value})}}/> <br /><br />
           <input type="text" name="dOB" placeholder="Please enter your DOB." 
           onChange={event => {this.setState({dOB: event.target.value})}} /> <br /><br />
           <input type="text" name="address" placeholder="Please enter your adress."
            onChange={event => {this.setState({address: {}})}}/> <br /><br />
           <input type="text" name="email" placeholder="Please enter your email adress."
            onChange={event => {this.setState({email: event.target.value})}} /> <br /><br />
           <input type="text" name="phoneNo" placeholder="Please enter your phoneNo." 
           onChange={event => {this.setState({phoneNo: event.target.value})}}/> <br /><br />
           <input type="text" name="userType" placeholder="Please enter your userType." 
           onChange={event => {this.setState({userType: event.target.value})}}/> <br /><br />
            <button onClick={()=>this.register()}>Register</button>
        </div>
    ); 
  }
}

export default Registration;
