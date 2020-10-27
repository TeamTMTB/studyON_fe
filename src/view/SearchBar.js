import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import ButtonTemplate from "./ButtonTemplate";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: "2px 4px",
        margin: "3rem auto",
        // display: 'flex',
        // alignItems: 'center',
        width: 450,
    },
    paper: {
        float: "left",
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    text: {
        textDecoration: "none",
        color: "white",
    },
}));

export default function SearchBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper component="form" className={classes.paper}>
                <InputBase
                    className={classes.input}
                    placeholder="Search..."
                    inputProps={{ "aria-label": "search google maps" }}
                />
                <IconButton
                    type="submit"
                    className={classes.iconButton}
                    aria-label="search"
                >
                    <SearchIcon />
                </IconButton>
            </Paper>
            <Link to="/room-create" className={classes.text}>
                <ButtonTemplate text={"방 만들기"} />
            </Link>
        </div>
    );
}
