import { useState } from "react"
import { useSignup } from "../../hooks/useSignup"

const Signup = () => {

    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [name, setName] = useState(null)
    const { signup, error, isPending } = useSignup()

    const handleSubmit = (e) => {
        e.preventDefault()
        signup(email, password, name)
    }

    return (
        <form onSubmit={handleSubmit} className="h-screen flex flex-col w-1/2 ml-auto mr-auto p-4 mt-4 gap-5">
            <label className="flex flex-col gap-5">
                <span className="text-center font-bold text-gray-700 text-xl">Enter your email address</span>
                <input 
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="ml-auto mr-auto shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
            </label>
            <label className="flex flex-col gap-5">
                <span className="text-center font-bold text-gray-700 text-xl">Enter your password</span>
                <input 
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="ml-auto mr-auto shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
            </label>
            <label className="flex flex-col gap-5">
                <span className="text-center font-bold text-gray-700 text-xl">Enter your name</span>
                <input 
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="ml-auto mr-auto shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
            </label>
            {!isPending && 
                <button className="btn w-40 ml-auto mr-auto bg-green-500 hover:bg-green-700 hover:text-white ease-in-out duration-300">
                    Sign Up
                </button>
            }
            {isPending && 
                <button className='btn w-40 ml-auto mr-auto bg-green-500 hover:bg-green-700 hover:text-white ease-in-out duration-300' disabled >
                    Signing up...
                </button>
            }
            {error && <p className='error'>{error}</p>}
        </form>
    )
}
export default Signup