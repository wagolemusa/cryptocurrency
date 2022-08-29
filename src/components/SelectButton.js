
import React from "react";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
    SelectButton: {
        border: "1px solid gold",
        borderRadius: 5,
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        fontFamily: "Montserrat",
        cursor: "pointer",
        // backgroundColor: selected ? "gold" : "",
        // color: selected ? "black" : "",
        // fontWeight : selected ? 700 : 500,
        "&:hover": {
            backgroundColor: "gold",
            color: "black"
        },
        width: "22%",
        margin: 5,
    }
})

const SelectButton = ({ children, selected, onClick }) => {
   const classes = useStyles();
    return (

        <div 
        onClick={onClick} className={classes.selectbutton}>
            {children}
        </div>
    )
}

export default SelectButton;
