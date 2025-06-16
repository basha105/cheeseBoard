import { React } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css'

function Navbar() {
    return (
        <ul class="navbar-list">
            <li><Link>home</Link></li>
            <li><Link>cheese</Link></li>
            <li><Link>map</Link></li>
            <li><Link>sign in</Link></li>
        </ul>
    )
}

export default Navbar