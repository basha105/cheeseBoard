import { React } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="h-10 flex text-blue-400 bg-white p-1 shadow">
            <ul className="flex align-middle">
                <li className="hover:bg-gray-100 px-2 rounded font-bold"><Link to="/">cheeseBoard</Link></li>
                <li className="hover:bg-gray-100 px-2 rounded"><Link>reviews</Link></li>
                <li className="hover:bg-gray-100 px-2 rounded"><Link to="/cheeses">cheeses</Link></li>
                <li className="w-250">
                    <form className="" action="">
                        <label for="searchEntry"></label>
                        <input className="outline-none p-0.5 border-1 w-250 rounded border-gray-300" type="text" name="searchEntry" id="searchEntry" placeholder="search for any cheese..."/>
                    </form>
                </li>
            </ul>
            <div className="mr-1 hover:bg-gray-100 px-2 rounded"><Link>sign in</Link></div>
            
        </div>
        
    
    )
}

export default Navbar