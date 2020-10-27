import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import GitHubIcon from "@material-ui/icons/GitHub";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      {"TMTB "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
    position: "relative",
    bottom: "0px",
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <>
      <footer className={classes.footer}>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Contact us <br />
          <Link color="inherit" href="https://github.com/TeamTMTB">
            <GitHubIcon />
            Github. TeamTMTB
          </Link>
        </Typography>

        <Copyright />
      </footer>
    </>
  );
};

export default Footer;
