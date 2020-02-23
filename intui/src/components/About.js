import React, { Component } from 'react';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";

class  About extends Component {

    render() {

        return( 
        <MuiThemeProvider > 
            <React.Fragment>
                <AppBar title="About Contract Biding Services"/>
                <h1>Here is details about contract services.</h1>
            </React.Fragment>
        </MuiThemeProvider>
        );

    }

}

export default About;