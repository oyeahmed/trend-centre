import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import AppBar from "../components/AppBar";

export default function Profile() {
  const history = useHistory();
  const classes = useStyles();
  const User = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (localStorage.getItem("token") === null) history.push("/login");
  }, [history]);

  return (
    <div>
      <AppBar />
      <h1 style={{ textAlign: "center", color: "#3f51b5" }}>Profile</h1>
      <div style={{ borderRadius: "25px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "60vh",
          }}
        >
          <Card className={classes.root}>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              style={{ textAlign: "center" }}
            ></Typography>
            <CardContent>
              <div>
                {!User ? (
                  history.push("/login")
                ) : (
                  <div>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="p"
                      color="primary"
                      style={{ textAlign: "center" }}
                    >
                      {User.username}
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="subtitle2"
                      component="p"
                      color="primary"
                      style={{ textAlign: "center" }}
                    >
                      {User.email}
                    </Typography>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

const useStyles = makeStyles({
  root: {
    minWidth: 500,
    padding: "20px",
  },
  media: {
    height: 140,
  },
});
