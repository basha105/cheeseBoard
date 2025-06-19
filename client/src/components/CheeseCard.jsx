import { React } from 'react';
import { Link } from 'react';
import gouda from '../assets/gouda.jpg';

function CheeseCard({ name, country }) {
    return (
        <div className="w-50 p-5 shadow rounded-2xl m-2">
            <div>
                <img className="w-xs" src={gouda} alt="gouda img"/>
            </div>
            <p className="text-4xl">{name}</p>
            <p>{country}</p>
        </div>
    )

}

export default CheeseCard