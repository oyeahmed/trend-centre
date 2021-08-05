import UseFetch from "../hooks/UseFetch";
import AppBar from "./components/AppBar";

export default function Login() {
  const { loading, error, data } = UseFetch("http://localhost:1337/auth/local");

  if (loading) return <h3>Loading...</h3>;

  if (error) return <h1>Error...</h1>;
  return (
    <div>
      <AppBar />
    </div>
  );
}
