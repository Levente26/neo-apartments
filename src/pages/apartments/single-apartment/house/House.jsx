const House = ( { data } ) => {

    const getDate = (date) => {
        const myDate = date.split(" ")
        myDate.pop()
        myDate.pop()
        return myDate
    }

    return (
        <div className="border-gray-400 border rounded-md text-gray-700 p-4">
            {data && (
                <div className="flex justify-between align-middle">
                    <img className="lg:w-1/4" src={data.picture} alt='pic' />
                    <h1 className="lg:w-3/4 ml-4 m-auto text-center lg:text-2xl font-bold text-gray-700">{data.location}</h1>
                </div>
            )}
            {data && (
                <div className="border-gray-400 border-t mt-4 grid grid-cols-3 lg:grid-rows-2  ml-auto mr-auto">
                    <section className="text-center mt-4 p-2 border-gray-400 border-r">
                        <p className="mb-2 font-bold text-lg">Date</p>
                        <p className="tracking-wider">{getDate(data.date)}</p>
                    </section>
                    <section className="text-center mt-4 p-2 border-gray-400 border-r">
                        <p className="mb-2 font-bold text-lg">Rooms</p>
                        <p>{data.rooms}</p>
                    </section>
                    <section className="text-center mt-4 p-2">
                        <p className="mb-2 font-bold text-lg">Price</p>
                        <p className="text-green-800 font-bold text-xl">$ {data.price} / night</p>
                    </section>
                    <section className="text-center mt-4 lg:p-2 col-span-3">
                        <p className="mb-2 font-bold text-lg">Rating</p>
                        <p className="text-3xl">{data.rating}</p>
                    </section>
                </div>
            )}
        </div>
    )
}
export default House