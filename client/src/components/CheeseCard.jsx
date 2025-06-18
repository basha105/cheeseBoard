import { React } from 'react';
import { Link } from 'react';
import gouda from '../assets/gouda.jpg';

function CheeseCard() {
    return (
        <div className="w-fit p-5 shadow rounded-2xl m-2">
            <div>
                <img className="w-xs" src={gouda} alt="gouda img"/>
            </div>
            <p className="text-4xl">Gouda</p>
            <p>Netherlands</p>
        </div>
    )

}

export default CheeseCard