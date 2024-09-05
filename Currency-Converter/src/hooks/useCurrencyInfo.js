import { useEffect, useState } from "react";

function useCurrencyInfo(baseCurrency) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCurrencyInfo = async () => {
      setLoading(true);
      try {
        // Construct the API URL to get exchange rates
        const response = await fetch(
          `https://api.frankfurter.app/latest?base=${baseCurrency}`
        );

        if (!response.ok) {
          throw new Error(`Error fetching data: ${response.statusText}`);
        }

        const result = await response.json();
        setData(result.rates || {});
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (baseCurrency) {
      fetchCurrencyInfo();
    }
  }, [baseCurrency]);

  return { data, loading, error };
}

export default useCurrencyInfo;
