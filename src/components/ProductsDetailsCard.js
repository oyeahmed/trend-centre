import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Ratings from "./Ratings";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShareIcon from "@material-ui/icons/Share";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

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
            ${p2}, <del style={{ color: "red" }}>${p1}</del>
          </Typography>
          <Ratings></Ratings>
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
