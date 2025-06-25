import Navbar from "../components/navbar"
import { React, useState, useEffect } from 'react';

function Profile() {

    const [profile, setProfile] = useState(null);
    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const res = await fetch('http://localhost:3000/profile');
                const data = await res.json;
                setProfile(data);
            } catch (err) {
                console.error('error fetching profile', err);
            }
        }
        fetchProfile();
    }, []);



    return (
        <div>
            <Navbar />
            <div>user: {profile.username}</div>
            
        </div>
    )

}

export default Profile;