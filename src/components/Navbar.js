import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { UseStyles } from "./../styles/StylesGlobal";
import { connect } from "react-redux";


 function Navbar(props) {
  const classes = UseStyles();
  const [counter, SetCounter] = useState('');
  
  useEffect(() => {
    SetCounter(props.cart.length);
  }, [props]);

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to="/" style={{ color: "white" }}>
              Spotify
            </Link>
          </Typography>
          <Link to={  counter >= 5 ? '/grafica' : '#' }>
            <Button color="inherit" style={{ color: "white" }}>
              Grafica
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  }
}

export default  connect(mapStateToProps)(Navbar);