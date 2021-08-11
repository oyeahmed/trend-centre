import AppBar from "../components/AppBar";

export default function Homepage() {
  const token = localStorage.getItem("token");
  const User = JSON.parse(localStorage.getItem("user"));
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
        {token ? <h1>{`Hi ${User.username}!`}</h1> : <h1>Hi User!</h1>}
        <h2>
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
        </h2>
      </div>
    </div>
  );
}
