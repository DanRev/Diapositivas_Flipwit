import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  title: {
    fontWeight: "bold",
    fontSize: "25px",
    textAlign: "center",
    marginTop: ".5%"
  }
});

class imagePresentation extends Component {
  render() {
    const { classes } = this.props;
    return <div></div>;
  }
}

export default withStyles(styles, { withTheme: true })(imagePresentation);
