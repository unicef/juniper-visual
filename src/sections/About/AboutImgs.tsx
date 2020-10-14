import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid, Button, Link } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme: any) => ({
  root: {
    marginTop: "-50px",
  },
  appimg: {
    paddingBottom: "60px",
    width: "100%",
  },
  rightimg: {
    width: "100%",
  },
  yellowpanel: {
    width: "814px",
    opacity: "0.84",
    padding: "14px",
    height: "296px",
    backgroundColor: "#ffd113",
    marginTop: "103px",
  },
  paneltext: {
    fontFamily: "Cabin",
    fontSize: "28px",
    lineHeight: "37px",
    color: "#000000",
    letterSpacing: "normal",
    padding: "40px 100px 40px 130px",
  },
  yellowpanelmobile: {
    width: "100%",
    opacity: "0.84",
    padding: "14px",
    height: "251px",
    backgroundColor: "#ffd113",
  },
  paneltextmobile: {
    fontFamily: "Cabin",
    fontSize: "22px",
    fontWeight: "bold",
    lineHeight: "37px",
    color: "#000000",
    letterSpacing: "normal",
    padding: "40px 23px 40px 23px",
  },
  buttonToApply: {
    marginTop: "25px",
    width: "227px",
    height: "50px",
    fontFamily: "Cabin",
    fontSize: "14px",
    fontWeight: "bold",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "1.17px",
    textAlign: "center",
    color: "#ffffff",
  },
}));

export const ApplicationImg = () => {
  const classes = useStyles();
  const mobiledevice = useMediaQuery("(max-width: 991px)");
  return (
    <img
      className={classes.appimg}
      src={
        mobiledevice
          ? "/Applicationprocess.svg"
          : "Application_process_desktop.svg"
      }
      alt="Application Process"
    />
  );
};

export const ApplicationMiddleImg = () => {
  const mobiledevice = useMediaQuery("(max-width: 991px)");

  if (mobiledevice) {
    return <ApplicationMiddleImgmobile />;
  } else {
    return <ApplicationMiddleImgdesktop />;
  }
};

export const ApplicationMiddleImgmobile = () => {
  const classes = useStyles();

  return (
    <div className={classes.yellowpanelmobile}>
      <div className={classes.paneltextmobile}>
        Do you have an early stage innovation that could use funding in
        cryptocurrency?
        <Button
          className={classes.buttonToApply}
          color="primary"
          variant="contained"
        >
          <Link
            target="_blank"
            style={{ textDecoration: "none", color: "white" }}
            href="https://www.unicefinnovationfund.org/apply/frontier-technologies"
          >
            APPLY NOW
          </Link>
        </Button>
      </div>
    </div>
  );
};

export const ApplicationMiddleImgdesktop = () => {
  const classes = useStyles();

  return (
    <div>
      <Grid container className={classes.root}>
        <Grid item sm={6}>
          <div className={classes.yellowpanel}>
            <div className={classes.paneltext}>
              Do you have an early stage innovation that could use funding in
              cryptocurrency? <br />
              <Button
                className={classes.buttonToApply}
                color="primary"
                variant="contained"
              >
                <Link
                  target="_blank"
                  style={{ textDecoration: "none", color: "white" }}
                  href="https://www.unicefinnovationfund.org/apply/frontier-technologies"
                >
                  APPLY NOW
                </Link>
              </Button>
            </div>
          </div>
        </Grid>

        <Grid item sm={6}>
          <img
            className={classes.rightimg}
            src="About_Apply.jpg"
            alt="Girls with tablets"
          />
        </Grid>
      </Grid>
    </div>
  );
};
