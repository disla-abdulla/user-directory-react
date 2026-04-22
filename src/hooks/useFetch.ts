import { useEffect, useState } from "react";

function useFetch(API) {
  const [fetchedData, setFetchedData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setFetchedData(data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
        setError(true);
      });
  }, []);
  return { fetchedData, loading, error };
}
export default useFetch;
