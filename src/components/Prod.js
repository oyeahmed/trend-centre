import React from "react";
import ProductsCard from "../components/ProductsCard";

export default function Prod(props) {
  const prod = props.obj.products;
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
          />
        </div>
      ))}
    </div>
  );
}
