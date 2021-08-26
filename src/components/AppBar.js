import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import AddIcon from "@material-ui/icons/Add";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Badge from "@material-ui/core/Badge";
import UseFetch from "../hooks/UseFetch";

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
  const { loading, error, data } = UseFetch("http://localhost:1337/Carts");

  const [auth, setAuth] = React.useState(true);
  const token = localStorage.getItem("token");

  const classes = useStyles();
  const handleChange = (event) => {
    setAuth(event.target.checked);
  };
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;
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
              Home
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
              <IconButton color="inherit" href="/">
                <AddIcon />
              </IconButton>
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
            <div>
              <Button href="/Favourites" color="inherit">
                <FavoriteIcon />
              </Button>
              <Button href="/Cart" color="inherit">
                <Badge color="secondary" badgeContent={data.length}>
                  <ShoppingCartOutlinedIcon />
                </Badge>
              </Button>
              <Button href="/Login" color="inherit">
                Login
              </Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
