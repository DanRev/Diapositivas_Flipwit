import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  title: {
    fontWeight: "bold",
    fontSize: "25px"
  }
});

class PresentationMode extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="title">Diapositivas</div>
        <div className="Container"></div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(PresentationMode);
