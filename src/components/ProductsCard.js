import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { Link } from "react-router-dom";

export default function ProductsCard({
  details,
  inner,
  id,
  image,
  title,
  description,
  p1,
  p2,
  isAdmin,
}) {
  const classes = useStyles();

  return (
    <Card className={details ? classes.details : classes.root}>
      <img
        style={{ height: "500px", width: "400px" }}
        src={image}
        alt="image"
      />
      <div className={inner ? classes.details : classes.root}>
        <CardHeader title={title} />
        <CardContent>
          <ul
            style={{
              display: "flex",
              listStyleType: "none",
              padding: 0,
              margin: 0,
            }}
          ></ul>
          <Typography
            style={{ textAlign: "justify" }}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {description}
          </Typography>
          <Link
            to={`/products/${id}`}
            style={{ textDecoration: "none", padding: 0, margin: 0 }}
          >
            {!details && (
              <Typography
                style={{ textAlign: "justify", marginBottom: "10px" }}
                variant="body2"
                color="textPrimary"
                component="p"
              >
                See More
              </Typography>
            )}
          </Link>
          <Typography style={{ textAlign: "left" }}>
            ${p2}, <del style={{ color: "red" }}>${p1}</del>
          </Typography>
        </CardContent>
      </div>
      {isAdmin && (
        <CardActions disableSpacing>
          <IconButton style={{ color: "blue" }}>
            <EditIcon />
          </IconButton>
          <IconButton style={{ color: "red" }}>
            <DeleteIcon />
          </IconButton>
        </CardActions>
      )}
    </Card>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "350px",
    padding: "10px",
    margin: "10px",
    display: "flex",
    flexDirection: "column",
  },
  details: {
    display: "flex",
    margin: "10px",
    padding: "10px",
    maxWidth: "70vw",
  },
  inner: { flexDirection: "column" },
}));
