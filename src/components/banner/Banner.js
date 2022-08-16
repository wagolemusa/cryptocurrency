import { Container, makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import Caurousel from './Caurousel';


const useStyles = makeStyles(() => ({
    banner: {
        backgroundImage: "url(./banner2.jpg)",
    },
    bannerContent: {
        height:400,
        display: "flex",
        flexDirection: "column",
        paddingTop: 25,
        justifyContent: "space-around",
    },
    tagline: {
        display: "flex",
        height: "40%",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center"
    }
}))


const Banner = () => {
    const classes = useStyles();
    return(
        <div className={classes.banner}>
        <Container className={classes.bannerContent}>
            <div className={classes.tagline}>
                <Typography
                    variant="h2"
                    style={{
                        fontWeight: "bold",
                        marginBotton: 12,
                        fontFamily: "Montserrant"
                    }}
                >
                Crypto Prices
                </Typography>
                <Typography
                    variant="subtitle2"
                    style={{
                        fontWeight: "darkgrey",
                        textTransform: "capitalize",
                        fontFamily: "Montserrant"
                    }}
                >
                Get all the info  regarding your favorite Crypto currency
                </Typography>
            </div>  
            <Caurousel />
        </Container>
    
    </div>
    )
}


 export default Banner;
