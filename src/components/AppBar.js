import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const [auth, setAuth] = React.useState(true);
  const token = localStorage.getItem("token");

  const classes = useStyles();
  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Button href="/" color="inherit">
              Trend Center
            </Button>
            <Button href="/products" color="inherit">
              Products
            </Button>
            <Button href="/categories" color="inherit">
              Categories
            </Button>
          </Typography>

          {token ? (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                href="/profile"
              >
                <AccountCircle />
              </IconButton>

              <Button
                href="/Login"
                color="inherit"
                onClick={() => {
                  localStorage.clear();
                }}
              >
                Logout
              </Button>
            </div>
          ) : (
            <Button href="/Login" color="inherit">
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
