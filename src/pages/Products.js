import UseFetch from "../hooks/UseFetch";
import StarRatings from "../components/StarRating";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";

export default function Products() {
  const { loading, error, data } = UseFetch("http://localhost:1337/Featureds");

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
            <Box
              component="fieldset"
              mb={3}
              borderColor="transparent"
              style={{ margin: 0, padding: 0 }}
            >
              <Rating name="read-only" value={3} readOnly />
            </Box>
          </div>
        </div>
      ))}
    </div>
  );
}
