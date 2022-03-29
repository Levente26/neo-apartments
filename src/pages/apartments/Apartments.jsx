import { useApiCall } from "../../hooks/useApiCall"

const Apartments = () => {

    const { apicall, data } = useApiCall() 

    const getData = () => {
        apicall()
    }
    console.log(data)

    return (
        <div>
            <button onClick={getData}>get data</button>
        </div>
    )
}
export default Apartments