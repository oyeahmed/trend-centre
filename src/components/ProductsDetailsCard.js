import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Ratings from "./Ratings";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "@material-ui/core/Button";

export default function ProductsDetailsCard({
  inner,
  id,
  image,
  title,
  description,
  p1,
  p2,
}) {
  const classes = useStyles();

  function addToCart(id) {
    const addcart = { cart: 1 };
    axios.put(`http://localhost:1337/Products/${id}`, addcart);
  }

  return (
    <Card className={classes.root}>
      <img style={{ height: "30em", width: "40em" }} src={image} alt="image" />
      <div className={classes.details}>
        <CardContent>
          <h2
            component="p"
            style={{ padding: 0, marginBottom: "5px", marginTop: 0 }}
          >
            {title}
          </h2>
          <Typography style={{ textAlign: "left" }}>
            <span style={{ color: "green" }}>${p2}</span>
            <del style={{ color: "red", marginLeft: "10px" }}>${p1}</del>
          </Typography>
          <Ratings></Ratings>
          <div style={{ marginTop: "8px", marginBottom: "15px" }}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => addToCart(id)}
            >
              Add to Cart
            </Button>
            <Button
              variant="contained"
              color="primary"
              style={{ marginLeft: "8px" }}
            >
              Buy Now
            </Button>
          </div>
          <Typography
            style={{ textAlign: "justify" }}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {description}
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "10px",
    margin: "10px",
    display: "flex",
    width: "70%",
  },
  details: {
    display: "flex",
    flexDirection: "column",
    margin: "10px",
    padding: "10px",
    maxWidth: "70vw",
  },
}));
