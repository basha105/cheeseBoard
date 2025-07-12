import { React } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="h-10 flex text-blue-400 bg-white p-1 shadow">
            <ul className="flex">
                <li className="flex items-center hover:bg-gray-100 px-2 rounded font-bold"><Link to="/">cheeseBoard</Link></li>
                <li className="flex items-center hover:bg-gray-100 px-2 rounded"><Link className="" to="/cheeses">cheeses</Link></li>
                <li className="flex items-center w-250">
                    <form className="" action="">
                        <label htmlFor="searchEntry"></label>
                        <input className="outline-none p-0.5 border-1 w-250 rounded-2xl border-gray-300 bg-gray-200 indent-2 h-8" type="text" name="searchEntry" id="searchEntry" placeholder="search for any cheese..."/>
                    </form>
                </li>
            </ul>
            
        </div>
        
    
    )
}

export default Navbar