import axios from "axios"
import { useState } from "react"

export const useApiCall = () => {

    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)

    const apicall = async() => {
        setIsPending(true)
        setError(null)
        try {
            const response = await axios.get('https://retoolapi.dev/2aBwyp/neoapartments')
            setData(response.data)
            setTimeout(() => {
                setIsPending(false)
            }, 1000)
        } catch (err) {
            console.log(err.message)
            setError('Something went wrong')
            setIsPending(false)
        }
    }

    return { apicall, data, isPending, error }
}


