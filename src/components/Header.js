
import React, { useState } from 'react'
import { AppBar, 
        Container, 
        Select, 
        MenuItem, 
        Toolbar, 
        Typography,
        makeStyles, 
        createTheme,
        ThemeProvider
    } from '@material-ui/core';
import { CryptoState } from '../CryptoContext';


const useStyles = makeStyles(() => ({
    title: {
        flex: 1,
        color: "gold",
        fontFamily: "Montserrat",
        cursor: "ponter",
    }
}))

const Header = () => {

    const classes = useStyles();
    const { currency, setCurrency  } =  CryptoState();

    console.log(currency)

    const darkTheme = createTheme({
        palette: {
            primary:{
                main: "#fff",
            },
            type: "dark"
        },
    })
  
   
    return(
        <ThemeProvider theme={darkTheme}>
            <AppBar color='transparent' position='static'>
                <Container>
                    <Toolbar>
                        <Typography className={classes.title}>Crypto Hunter</Typography>
                        
                        <Select variant='outlined' style={{
                            width: 100,
                            height: 40,
                            marginRight: 15,
                        }}
                        value={currency} onChange={(e) => setCurrency(e.target.value)}
                        >
                            <MenuItem value={"USD"}>USD</MenuItem>
                            <MenuItem value={"INR"}>INR</MenuItem>
                        </Select>
                    </Toolbar>
                </Container>

            </AppBar>
        </ThemeProvider>
    )
}

export default Header;
