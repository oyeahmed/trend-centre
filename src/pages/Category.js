import React from "react";
import UseFetch from "../hooks/UseFetch";
import Prod from "../components/Prod";
import AppBar from "../components/AppBar";
import { useEffect, useState } from "react";

export default function Category() {
  let [isAdmin, setIsAdmin] = useState(false);
  let [isUser, setIsUser] = useState(false);
  let [token, setToken] = useState(null);
  let [userRole, setUserRole] = useState(null);

  useEffect(() => {
    setToken(localStorage.getItem("token"));
    setUserRole(localStorage.getItem("role"));
    if (token !== null) {
      setIsUser(true);
      if (userRole === "authenticated") {
        setIsAdmin(true);
      }
    }
    console.log(userRole);
  }, [token, userRole]);

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
            <Prod obj={Categories} token={token} />
          </div>
        </div>
      ))}
    </div>
  );
}
