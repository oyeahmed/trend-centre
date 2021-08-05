import React from "react";
import UseFetch from "../hooks/UseFetch";
import Prod from "../components/Prod";
import AppBar from "../components/AppBar";

export default function category() {
  const { loading, error, data } = UseFetch("http://localhost:1337/Categories");

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error...</p>;

  return (
    <div>
      <AppBar />
      {data.map((Categories) => (
        <div key={Categories.id}>
          <h1 style={{ textAlign: "Center", color: "#3f51b5" }}>
            {Categories.name}
          </h1>
          <div>
            <Prod obj={Categories} />
          </div>
        </div>
      ))}
    </div>
  );
}
