import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState(null);
    useEffect(()=>{
        // fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2025.4.15/v1/currencies/${currency}json`)

        .then((res)=> res.json())
        .then((res)=>setData(res[currency]))
        console.log(data);
    },[currency])
    return data;
}

export default useCurrencyInfo;


//// https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2025.4.15/v1/currencies/usd.json