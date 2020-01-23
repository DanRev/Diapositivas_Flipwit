import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  title: {
    fontWeight: "bold",
    fontSize: "12px",
    textAlign: "center",
    marginTop: ".5%"
  },
  imagePreview: {
    width: "65%"
  },
  containerImage: {
    display: "flex",
    justifyContent: "center"
  },
  containerPreview: {
    border: "2px solid #FF5722",
    borderRadius: "10px 10px 10px 10px",
    cursor: "pointer",
    marginBottom:'15px',
  }
});

class imagePresentation extends Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <div className={classes.containerPreview} onClick={true}>
          <div className={classes.title}>
            {`Diapositiva ${this.props.idpreview}`}
          </div>
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
