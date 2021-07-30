import React from "react";
import UseFetch from "../hooks/UseFetch";

export default function Orders() {
  const { loading, error, data } = UseFetch("http://localhost:1337/Orders");

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error...</p>;

  return (
    <div
      style={{ display: "flex", flexDirection: "Column", marginLeft: "30px" }}
    >
      <h1 style={{ marginLeft: "auto", marginRight: "auto" }}>Orders</h1>
      {data.map((Order) => (
        <div key={Order.id} className="orders-card">
          <div className="orders">
            <h2>Order ID# {Order.id}</h2>
            <h3>Product</h3>
            <p>{Order.product.title}</p>
            <p>
              Price:
              <span style = {{ marginLeft: "10px" }}>{Order.product.discount_price}$</span>
              <del style={{ color: "red", marginLeft: "10px" }}>
                {Order.product.original_price}$
              </del>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
