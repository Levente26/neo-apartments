// hooks
import { useSelectedApartment } from "../../../hooks/useSelectedApartment"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
// components
import House from "./house/House"
import Provider from "./provider/Provider"
import Loading from "../../loading/Loading"

const Details = () => {

    const id = useParams()
    const { select, data, isPending } = useSelectedApartment()

    useEffect(() => {
        select(id)
    }, [])

    return (
        <div className="lg:grid lg:grid-cols-3 gap-8 h-screen">
            {isPending ? 
                <div className="col-span-3 align-middle">
                    <Loading />
                </div>
            :
                <>
                    <section className="col-span-2 mt-8 m-2">
                        <House data={data} />
                    </section>
                    <section className="mt-8 mb-8 m-2">
                        <Provider data={data} />
                    </section>
                </>
            }
        </div>
    )
}
export default Details