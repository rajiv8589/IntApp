import React, { Component } from 'react';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TextField from "material-ui/TextField";
import AppBar from "material-ui/AppBar";
import RaisedButton from 'material-ui/RaisedButton';

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
            <MuiThemeProvider> 
                <React.Fragment>
                    <AppBar title="Enter Your credential here."/>
                    <TextField type="text" name="username" hintText="Please enter your user ID." floatingLabelText="User ID"/> <br /><br />
                    <TextField type="password" name="password" hintText="Please enter your password." floatingLabelText="Password"/> <br /><br />
                    <RaisedButton primary={true} onClick={()=>this.login()}>Submit</RaisedButton>
                </React.Fragment>
            </MuiThemeProvider>
        ); 
    }

}

export default Login