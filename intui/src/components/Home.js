import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";

class Home extends Component {
  render() {
    return( 
      <MuiThemeProvider > 
          <React.Fragment>
              <AppBar title="Dashboard of Conract Services."/>
              <h1>Here goes all contract services available.</h1>
          </React.Fragment>
      </MuiThemeProvider>
      );
  }
}

export default Home;
