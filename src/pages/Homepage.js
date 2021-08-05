import AppBar from "../components/AppBar";

export default function Homepage() {
  return (
    <div>
      <AppBar />
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
}
