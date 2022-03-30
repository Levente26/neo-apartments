import { useState } from "react"

const Signup = () => {

    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [passwordAgain, setPasswordAgain] = useState(null)

    return (
        <form onSubmit={() => {}} className="h-screen flex flex-col w-1/2 ml-auto mr-auto p-4 mt-4 gap-5">
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
                <span className="text-center font-bold text-gray-700 text-xl">Enter your password again</span>
                <input 
                    type="password"
                    value={passwordAgain}
                    onChange={(e) => setPasswordAgain(e.target.value)}
                    className="ml-auto mr-auto shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
            </label>
            <button className="btn w-40 ml-auto mr-auto bg-green-500 hover:bg-green-700 hover:text-white ease-in-out duration-300">
                Sign Up
            </button>
        </form>
    )
}
export default Signup