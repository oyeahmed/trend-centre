import { useEffect, useState } from "react";
// import axios from "axios";

const UseFetch = (url, authenticate = true) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        // if (authenticate) {
        //   const res = await axios.get(url, {
        //     headers: {
        //       Authorization: `Bearer ${localStorage.getItem("token")}`,
        //     },
        //   });
        // setData(res.data);
        // setLoading(false);
        // } else {
        // const res = await axios.get(url);
        // setData(res.data);
        // setLoading(false);
        // }
        const res = await fetch(url);
        const json = await res.json();

        setData(json);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [url, authenticate]);

  return { loading, error, data };
};

export default UseFetch;
