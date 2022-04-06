import { useState } from "react"
import { useLogin } from "../../hooks/useLogin"

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {login, isPending, error} = useLogin()

    const handleSubmit = (e) => {
        e.preventDefault()
        login(email, password)
    }

    return (
        <form onSubmit={handleSubmit} className="w-full h-screen flex flex-col ml-auto mr-auto p-4 mt-4 gap-5">
            <label className="flex flex-col justify-center gap-5">
                <span className="text-center font-bold text-gray-700 text-xl">Enter your email address</span>
                <input 
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="ml-auto mr-auto shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
            </label>
            <label className="flex flex-col gap-5">
                <span className="text-center font-bold text-gray-700 text-xl">Enter your password</span>
                <input 
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="ml-auto mr-auto shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
            </label>
            {!isPending && 
                <button className="btn w-40 ml-auto mr-auto bg-green-500 hover:bg-green-700 hover:text-white ease-in-out duration-300">
                    Log In
                </button>
            }
            {isPending && 
                <button className="btn w-40 ml-auto mr-auto bg-green-500 hover:bg-green-700 hover:text-white ease-in-out duration-300">
                    Loggin in...
                </button>
            }
            {error && <p className='error'>{error}</p>}
        </form>
    )
}
export default Login