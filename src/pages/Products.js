import UseFetch from "../hooks/UseFetch";

export default function Products() {
  const { loading, error, data } = UseFetch("http://localhost:1337/Products");

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error...</p>;

  return (
    <div
      style={{ display: "flex", flexDirection: "Column", marginLeft: "30px" }}
    >
      <h1 style={{ marginLeft: "auto", marginRight: "auto" }}>Products</h1>
      {data.map((Product) => (
        <div key={Product.id} className="products-card">
          <div className="products">
            <h2>{Product.title}</h2>
            <h4>Description</h4>
            <p>{Product.description}</p>
            <p>
              Price:
              <span style={{ marginLeft: "10px" }}>
                {Product.discount_price}$
              </span>
              <del style={{ color: "red", marginLeft: "10px" }}>
                {Product.original_price}$
              </del>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
