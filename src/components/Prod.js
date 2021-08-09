import React from "react";
import ProductsCard from "./ProductsCard";
import { useEffect, useState } from "react";

export default function Prod(props) {
  const prod = props.obj.products;
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
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      {prod.map((product) => (
        <div key={product.id}>
          <ProductsCard
            id={product.id}
            title={product.title}
            p1={product.original_price}
            p2={product.discount_price}
            description={product.description.substring(1, 120) + "..."}
            image={product.image[0].name}
            token={token}
          />
        </div>
      ))}
    </div>
  );
}
