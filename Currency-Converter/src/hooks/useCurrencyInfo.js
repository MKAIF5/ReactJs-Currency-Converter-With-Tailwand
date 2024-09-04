import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchCurrencyInfo = async () => {
      try {
        const response = await fetch(
          `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
        );
        const result = await response.json();
        setData(result[currency] || {});
      } catch (error) {
        console.error("Failed to fetch currency data:", error);
      }
    };

    fetchCurrencyInfo();
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
