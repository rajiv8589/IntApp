import React, { Component } from 'react';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TextField from "material-ui/TextField";
import RaisedButton from 'material-ui/RaisedButton';
import Typography from '@material-ui/core/Typography'
import { blueA200 } from 'material-ui/styles/colors';

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
                    <Typography variant="h3" style={styles.typ}>Enter Your credential here.</Typography>
                    <TextField type="text" name="username" hintText="Please enter your user ID." floatingLabelText="User ID"/> <br /><br />
                    <TextField type="password" name="password" hintText="Please enter your password." floatingLabelText="Password"/> <br /><br />
                    <RaisedButton primary={true} onClick={()=>this.login()}>Submit</RaisedButton>
                </React.Fragment>
            </MuiThemeProvider>
        ); 
    }

}

const styles = {
    typ : {
        color: blueA200
    }
}

export default Login