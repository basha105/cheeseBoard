import Navbar from '../components/navbar'
import '../styles/home.css'

function Home() {
    
    return (
        <div>
            <Navbar />
            <div className="flex flex-col items-center">
                <div className="m-12 flex flex-col items-center">
                    <div className="text-4xl mb-2">Welcome to <span className="font-semibold text-blue-400">cheeseBoard</span></div>
                    <div className="mb-2">cheeseBoard is a community dedicated to all things cheese. Rate, review, and track your cheese journey!</div>
                    <div>"Poets have been mysteriously silent on the subject of cheese." - G.K. Chesterton</div>
                </div>
                <div>
                    <div className="mb-4 text-4xl text-blue-400">Lets get started.</div>
                    <form className="flex flex-col items-middle" action="http://localhost:3000/sign-up" method="POST">
                        <div className="flex flex-col">
                            <label htmlFor="username">Username</label>
                            <input className="indent-1 outline-none border-1 border-blue-400 rounded" id="username" name="username" type="text" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="password">Password</label>
                            <input className="indent-1 outline-none border-1 border-blue-400 rounded" id="password" name="password" type="password" />
                        </div>
                        <button className="mt-2 border-1 border-blue-400 rounded bg-blue-400 text-white p-1.5" type="submit" >Sign Up</button>
                    </form>
                </div>

            </div>
            
        </div>
    )
}

export default Home