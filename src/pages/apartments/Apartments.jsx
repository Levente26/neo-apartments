import { useEffect } from "react"
import { useApiCall } from "../../hooks/useApiCall"
import Loading from "../loading/Loading"
import Filter from "./filter/Filter"
import SingleApartment from "./single-apartment/SingleApartment"

const Apartments = () => {

    const { apicall, data, isPending } = useApiCall() 

    useEffect(() => {
        apicall()
    }, [])

    return (
        <div className="h-full w-full ">
            <Filter />
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-rows-2">
                {isPending ? 
                    <div className="col-span-3 align-middle">
                        <Loading />
                    </div>
                : 
                    data && data.map(apartment => <SingleApartment key={apartment.id} apartment={apartment} />)
                }
            </div>
        </div>
    )
}
export default Apartments