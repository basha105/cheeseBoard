import { React } from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar'
import '../styles/home.css'

function Home() {
    return (
        <div class="home-page">
            <Navbar />
            <h1>Welcome to cheeseBoard!</h1>
            <h2>Log in or create an account to track your cheese!</h2>
        </div>
    )
}

export default Home