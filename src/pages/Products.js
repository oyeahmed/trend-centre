import UseFetch from "../hooks/UseFetch";
import ProductsCard from "../components/ProductsCard";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Products() {
  let [isAdmin, setIsAdmin] = useState(false);
  let [isUser, setIsUser] = useState(false);
  let [token, settoken] = useState(null);
  let [userRole, setUserRole] = useState(null);
  let history = useHistory();

  useEffect(() => {
    settoken(localStorage.getItem("token"));
    setUserRole(localStorage.getItem("role"));
    if (token !== null) {
      setIsUser(true);
      if (userRole === "authenticated") {
        setIsAdmin(true);
      }
    }
    console.log(userRole);
  }, [token, userRole]);

  const { loading, error, data } = UseFetch("http://localhost:1337/Products");
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      {data.map((Product) => (
        <ProductsCard
          title={Product.title}
          id={Product.id}
          p1={Product.original_price}
          S
          p2={Product.discount_price}
          S
          description={Product.description.substring(1, 120) + "..."}
          image={Product.image[0].name}
          isAdmin={isAdmin}
        />
      ))}
    </div>
  );
}
