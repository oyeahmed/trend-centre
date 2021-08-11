import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShareIcon from "@material-ui/icons/Share";
import axios from "axios";

export default function ProductsCard({ id, image, title, p1, p2, token }) {
  const classes = useStyles();

  function addToCart(id) {
    // const addcart = { cart: 1 };
    axios
      .post(`http://localhost:1337/Carts`, { p_id: id })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <Card className={classes.root}>
      <img style={{ height: "20em", width: "17em" }} src={image} alt="image" />
      <div className={classes.root}>
        <CardContent>
          <Link
            to={`/products/${id}`}
            style={{
              textDecoration: "none",
              color: "black",
              textAlign: "justify",
            }}
          >
            {console.log({ title })}
            {title}
          </Link>
          <ul
            style={{
              display: "flex",
              listStyleType: "none",
              padding: 0,
              margin: 0,
            }}
          ></ul>

          <Typography style={{ textAlign: "left" }}>
            <span style={{ color: "green" }}>${p2}</span>
            <del style={{ color: "red", marginLeft: "10px" }}>${p1}</del>
          </Typography>
        </CardContent>
        {token ? (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <IconButton style={{ color: "red" }}>
              <DeleteIcon />
            </IconButton>
            <IconButton style={{ color: "blue" }}>
              <EditIcon />
            </IconButton>
          </div>
        ) : (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <IconButton style={{ color: "blue" }} onClick={() => addToCart(id)}>
              <ShoppingCartOutlinedIcon />
            </IconButton>
            <IconButton style={{ color: "blue" }} href="/login">
              <FavoriteBorderIcon />
            </IconButton>
            <IconButton style={{ color: "blue" }} href="/login">
              <ShareIcon />
            </IconButton>
          </div>
        )}
      </div>
    </Card>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "10px",
    display: "flex",
    flexDirection: "column",
    padding: 0,
  },
}));
