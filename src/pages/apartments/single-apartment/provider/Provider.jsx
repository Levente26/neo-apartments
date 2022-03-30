

const Provider = ( { data } ) => {
    return (
        <div className="border-gray-400 border rounded-md text-gray-700 p-2">
            <h2 className="font-bold text-2xl text-center p-2 mb-8">{data && data.providername}</h2>
            <div className="font-bold text-lg text-center p-2">
                <div className="p-2">
                    <p className="mb-2">Email address</p>
                    <p>{data && data.provideremail}</p>
                </div>
                <div className="p-2 border-gray-400 border-t">
                    <p className="mb-2">Phone number</p>
                    <p>{data && data.providerphone}</p>
                </div>
            </div>
        </div>
    )
}
export default Provider