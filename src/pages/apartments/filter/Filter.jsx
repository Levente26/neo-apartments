import { useState } from "react"

const Filter = () => {

    const [travelPlan, setTravelPlan] = useState("")
    const [date, setDate] = useState(null)
    const [rooms, setRooms] = useState(0)
    console.log(date)

    return (
        <form className="p-4 mx-12 my-8 grid lg:grid-cols-4 border-gray-400 border rounded-xl">
            <label className="flex flex-col justify-center items-center mb-4">
                <span className="md:text-lg font-bold text-green-700">Travel plan</span>
                <input 
                    type="text"
                    value={travelPlan}
                    onChange={(e) => setTravelPlan(e.target.value)}
                />
            </label>
            <label className="flex flex-col justify-center items-center mb-4">
                <span className="md:text-lg font-bold text-green-700">Arrival date</span>
                <input 
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
            </label>
            <label className="flex flex-col justify-center items-center mb-4">
                <span className="md:text-lg font-bold text-green-700">Number of rooms</span>
                <input 
                    type="number"
                    value={rooms}
                    onChange={(e) => setRooms(e.target.value)}
                />
            </label>
            <button className="btn bg-green-500 hover:bg-green-700 hover:text-white ease-in-out duration-300">
                search
            </button>
        </form>
    )
}
export default Filter