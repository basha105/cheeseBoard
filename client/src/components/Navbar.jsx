import { React } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="h-8 flex justify-between text-blue-400 bg-white p-1 shadow">
            <ul className="flex">
                <li className="hover:bg-gray-100 px-2 rounded font-bold"><Link to="/">cheeseBoard</Link></li>
                <li className="hover:bg-gray-100 px-2 rounded"><Link>reviews</Link></li>
                <li className="hover:bg-gray-100 px-2 rounded"><Link to="/cheeses">cheeses</Link></li>
            </ul>
            <div className="mr-1 hover:bg-gray-100 px-2 rounded"><Link>sign in</Link></div>
            
        </div>
        
    
    )
}

export default Navbar