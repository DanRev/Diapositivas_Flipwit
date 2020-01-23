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

class PresentationMode extends Component {
  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <div className={classes.title}>Diapositivas</div>
        <div className="Container"></div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(PresentationMode);
