import React, { useState } from 'react'
import { makeStyles } from '@material-ui/styles'
import { ArrowDownButton } from './ArrowDownButton';

const useStyles = makeStyles((theme: any) => ({
    mainText: {
        fontFamily: 'Cabin',
        fontSize: '14px',
        fontWeight: 'bold',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 'normal',
        letterSpacing: '1.17px',
        color: '#ffffff',
        textTransform: 'uppercase',
        margin: 'auto',
        textAlign: 'center',
        paddingTop: '45px',
        marginTop: '20px',
    }, 

}));
export const CryptoTracker = () => {
    const classes = useStyles()

    const [cryptoTrackerText] = useState(
        'Crypto Tracker'
    )
    return(
        <div className={classes.mainText}>
            {cryptoTrackerText}<br />
            <ArrowDownButton />
        </div>
    )
}