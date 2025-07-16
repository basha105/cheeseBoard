import { React } from 'react';
import getImage from '../assets/images.jsx'

function capitalizeCheese(name) {
    if (name == 'granapadano') {
        return 'Grana Padano';
    } else if (name == 'pecorinoromano') {
        return 'Pecorino Romano'
    }
    return String(name).charAt(0).toUpperCase() + String(name).slice(1);
}


function CheeseCard({ name, country }) {
    return (
        <div className="flex flex-wrap justify-center w-50 p-5 border-1 border-gray-200 bg-gray-100 rounded m-2">
            <div className="rounded overflow-hidden">
                <img className="w-xs" src={getImage(name)} alt="gouda img"/>
            </div>
            <p className="text-2xl font-">{capitalizeCheese(name)}</p>
            <p>{country}</p>
        </div>
    )

}

export default CheeseCard