

const Navbar = () => {
    return (
        <div className="w-full bg-gray-100 flex justify-between p-4 sticky top-0 z-50">
            <h1 className="text-3xl font-bold w-2/3 text-green-700">Neo Apartments</h1>
            <div className="container w-1/3 flex justify-around">
                <button className="btn bg-green-500 hover:bg-green-700 hover:text-white ease-in-out duration-300">
                    Log In
                </button>
                <button className="btn bg-green-500 hover:bg-green-700 hover:text-white ease-in-out duration-300">
                    Sign Up
                </button>
            </div>
        </div>
    )
}
export default Navbar