import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import logo from "./UNICEF.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    boxShadow: "none",
  },
  toolbar: {
    height: 50,
    minHeight: 50,
  },
  logo: {
    width: 230,
    height: 36,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function TopBar() {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.title}>
          <img className={classes.logo} src={logo} alt="UNICEF" />
        </Typography>
        <Typography variant="h6" style={{ color: "#ffffff" }}>
          First Last
        </Typography>
        <ExpandMoreIcon style={{ color: "#ffffff", marginRight: 40 }} />
      </Toolbar>
    </AppBar>
  );
}
