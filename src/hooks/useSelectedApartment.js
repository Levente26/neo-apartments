import axios from "axios"
import { useState } from "react"

export const useSelectedApartment = () => {

    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)

    const select = async(id) => {
        setIsPending(true)
        setError(null)
        try {
            const response = await axios.get(`https://retoolapi.dev/2aBwyp/neoapartments/${id.id}`)
            setData(response.data)
            setIsPending(false)
        } catch (err) {
            console.log(err.message)
            setError('Something went wrong')
            setIsPending(false)
        }
    }

    return { select, data, isPending, error }
}