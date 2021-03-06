import { Link } from "react-router-dom"
import { useLogout } from "../../hooks/useLogout"
import { useAuthContext } from "../../hooks/useAuthContext"

const Navbar = () => {

    const { logout, isPending } = useLogout()
    const { user } = useAuthContext()

    const handleClick = () => {
        logout()
        sessionStorage.removeItem("name")
    }
    return (
        <div className="w-full bg-gray-100 flex justify-between items-center p-4">
            <h1 className="lg:text-3xl font-bold lg:w-2/3 text-green-700">Neo Apartments</h1>
            <div className="lg:w-1/3 flex justify-around">
                {!user && 
                    <>
                        <Link to='/login' className="btn bg-green-500 hover:bg-green-700 hover:text-white ease-in-out duration-300">
                            Log In
                        </Link>
                        <Link to='/signup' className="btn bg-green-500 hover:bg-green-700 hover:text-white ease-in-out duration-300">
                            Sign Up
                        </Link>
                    </>
                }
                {user && 
                    <>
                        {!isPending && 
                            <button 
                            className="btn bg-green-500 hover:bg-green-700 hover:text-white ease-in-out duration-300"
                            onClick={handleClick}
                            >
                                Log Out
                            </button>
                        }
                        {isPending && 
                            <button 
                            className="btn bg-green-500 hover:bg-green-700 hover:text-white ease-in-out duration-300"
                            onClick={logout}
                            >
                                Loggin out...
                            </button>
                        }
                    </>
                }
            </div>
        </div>
    )
}
export default Navbar