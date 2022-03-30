// hooks
import { useSelectedApartment } from "../../../hooks/useSelectedApartment"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
// components
import House from "./house/House"
import Provider from "./provider/Provider"

const Details = () => {

    const id = useParams()
    const { select, data } = useSelectedApartment()

    useEffect(() => {
        select(id)
    }, [])

    return (
        <div className="grid grid-cols-3 gap-8 h-screen">
            <section className="col-span-2 mt-8 mb-8 ml-4">
                <House data={data} />
            </section>
            <section className="mt-8 mb-8 mr-4">
                <Provider data={data} />
            </section>
        </div>
    )
}
export default Details