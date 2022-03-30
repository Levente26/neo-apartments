import { Link } from 'react-router-dom'

const SingleApartment = ( { apartment } ) => {

    return (
        <Link to={`/apartment/${apartment.id}`} 
            className="border-gray-400 border rounded-md m-2 hover:bg-gray-100 hover:scale-95 ease-in-out duration-300 ">
            {apartment && (
                <div className="flex flex-col justify-between p-2 h-36">
                    <h4 className="text-center font-bold text-xl text-gray-700 mt-2">{apartment.location}</h4>
                    <div className="flex justify-between ml-4 mr-4 mb-1 border-t pt-2 border-gray-400">
                        <p>{apartment.rating}</p>
                        <p className="text-green-800 font-bold text-lg">$ {apartment.price} / night</p>
                    </div>
                </div>
            )}
        </Link>
    )
}
export default SingleApartment