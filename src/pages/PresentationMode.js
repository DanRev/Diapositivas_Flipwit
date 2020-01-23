import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  title: {
    fontWeight: "bold"
  }
});

class PresentationMode extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="Title">Diapositivas</div>
        <div className="Container"></div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(PresentationMode);
