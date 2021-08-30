import AppBar from "../components/AppBar";
import UseFetch from "../hooks/UseFetch";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import Paper from "@material-ui/core/Paper";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";

export default function Cart() {
  const classes = useStyles();
  const { loading, error, data } = UseFetch("http://localhost:1337/Carts");
  let tp = 0;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;
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
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="spanning table">
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <h2>Product Image</h2>
                    </TableCell>
                    <TableCell>
                      <h2>Product Name</h2>
                    </TableCell>
                    <TableCell>
                      <h2>Price</h2>
                    </TableCell>
                  </TableRow>
                </TableHead>
              </Table>
            </TableContainer>
            {data[0].products[0].add_to_cart ? (
              data.map((cartProduct) => (
                <TableContainer component={Paper}>
                  <Table className={classes.table} aria-label="spanning table">
                    <TableBody>
                      <TableRow>
                        <TableCell>
                          <img
                            style={{ height: "7em", width: "6em" }}
                            src={cartProduct.products[0].image[0].name}
                            alt="image"
                          />
                        </TableCell>
                        <TableCell>{cartProduct.products[0].title}</TableCell>
                        <TableCell>
                          ${cartProduct.products[0].original_price}
                        </TableCell>
                      </TableRow>
                      <p style={{ display: "none" }}>
                        {(tp += cartProduct.products[0].original_price)}
                      </p>
                    </TableBody>
                  </Table>
                </TableContainer>
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
                marginRight: "10em",
                marginTop: "3em",
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
                Total Price: <span style={{ color: "green" }}>${tp}</span>{" "}
              </h3>
            </div>
            <div style={{ float: "right", marginRight: "10em" }}>
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
const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});
