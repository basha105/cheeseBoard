import { React, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/navbar';
import getFlag from '../assets/flags';
import getImage from '../assets/images.jsx';
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
                <div className="m-4 w-100 h-75 shadow rounded overflow-hidden">
                    <img src={getImage(cheese.name)} alt=""/>
                </div>
                <div className="p-4 m-4 flex flex-col gap-3 flex-wrap justify-start w-65 bg-gray-100 shadow border-1 border-gray-200 rounded">
                    <h1 className="h-fit text-4xl">{capitalizeCheese(cheese.name)}</h1>
                    <div className="flex flex-col gap-1">
                        <p className="h-fit ">Origin: {fixCountryName(cheese.country_name)} <span class={setFlag()}></span></p>
                        <p>Milk:</p>
                        <p>Flavours:</p>
                        <p>Textures:</p>
                    </div>
                    
                </div>
            </div>
                

            )}
        
        </div>
    )
}

export default Cheese