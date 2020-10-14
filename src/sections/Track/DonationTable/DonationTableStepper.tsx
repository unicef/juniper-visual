import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Transaction } from "./Transaction";
import { Received } from "./Received";
import { Invested } from "./Invested";

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

function a11yProps(index: any) {
  return {
    id: `nav-tab-${index}`,
    "aria-controls": `nav-tabpanel-${index}`,
  };
}

interface LinkTabProps {
  label?: string;
  href?: string;
}
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#f3f3f3",
    marginLeft: "244px",
  },
  activeTab: {
    fontFamily: "Cabin",
    fontSize: "12px",
    fontWeight: "bold",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "1px",
    textAlign: "center",
    color: "#0068ea",
    backgroundColor: "#f3f3f3 !important",
    boxShadow: "none",
  },
  inactiveTab: {
    fontFamily: "Cabin",
    fontSize: "12px",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "1px",
    textAlign: "center",
    color: "#777777",
    backgroundColor: "#cbcbcb",
  },

  tabpanel: {
    paddingTop: "25px",
    overflowY: "scroll",
    maxHeight: "100vh",
  },
}));

export const DonationTableStepper = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  const LinkTab = (props: LinkTabProps) => {
    return (
      <Tab
        onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
          event.preventDefault();
        }}
        {...props}
        classes={{
          selected: classes.activeTab,
          root: classes.inactiveTab,
        }}
      />
    );
  };

  return (
    <div
      className={classes.root}
      style={{ height: "100vh", position: "sticky", top: "48" }}
    >
      <AppBar position="static" style={{ boxShadow: "none" }}>
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
          textColor="primary"
          classes={{
            root: classes.inactiveTab,
          }}
          indicatorColor={undefined}
        >
          <LinkTab label="All Transactions" {...a11yProps(0)} />
          <LinkTab label="Crypto Received" {...a11yProps(1)} />
          <LinkTab label="Crypto Invested" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <div className={classes.tabpanel}>
        <TabPanel value={value} index={0}>
          <Transaction />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Received />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Invested />
        </TabPanel>
      </div>
    </div>
  );
};
