import Navbar from "../components/navbar"

function SignIn() {
    return (
        <div>
            <Navbar/>
            <div className="flex justify-center p-5">
                <div className="border-1 border-gray-200 rounded bg-gray-100 w-100 h-80 flex justify-center items-center shadow">
                    <form action="http://localhost:3000/sign-in" method="POST" className="flex flex-col gap-2">
                        <label className="" htmlFor="username">Username</label>
                        <input className="border-1 border-blue-400 bg-white rounded outline-none" id="username" name="username" type="text" />
                        <label htmlFor="password">Password</label>
                        <input className="border-1 border-blue-400 bg-white rounded outline-none" id="password" name="password" type="password" />
                        <button className="w-20 border-1 border-blue-400 rounded bg-blue-400 text-white" type="submit">Sign in</button>
                    </form>
                </div>
            </div>
            
            
        </div>
    )
}

export default SignIn