import React from "react";
import UseFetch from "../hooks/UseFetch";

export default function category() {
  const { loading, error, data } = UseFetch("http://localhost:1337/Categories");

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error...</p>;

  return (
    <div>
      {data.map((Categories) => (
        <div key={Categories.id} className="categories-card">
          <div className="categories">
            <h1 style={{ textAlign: "Center" }}>{Categories.name}</h1>
            <h3>{Categories.products[0].title}</h3>
            <p>{Categories.products[0].description}</p>
            <p>
              Price:
              <span style={{ marginLeft: "10px" }}>
                {Categories.products[0].discount_price}$
              </span>
              <del style={{ color: "red", marginLeft: "10px" }}>
                {Categories.products[0].original_price}$
              </del>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
