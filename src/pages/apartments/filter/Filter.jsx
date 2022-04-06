import { useState } from "react"

const Filter = () => {

    const [travelPlan, setTravelPlan] = useState("")
    const [date, setDate] = useState(null)
    const [rooms, setRooms] = useState(0)
    console.log(date)

    return (
        <form className="p-4 mx-12 my-8 grid lg:grid-cols-4 place-items-center lg:gap-8 border-gray-400 border rounded-xl">
            <label className="flex flex-col justify-center p-4">
                <span className="md:text-lg font-bold text-gray-700">Travel plan</span>
                <input 
                    type="text"
                    value={travelPlan}
                    onChange={(e) => setTravelPlan(e.target.value)}
                    className='my-2'                />
            </label>
            <label className="flex flex-col justify-center p-4">
                <span className="md:text-lg font-bold text-gray-700">Arrival date</span>
                <input 
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className='my-2'
                />
            </label>
            <label className="flex flex-col justify-center p-4">
                <span className="md:text-lg font-bold text-gray-700">Number of rooms</span>
                <input 
                    type="number"
                    value={rooms}
                    onChange={(e) => setRooms(e.target.value)}
                    className='my-2'                />
            </label>
            <button className="btn w-32 h-12 flex justify-center items-center bg-green-500 hover:bg-green-700 hover:text-white ease-in-out duration-300">
                search
            </button>
        </form>
    )
}
export default Filter