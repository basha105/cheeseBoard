import { React } from 'react';
import displaynames from '../assets/displaynames';
import profileImg from '../assets/blankprofile.png';

function Comment({content}) {

    function generateDisplayName() {
        let randomIndex = Math.floor(Math.random() * displaynames.length);
        let name = displaynames[randomIndex];
        return name;
    }

    const displayname = generateDisplayName();
    console.log(displayname);


    return (
        <div className="border-1 border-gray-200 rounded w-100 bg-gray-100 shadow p-5">
            <div className="flex gap-2 mb-1">
                <img src={profileImg} alt="" className="w-6"/>
                <h1>{displayname}</h1>
            </div>
            
            <p>{content}</p>
        </div>
    )

}

export default Comment