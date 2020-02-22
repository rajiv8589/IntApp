import React, { Component } from 'react';

class Login extends Component {
    constructor(){
        super();
        this.state = {
            username: '',
            password: ''
        }
    }
    login(){
        console.log(this.state);
    }
    render() {

        return(
            <div> 
                <input type="text" name="username" placeholder="Please enter your user ID." /> <br /><br />
               <input type="password" name="password" placeholder="Please enter your password." /> <br /><br />
                <button onClick={()=>this.login()}>Submit</button>
            </div>
        ); 
    }

}

export default Login