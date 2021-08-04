import { AppBar } from "@material-ui/core";

const Homepage = () => {
  return (
    <div>
      <AppBar products="true" />
      <div
        style={{
          marginTop: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1>
          Welcome to{" "}
          <span
            style={{
              backgroundColor: "#3f51b5",
              borderRadius: "5px",
              paddingLeft: "8px",
              paddingRight: "8px",
              color: "white",
            }}
          >
            Trend Centre!
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Homepage;
