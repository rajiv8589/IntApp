import React, { Component } from "react";

class Registration extends Component {
  render() {
    return(
        <div> 
            <input type="text" name="firstName" placeholder="Please enter your first name." /> <br /><br />
            <input type="text" name="secondName" placeholder="Please enter your second name." /> <br /><br />
            <input type="text" name="userId" placeholder="Please enter your user ID." /> <br /><br />
           <input type="password" name="password" placeholder="Please enter your password." /> <br /><br />
            <button onClick={()=>this.login()}>Register</button>
        </div>
    ); 
  }
}

export default Registration;
