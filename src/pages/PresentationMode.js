import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import ImagePresentation from "../components/ImagePresentation";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const styles = theme => ({
  title: {
    fontWeight: "bold",
    fontSize: "25px",
    textAlign: "center",
    marginTop: ".5%",
    marginBottom: "1%"
  },
  container: {
    display: "grid",
    width: "95%",
    gridGap: "1.5%",
    margin: "0px 15px 0px 15px"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 160
  }
});

class PresentationMode extends Component {
  state = {
    numCol: 3
  };

  render() {
    const { classes } = this.props;

    var obj = [
      {
        idSlide: 1,
        md5: "276b6f5894288039b1f88cdfd47ae8c5",
        note: "",
        url:
          "https://firebasestorage.googleapis.com/v0/b/toglea-9fec0.appspot.com/o/dbeltrangomez-z8gv%2FPresentaci%C3%B3n%20Firewall.pptx%2F1.jpg?alt=media&token=d2acec79-efdb-44c0-bf35-0532bf6ce66c"
      },
      {
        idSlide: 2,
        md5: "b89ccc167174349f41bcc05100c3ee3e",
        note: "",
        url:
          "https://firebasestorage.googleapis.com/v0/b/toglea-9fec0.appspot.com/o/dbeltrangomez-z8gv%2FPresentaci%C3%B3n%20Firewall.pptx%2F2.jpg?alt=media&token=31a028bf-1bfd-4110-ae00-cd916793ad1a"
      },
      {
        idSlide: 3,
        md5: "5f8dae646130551a985ae72817d8a277",
        note: "",
        url:
          "https://firebasestorage.googleapis.com/v0/b/toglea-9fec0.appspot.com/o/dbeltrangomez-z8gv%2FPresentaci%C3%B3n%20Firewall.pptx%2F3.jpg?alt=media&token=5097a1a5-2a96-44b4-851c-e3cc604b8833"
      },
      {
        idSlide: 4,
        md5: "59eaa13847d00eab6de74d02a32d7f98",
        note: "",
        url:
          "https://firebasestorage.googleapis.com/v0/b/toglea-9fec0.appspot.com/o/dbeltrangomez-z8gv%2FPresentaci%C3%B3n%20Firewall.pptx%2F4.jpg?alt=media&token=d0aa58ce-aac6-4e07-aa61-05a75222a37b"
      },
      {
        idSlide: 5,
        md5: "77ef7decaa1fe3c0300ad6e6429c1dfb",
        note: "",
        url:
          "https://firebasestorage.googleapis.com/v0/b/toglea-9fec0.appspot.com/o/dbeltrangomez-z8gv%2FPresentaci%C3%B3n%20Firewall.pptx%2F5.jpg?alt=media&token=7719cf2b-c71f-426c-8af4-9ec8ff9369c5"
      },
      {
        idSlide: 6,
        md5: "ce57f9dfd658a76af727f0e0d5c3dcee",
        note: "",
        url:
          "https://firebasestorage.googleapis.com/v0/b/toglea-9fec0.appspot.com/o/dbeltrangomez-z8gv%2FPresentaci%C3%B3n%20Firewall.pptx%2F6.jpg?alt=media&token=f16737d6-fc2e-4688-9297-3a38984e912f"
      },
      {
        idSlide: 7,
        md5: "4920f0751b10fb97bc4eff571b7da4ad",
        note: "",
        url:
          "https://firebasestorage.googleapis.com/v0/b/toglea-9fec0.appspot.com/o/dbeltrangomez-z8gv%2FPresentaci%C3%B3n%20Firewall.pptx%2F7.jpg?alt=media&token=b29b9fe6-e9cd-4805-ace0-cbc2079aea3a"
      },
      {
        idSlide: 8,
        md5: "8dbde4a37e143e5e1c52b78ae4548c78",
        note: "",
        url:
          "https://firebasestorage.googleapis.com/v0/b/toglea-9fec0.appspot.com/o/dbeltrangomez-z8gv%2FPresentaci%C3%B3n%20Firewall.pptx%2F8.jpg?alt=media&token=b4a3cc17-727d-44e8-a35d-7d0330414d9d"
      },
      {
        idSlide: 9,
        md5: "df90798ca958ad89c3145d258f8a8d35",
        note: "",
        url:
          "https://firebasestorage.googleapis.com/v0/b/toglea-9fec0.appspot.com/o/dbeltrangomez-z8gv%2FPresentaci%C3%B3n%20Firewall.pptx%2F9.jpg?alt=media&token=2ee44884-45c4-47b2-b5f8-25da2d8f9208"
      },
      {
        idSlide: 10,
        md5: "835e9fac0f4150a9ccbd4cc7a1012d08",
        note: "",
        url:
          "https://firebasestorage.googleapis.com/v0/b/toglea-9fec0.appspot.com/o/dbeltrangomez-z8gv%2FPresentaci%C3%B3n%20Firewall.pptx%2F10.jpg?alt=media&token=d018d2ec-cc76-4a11-851c-192ae1b12d1e"
      }
    ];

    const handleChange = event => {
      this.setState({ numCol: event.target.value });
    };

    console.log(parseInt(`${this.state.numCol}`));
    console.log(100 / this.state.numCol);
    var numColumnas = parseInt(`${this.state.numCol}`);
    var pct = 100 / numColumnas;
    console.log(`${numColumnas}`, `${pct}`);

    // console.log("repeat(`${this.state.numCol}`,`${this.state.pct}%`)");

    return (
      <React.Fragment>
        <FormControl className={classes.formControl}>
          <InputLabel id="labelAge">Numero de Columnas</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={this.state.numCol}
            onChange={handleChange}
          >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
          </Select>
        </FormControl>
        <div className={classes.maxContainer}>
          {console.log(`${numColumnas}`)}
          <div
            className={classes.container}
            style={{
              gridTemplateColumns: "repeat(`${numColumnas}`, ``)"
            }}
          >
            {obj.map((value, index, array) => {
              return (
                <ImagePresentation
                  key={value.idSlide}
                  idpreview={value.idSlide}
                  weburl={value.url}
                />
              );
            })}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(PresentationMode);
