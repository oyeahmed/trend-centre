import { useParams } from "react-router-dom";
import UseFetch from "../hooks/UseFetch";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useEffect, useState } from "react";
import ProductsCard from "../components/ProductsCard";
import AppBar from "../components/AppBar";

export default function ProductDetails() {
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
    if (token !== "") {
      setIsUser(true);
      if (userRole === "authenticated") setIsAdmin(true);
    }
  }, [token, userRole]);

  if (loading || error)
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        {loading && <CircularProgress />}
        {error && <p>Error.....</p>}
      </div>
    );

  return (
    <div>
      <AppBar />
      <div
        style={{
          marginTop: "70px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ProductsCard
          details={true}
          id={data.id}
          title={data.title}
          p1={data.original_price}
          p2={data.discount_price}
          description={data.description}
          image={data.image[0].name}
        ></ProductsCard>
      </div>
    </div>
  );
}
