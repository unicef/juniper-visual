import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid, useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles((theme: any) => ({
  desktop: {},
  mobile: {
    paddingTop: "59px",
    width: "100%",
    paddingLeft: "165px",
  },
}));

export const TrackMainImage = () => {
  const classes = useStyles();
  const mobiledevice = useMediaQuery("(max-width: 991px)");

  if (mobiledevice) {
    return (
      <img
        className={classes.mobile}
        src="/Track_illustration.svg"
        alt="receive info"
      />
    );
  } else {
    return (
      <img
        className={classes.desktop}
        src="/Track_illustration.svg"
        alt="receive info"
      />
    );
  }
};
