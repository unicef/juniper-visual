import React, { useState } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Button, Grid, useMediaQuery } from "@material-ui/core";
import { FundingProcessImage } from "./FundingProcessImage";
import json2mq from "json2mq";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    padding: "14px",
  },
  titleStyle: {
    width: "55px",
    height: "20px",
    fontFamily: "Cabin",
    fontSize: "14px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "1.17px",
    color: "#000000",
    paddingLeft: "30px",
    marginTop: "-23px",
  },
  textStyle: {
    width: "342px",
    height: "81px",
    fontFamily: "IBM Plex Sans",
    fontSize: "16px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "1.69",
    color: "#000000",
    padding: "0px 15px 0px 0px",
  },
  circleStyle: {
    width: "20px",
    height: "20px",
    transform: "rotate(-360deg)",
    borderRadius: "50%",
    display: "inline-block",
  },
  widthOfBox: {
    width: "342px",
  },
  buttonActive: {
    width: "196px",
    height: "44px",
    borderRadius: "5px",
    backgroundColor: "#0068ea",
    fontFamily: "Cabin",
    fontSize: "12px",
    fontWeight: "bold",
    letterSpacing: "1px",
    textAlign: "center",
    color: "#ffffff",
  },
  buttonInactive: {
    width: "196px",
    height: "44px",
    borderRadius: "5px",
    backgroundColor: "#cbcbcb",
    fontFamily: "Cabin",
    fontSize: "12px",
    fontWeight: "bold",
    letterSpacing: "1px",
    textAlign: "center",
    color: "#777777",
  },
  title: {
    fontFamily: "Cabin",
    fontSize: "28px",
    fontWeight: "bold",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.64",
    letterSpacing: "normal",
    color: "#000000",
  },
  text: {
    fontFamily: "IBM Plex Sans",
    fontSize: "22px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.41",
    letterSpacing: "normal",
    color: "#000000",
  },
}));

export const FundingProcessExplainer = () => {
  const classes = useStyles();
  const [flagForImage, setFlagForImage] = useState(true);
  const [donorTitle] = useState("DONORS");
  const [unicefTitle] = useState("UNICEF");
  const [startUpTitle] = useState("STARTUPS");
  const [donorText, setDonorText] = useState(
    `A donation is initiated by a donor, for example, the Ethereum Foundation, at 13:00 hours.`
  );
  const [unicefText, setUnicefText] = useState(
    "The crypto is received at UNICEF France almost instantaneously. The assets are now ready to be sent to the startup."
  );
  const [startUpText, setStartUpText] = useState(
    "The crypto is moved to the startup at 17:00 hours on the same day. The movement of cryptocurrency takes significantly less time than traditional currencies."
  );
  const [fundFlowButtonClass, setFundFlowButtonClass] = useState(
    classes.buttonInactive
  );
  const [
    sampleTransactionsButtonClass,
    setSampleTransactionsButtonClass,
  ] = useState(classes.buttonActive);
  const matches = useMediaQuery(
    json2mq({
      minWidth: 991,
    })
  );
  const createBlock = (
    title: string,
    text: string,
    color: string,
    padding: string
  ) => {
    return (
      <div
        style={{
          paddingBottom: "50px",
          display: "inline-block",
          verticalAlign: "top",
          paddingLeft: padding + "px",
          width: "330px",
          overflow: "false",
        }}
      >
        <div
          style={{ backgroundColor: color }}
          className={classes.circleStyle}
        ></div>
        <div className={classes.titleStyle}>{title}</div>
        <br />
        <div style={{ maxWidth: "100%" }} className={classes.textStyle}>
          {text}
        </div>
      </div>
    );
  };

  const setFundingFlowText = () => {
    setDonorText(
      "The CryptoFund is generously supported by individuals and organisations who want to contribute to the development of open-source software in UNICEF programme countries."
    );
    setUnicefText(
      "Via a pooled fund, UNICEF Innovation evaluates potential companies and reviews criteria such as [project readiness], the strength of the team, and the problem being addressed to allocate funding and mentorship."
    );
    setStartUpText(
      "Once a startup has been added to the UNICEF Venture Fund portfolio, they have the option of receiving a portion of their funding in cryptocurrency, which enables fast and transparent transfers."
    );
  };
  const setSampleTransactionText = () => {
    setDonorText(
      `A donation is initiated by a donor, for example, the Ethereum Foundation, at 13:00 hours.`
    );
    setUnicefText(
      "The crypto is received at UNICEF France almost instantaneously. The assets are now ready to be sent to the startup."
    );
    setStartUpText(
      "The crypto is moved to the startup at 17:00 hours on the same day. The movement of cryptocurrency takes significantly less time than traditional currencies."
    );
  };
  const handleFundingFlowButtonClick = () => {
    setFundFlowButtonClass(classes.buttonActive);
    setSampleTransactionsButtonClass(classes.buttonInactive);
    setFlagForImage(false);
    setFundingFlowText();
  };
  const handleSampleTransactionButtonClick = () => {
    setFundFlowButtonClass(classes.buttonInactive);
    setSampleTransactionsButtonClass(classes.buttonActive);
    setFlagForImage(true);
    setSampleTransactionText();
  };
  const fundingFlowButton = () => {
    return (
      <Button
        className={fundFlowButtonClass}
        onClick={handleFundingFlowButtonClick}
      >
        Funding Flow
      </Button>
    );
  };
  const sampleTransactionsButton = () => {
    return (
      <Button
        className={sampleTransactionsButtonClass}
        onClick={handleSampleTransactionButtonClick}
      >
        Sample Transactions
      </Button>
    );
  };

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} sm={3} md={3}></Grid>
        <FundingProcessImage flag={flagForImage} />
      </Grid>
      <div style={{ paddingBottom: "30px" }}>
        <Grid
          container
          alignContent="center"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={12} sm={12} md={6} lg={3}>
            {createBlock(donorTitle, donorText, "#0068ea", "0")}
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={3}>
            {createBlock(unicefTitle, unicefText, "#29c3ff", "0")}
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={3}>
            {createBlock(startUpTitle, startUpText, "#ffd113", "0")}
          </Grid>
        </Grid>
      </div>
      {matches ? (
        <Grid
          container
          alignContent="center"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={12} sm={4} md={4} lg={4}>
            {fundingFlowButton()}
            {sampleTransactionsButton()}
          </Grid>
        </Grid>
      ) : null}
    </div>
  );
};
