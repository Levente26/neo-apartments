import { useEffect } from "react"
import { useApiCall } from "../../hooks/useApiCall"
import Loading from "../loading/Loading"
import SingleApartment from "./single-apartment/SingleApartment"

const Apartments = () => {

    const { apicall, data, isPending } = useApiCall() 

    useEffect(() => {
        apicall()
    }, [])

    return (
        <div className="h-full w-full grid grid-cols-3">
            {isPending ? 
                <div className="col-span-3 align-middle">
                    <Loading />
                </div>
            : 
                data && data.map(apartment => <SingleApartment apartment={apartment} />)
            }
        </div>
    )
}
export default Apartments