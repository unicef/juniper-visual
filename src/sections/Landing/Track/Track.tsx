import React from "react";
import { Grid } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import { TrackObject } from "./TrackObject";
import { TrackText } from "./TrackText";
import { TrackImage } from "./TrackImage";
import { ArrowImg } from "../Atoms/ArrowImg";
import { HorizontalBar } from "../Atoms/HorizontalBar";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    height: "183px",
    paddingBottom: "100px",
  },
  img: {
    paddingLeft: "40px",
  },
  arrow: {
    marginLeft: "50px",
    paddingTop: "20px",
  },
});

export const Track = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item md={5}>
          <TrackText />
        </Grid>
        <Grid item md={2}>
          <TrackObject />
        </Grid>
        <Grid item md={3} className={classes.img}>
          <TrackImage />{" "}
        </Grid>
        <Grid item md={1} className={classes.arrow} />
        <a href="/track">
          {" "}
          <ArrowImg />
        </a>
        <Grid />
      </Grid>
    </div>
  );
};

export const TrackMobile = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item md={6}>
          <TrackText />
        </Grid>
        <Grid item md={1} className={classes.arrow} />
        <a href="/receive">
          <ArrowImg />
        </a>
        <Grid />
      </Grid>
      <Grid container>
        <Grid item md={6}>
          <TrackObject />
        </Grid>
        <Grid item md={6} className={classes.img}>
          <TrackImage />
        </Grid>
      </Grid>
    </div>
  );
};
