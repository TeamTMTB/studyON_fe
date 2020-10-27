import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  button: {
    backgroundColor: "#ff8080",
    color: "white",
    "&:hover, &:active": {
      backgroundColor: "#ff8080",
    },
    textDecoration: "none",
  },
}));

export default function ButtonTemplate(props) {
  const classes = useStyles();
  const { text } = props;
  return (
    <div className={classes.root}>
      <Button variant="contained" className={classes.button}>
        {text}
      </Button>
    </div>
  );
}
