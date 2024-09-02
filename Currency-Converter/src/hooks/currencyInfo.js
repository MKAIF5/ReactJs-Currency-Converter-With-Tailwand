import { useEffect, useState } from "react";

function currencyinfo(currency) {
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest
            /currencies/${currency}.json`)
            .then((resp) => {
                return resp.json()
            })
            .then((resp) => {
                return setData(resp[currency])
            })
        console.log(data);
        return data
    }, [currency])
};

export default currencyinfo