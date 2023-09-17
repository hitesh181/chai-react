import { useState, useEffect } from "react";

function useCurrencyInfo(currency){
    const [data, setData ] = useState({})
    let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`

    useEffect( ()=> {
        fetch(url)
        .then(response => response.json())
        .then(response=> setData(response[currency]))
        .then(data=> console.log(data))
        .catch(()=>console.log("Could not fetch"))

    }, [currency] )
    return data;
}

export default useCurrencyInfo;
