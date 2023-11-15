import { useEffect, useState } from "react";

export function useGetFetch(url) {
  const [data, setData] = useState(null);
  const [isPending, setIspending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIspending(true);
    fetch(url, {
      method: "GET",
      headers: {
        "Accept-Language": "ru",
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error(res.status);
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIspending(false);
      })
      .catch((err) => {
        console.log(err);
        setError("Not found");
        setIspending(false);
      });
  }, [url]);
  return { data, isPending, error };
}
