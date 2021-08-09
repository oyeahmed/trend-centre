import React from "react";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

export default function Ratings() {
  const [value, setValue] = React.useState(3);
  const token = localStorage.getItem("token");

  return (
    <div>
      {!token ? (
        <Box
          component="fieldset"
          borderColor="transparent"
          style={{ padding: 0, margin: 0 }}
        >
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
        </Box>
      ) : (
        <Box component="fieldset" borderColor="transparent">
          <Rating name="read-only" value={value} readOnly />
        </Box>
      )}
    </div>
  );
}
