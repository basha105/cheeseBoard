import { React } from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar'
import '../styles/home.css'

function Home() {
    return (
        <div class="home-page">
            <Navbar />
            <div className="m-12 flex flex-col items-center">
                <div className="text-4xl mb-2">Welcome to <span className="font-semibold text-blue-400">cheeseBoard</span></div>
                <div className="mb-2">cheeseBoard is a community dedicated to all things cheese. Rate, review, and track your cheese journey!</div>
                <div>"Poets have been mysteriously silent on the subject of cheese." - G.K. Chesterton</div>
            </div>
        </div>
    )
}

export default Home