import { React, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/navbar';
import getFlag from '../assets/flags';
import "flag-icons/css/flag-icons.min.css";

const images = import.meta.glob('../assets/images/*.jpg');
const imageMap = {};
for (const path in images) {
    const filename = path.split('/').pop();
    const cheesename = filename.replace('.jpg', '');
    imageMap[cheesename] = path;
}



function Cheese() {
    const [cheese, setCheese] = useState(null);
    const { cheeseName } = useParams();

    useEffect(() => {
        const fetchCheese = async () => {
            try {
                const res = await fetch(`http://localhost:3000/cheeses/${cheeseName}`);
                const data = await res.json();
                setCheese(data);

            } catch (err) {
                console.error('error fetching cheese:', err);
            }
        }
        fetchCheese();
    }, []);

    function setFlag() {
        if (!cheese) {
            console.log('waiting for cheese');
        } else {
            return'fi fi-' + getFlag(cheese.country_name);
        }
    }

    function fixCountryName(name) {
        if (name == 'unitedkingdom') {
            return 'United Kingdom';
        } else if (name == 'bosniaherzegovina') {
            return 'Bosnia and Herzegovina'
        }
        else {
            return String(name).charAt(0).toUpperCase() + String(name).slice(1);
        }
    }

    function capitalizeCheese(name) {
        return String(name).charAt(0).toUpperCase() + String(name).slice(1);
    }
        
    return (
        <div className="">
        <Navbar />
        {!cheese ? (
            <div>Loading...</div>
        ) : (
            <div className="flex justify-center">
                <div className="m-4 w-80 h-60 shadow rounded overflow-hidden">
                    <img src={imageMap[cheese.name]} alt=""/>
                </div>
                <div className="m-4 w-75 h- shadow border-1 rounded">
                    <h1 className="text-4xl">{capitalizeCheese(cheese.name)}</h1>
                    <h2>{fixCountryName(cheese.country_name)} <span class={setFlag()}></span></h2>
                </div>
            </div>
                

            )}
        
        </div>
    )
}

export default Cheese