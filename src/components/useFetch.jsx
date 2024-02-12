import React, { useEffect, useState } from "react";

function useFetch(url) {
    const [data, setData] = useState(null);
    const [isLoading, setIsloading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        setTimeout(() =>{
          fetch(url)
          .then((response) => {
            if(!response.ok){
              throw Error('Desolé une erreur est survenu...');
            }
            return response.json();
          })
          .then((data) => {
            setData(data);
            setIsloading(false)
            setError(null)
          })
          .catch(e =>{
            setIsloading(false)
            setError(e.message)
          } );
        }, 1000)
      }, [url]);
    return {data, isLoading, error}
}

export default useFetch;
