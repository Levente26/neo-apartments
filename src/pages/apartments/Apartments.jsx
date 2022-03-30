import { useEffect } from "react"
import { useApiCall } from "../../hooks/useApiCall"
import SingleApartment from "./single-apartment/SingleApartment"

const Apartments = () => {

    const { apicall, data } = useApiCall() 

    useEffect(() => {
        apicall()
    }, [])

    return (
        <div className="h-full w-full grid grid-cols-3">
            {data && data.map(apartment => <SingleApartment apartment={apartment} />)}
        </div>
    )
}
export default Apartments