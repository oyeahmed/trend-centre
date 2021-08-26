import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShareIcon from "@material-ui/icons/Share";
import axios from "axios";

export default function CartCard({ id, image, title, p1, p2, addToCart }) {
  const classes = useStyles();

  function addToCart(id) {
    axios
      .put(`http://localhost:1337/products/${id}`, { add_to_cart: true })
      .then((response) => {
        axios.post("http://localhost:1337/carts", {
          products: [response.data],
        });
        console.log(response.data);
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
