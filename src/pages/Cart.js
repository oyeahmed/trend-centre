import AppBar from "../components/AppBar";
import UseFetch from "../hooks/UseFetch";
import CartCard from "../components/CartCard";
import Button from "@material-ui/core/Button";

export default function Cart() {
  const { loading, error, data } = UseFetch("http://localhost:1337/Carts");
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;
  console.log(data.length);
  return (
    <div>
      <AppBar />
      {data[0] ? (
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              flexWrap: "wrap",
              marginTop: "10px",
            }}
          >
            {data[0].products[0].add_to_cart ? (
              data.map((cartProduct) => (
                <CartCard
                  key={cartProduct.products[0].id}
                  title={cartProduct.products[0].title}
                  id={cartProduct.products[0].id}
                  p1={cartProduct.products[0].original_price}
                  S
                  p2={cartProduct.products[0].discount_price}
                  S
                  image={cartProduct.products[0].image[0].name}
                />
              ))
            ) : (
              <h1>Cart is empty</h1>
            )}
          </div>
          <div style={{ height: "200px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginLeft: "5em",
                marginRight: "15em",
              }}
            >
              <Button
                href="/products"
                size="large"
                variant="contained"
                color="primary"
              >
                Continue Shopping
              </Button>
              <h3>
                Total Price: <span style={{ color: "green" }}>$184</span>{" "}
              </h3>
            </div>
            <div style={{ float: "right", marginRight: "15em" }}>
              <Button size="large" variant="outlined" color="primary">
                Checkout
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <h1 style={{ textAlign: "center" }}>Cart is empty</h1>
      )}
    </div>
  );
}
