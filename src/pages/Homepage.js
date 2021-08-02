import { AppBar } from "@material-ui/core";

const Homepage = () => {
  return (
    <div>
      <AppBar products="true" />
      <div
        style={{
          marginTop: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Welcome to Trend Centre!</h1>
      </div>
    </div>
  );
};

export default Homepage;
