import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  title: {
    fontWeight: "bold",
    fontSize: "25px",
    textAlign: "center",
    marginTop: ".5%"
  },
  imagePreview: {
    width: "65%",
    border: "2.5px solid #000",
    cursor: "pointer"
  },
  containerImage: {
    display: "flex",
    justifyContent: "center",
    margin: "0px 15px 0px 15px"
  },
  containerPreview: {
    marginBottom: "15px"
  }
});

class imagePresentation extends Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <div className={classes.containerPreview}>
          <div className={classes.title}>{this.props.idpreview}</div>
          <div className="childContainer">
            <figure className={classes.containerImage}>
              <img
                className={classes.imagePreview}
                src={this.props.weburl}
                alt={"Diapositiva\t" + this.props.idpreview}
              />
            </figure>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(imagePresentation);
