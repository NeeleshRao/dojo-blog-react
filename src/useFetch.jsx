import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [ispending, setIspending] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("Failed to fetch data from the resource!");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIspending(false);
        setError(null);
        //console.log(data);
      })
      .catch((err) => {
        setIspending(false);
        setError(err.message);
      });
  }, [url]);
  return { data, ispending, error };
};

export default useFetch;
