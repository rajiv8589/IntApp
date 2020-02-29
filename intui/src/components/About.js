import React, { Component } from 'react';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Typography from '@material-ui/core/Typography'
import { blueA200 } from 'material-ui/styles/colors';

class  About extends Component {

    render() {

        return( 
        <MuiThemeProvider > 
            <React.Fragment>
                <Typography variant="h3" style={styles.typ}> About Contract Biding Services</Typography>
                <h1>Here is details about contract services.</h1>
            </React.Fragment>
        </MuiThemeProvider>
        );

    }

}

const styles = {
    typ:{
        color: blueA200
    }
}

export default About;