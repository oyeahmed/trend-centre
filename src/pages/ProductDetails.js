import { useParams } from "react-router-dom";
import UseFetch from "../hooks/UseFetch";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useEffect, useState } from "react";
import ProductsDetailsCard from "../components/ProductsDetailsCard";
import AppBar from "../components/AppBar";

export default function ProductDetails(props) {
  let { id } = useParams();
  const { loading, error, data } = UseFetch(
    `http://localhost:1337/Products/${id}`
  );

  let [isAdmin, setIsAdmin] = useState(false);
  let [isUser, setIsUser] = useState(false);
  let [token, settoken] = useState(null);
  let [userRole, setUserRole] = useState(null);

  useEffect(() => {
    settoken(localStorage.getItem("token"));
    setUserRole(localStorage.getItem("user"));
    if (token !== null) {
      setIsUser(true);
      if (userRole === "authenticated") setIsAdmin(true);
    }
  }, [token, userRole]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
    <div>
      <AppBar />
      <div
        style={{
          marginTop: "30px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ProductsDetailsCard
          id={data.id}
          title={data.title}
          p1={data.original_price}
          p2={data.discount_price}
          description={data.description}
          image={data.image[0].name}
        ></ProductsDetailsCard>
      </div>
    </div>
  );
}
