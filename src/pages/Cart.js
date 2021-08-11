import AppBar from "../components/AppBar";
import UseFetch from "../hooks/UseFetch";
import ProductsCard from "../components/ProductsCard";

export default function Cart() {
  const { loading, error, data } = UseFetch("http://localhost:1337/Carts");
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;
  console.log(data);
  return (
    <div>
      <AppBar />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          flexWrap: "wrap",
          marginTop: "10px",
        }}
      >
        {data.map((cartProduct) => (
          <ProductsCard
            // key={cartProduct.products[0].id}
            // title={cartProduct.products[0].title}
            // id={cartProduct.products[0].id}
            // p1={cartProduct.products[0].original_price}
            // p2={cartProduct.products[0].discount_price}
            // image={cartProduct.products[0].image[0].name}
            // token={cartProduct.products[0].token}
          />
        ))}
      </div>
    </div>
  );
}
