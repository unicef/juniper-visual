import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Slide from '@material-ui/core/Slide';
import { DonationTableStepper } from './DonationTableStepper'
const useStyles = makeStyles({
    root: {
    flexGrow: 1,
    minHeight: '100%',
    position: 'relative',
    },
    list: {
      width: '244px',
      height:'100%',
      backgroundColor: '#ffffff',
      display:'inline-block',
      position:'absolute'
    },
    mainText: {
      fontFamily: 'Cabin',
      fontSize: '12px',
      fontWeight: 'bold',
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: 'normal',
      letterSpacing: '1px',
      color: '#000000',
      textTransform: 'uppercase',
      paddingBottom: '15px'
    },
    numberText: {
      fontFamily: 'IBM Plex Sans',
      fontSize: '21px',
      fontWeight: 'bold',
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: '1.76',
      letterSpacing: 'normal',
      color: '#000000',
      textTransform: 'uppercase',

    },
    labelText: {
      fontFamily: 'Cabin',
      fontSize: '10px',
      fontWeight: 'bold',
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: 'normal',
      letterSpacing: '0.83px',
      color: '#000000',
      textTransform: 'uppercase',
      paddingBottom: '20px',

    },
    textWrapper: {
      marginLeft:'38px',
      marginTop: '67px'
    },
  });

  
export const DonationTableLeftMenu = () => {
    const classes = useStyles();
    const [state] = React.useState({
        left: true,
    });
    
    const sideList = (side:any) => (
      <Slide style={{display:'inline-block'}} direction="right" in={state.left} >
        
        <div
          className={classes.list}
          role="presentation"
        >
          <div className={classes.textWrapper}>
            <div className={classes.mainText}>Crypto Received</div>
            <div className={classes.numberText}>1</div>
            <div className={classes.labelText}>Donor</div>
            <div className={classes.numberText}>1 BTC</div>
            <div className={classes.labelText}>Bitcoin Received</div>
            <div className={classes.numberText}>100 ETH</div>
            <div className={classes.labelText}>Ether Received</div>
          </div>
          <div className={classes.textWrapper}>
            <div className={classes.mainText}>Crypto Invested</div>
            <div className={classes.numberText}>03</div>
            <div className={classes.labelText}>Investments</div>
            <div className={classes.numberText}>1 BTC</div>
            <div className={classes.labelText}>Bitcoin Invested</div>
            <div className={classes.numberText}>99 ETH</div>
            <div className={classes.labelText}>Ether Invested</div>
          </div>
          </div>
        </Slide>
      );
    
    return (
        <div className={classes.root}>
            {sideList('left')}
            <DonationTableStepper />
        </div>
    )
}