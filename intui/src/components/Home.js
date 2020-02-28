import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Typography from '@material-ui/core/Typography'
import { blueA200 } from "material-ui/styles/colors";

class Home extends Component {
  render() {
    return( 
      <MuiThemeProvider > 
          <React.Fragment>
              <Typography variant="h3" style={styles.typ}>Dashboard of Conract Services</Typography>
              <h1>Here goes all contract services available.</h1>
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

export default Home;
