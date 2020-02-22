import React, { Component } from "react";
import AuthBackendService from '../backend/AuthBackendService'
import axios from 'axios';

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

   // this.handleChange = this.handleChange.bind(this);
    //this.register = this.register.bind(this);
    const authBackendService =  new AuthBackendService();
  }
  register(){
      const formdata = {
        firstName: "Rajiv", lastName: "Ranjan", middleName: "", username: "", password: "", confirmPassword: "", dOB: "", address:{}, email: "", phoneNo: 0, userType: ""
      }
      window.axios.post('http://192.168.99.1/contractServices/user/register', formdata).then(response=>{
        console.log(response);
      });
  }
   render() {
    return(
        <div> 
            <input type="text" name="firstName" placeholder="Please enter your first name." /> <br /><br />
            <input type="text" name="middleName" placeholder="Please enter your middle name." /> <br /><br />
            <input type="text" name="lastName" placeholder="Please enter your last name." /> <br /><br />
            <input type="text" name="username" placeholder="Please enter your user ID." /> <br /><br />
           <input type="password" name="password" placeholder="Please enter your password." /> <br /><br />
           <input type="password" name="confirmPassword" placeholder="Please renter your password." /> <br /><br />
           <input type="text" name="dOB" placeholder="Please enter your DOB." /> <br /><br />
           <input type="text" name="address" placeholder="Please enter your adress." /> <br /><br />
           <input type="text" name="email" placeholder="Please enter your email adress." /> <br /><br />
           <input type="text" name="phoneNo" placeholder="Please enter your phoneNo." /> <br /><br />
           <input type="text" name="userType" placeholder="Please enter your userType." /> <br /><br />
            <button onClick={()=>this.register()}>Register</button>
        </div>
    ); 
  }
}

export default Registration;
