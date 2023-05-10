import { useEffect, useState } from "react"

function useFetch(url, requestOptions) {
    const [data, setData] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(url, requestOptions)
            .then(response => {

                if (!response.ok) {
                    throw new Error(response.status)
                }
                return response.json()
            })
            .then(data => {
                setData(data);
                setError(null);
            })
            .catch(e => setError(e.message))
    }, [url, requestOptions])

    return [data, error]
}

export default useFetch;