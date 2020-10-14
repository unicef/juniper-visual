import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { useMediaQuery } from "@material-ui/core";
import json2mq from "json2mq";

const useStyles = makeStyles((theme: any) => ({
  mainText: {
    width: "723px",
    fontFamily: '"Cabin",  sans-serif',
    fontSize: "32px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.44",
    letterSpacing: "normal",
    color: "#ffffff",
  },
  mobile: {
    fontFamily: '"Cabin",  sans-serif',
    fontSize: "24px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.44",
    letterSpacing: "normal",
    color: "#ffffff",
    paddingBottom: "50px",
  },
}));
export const InvestmentMainText = () => {
  const classes = useStyles();
  // const mobileDevice = useMediaQuery("(max-width: 991px)");
  const matches = useMediaQuery(
    json2mq({
      minWidth: 991,
    })
  );

  const [mainText] = useState(
    "The CryptoFund makes crypto-denominated investments in companies that are developing open-source software and data-driven solutions to address the most pressing challenges facing children and young people. Projects receiving investment must use the cryptocurrency in its native form. In addition to receiving crypto assets, projects receive mentorship on various topics to develop their solutions. The CryptoFund empowers groups to create digital public goods with the hope of making a positive impact."
  );

  return (
    <div className={matches ? classes.mainText : classes.mobile}>
      {mainText}
    </div>
  );
};
