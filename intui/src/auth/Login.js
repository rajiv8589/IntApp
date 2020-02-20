import React, { Component } from 'react';

class Login extends Component {
    login(){
        alert("Login Success");
    }
    render() {

        return(
            <div> 
                <input type="text" name="userId" placeholder="Please enter your user ID." /> <br /><br />
               <input type="password" name="password" placeholder="Please enter your password." /> <br /><br />
                <button onClick={()=>this.login()}>Submit</button>
            </div>
        ); 
    }

}

export default Login