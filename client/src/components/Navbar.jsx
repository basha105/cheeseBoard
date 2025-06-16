import { React } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <ul className="h-8 flex text-blue-400 bg-white p-1 shadow">
            <li className="hover:bg-gray-100 px-2 rounded font-bold"><Link>cheeseBoard</Link></li>
            <li className="hover:bg-gray-100 px-2 rounded"><Link>reviews</Link></li>
            <li className="hover:bg-gray-100 px-2 rounded"><Link>cheeses</Link></li>
            <li className="hover:bg-gray-100 px-2 rounded"><Link>sign in</Link></li>
        </ul>
    )
}

export default Navbar