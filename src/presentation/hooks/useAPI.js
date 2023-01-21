import { useState, useEffect } from "react";

const useAPI = (url, page) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const headers = new Headers({
      "Content-Type": "application/json",
      "app-id": process.env.REACT_APP_API_KEY,
    });

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url + `?page=${page}`, {
          method: "GET",
          headers: headers,
        });
        const result = await response.json();
        setData(result.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [url, page]);

  return { data, error, loading };
};

export default useAPI;
