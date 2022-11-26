import { useState } from "react";

const useFetch = () => {
  const [data, setData] = useState();

  const fetchData = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.log("Error:", err));
  };

  return [data, fetchData];
};

export default useFetch;
