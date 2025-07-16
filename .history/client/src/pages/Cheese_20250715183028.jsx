import { React, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/navbar';
import Comment from '../components/Comment.jsx'
import getFlag from '../assets/flags';
import getImage from '../assets/images.jsx';
import "flag-icons/css/flag-icons.min.css";

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

    async function handleSubmit(event) {
        event.preventDefault();

        const commentData = new FormData(event.target);
        const content = commentData.get('comment');
        if (content.length > 5) {
            const toSend = {
                'comment': content,
                'cheeseID': cheese.id
            }
    
            const response = await fetch('http://localhost:3000/postComment', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(toSend)
            });
            if (response.ok) {
                console.log('posted');
                window.location.reload();
            }
        } else {
            alert('Comment must be at least 5 characters long.');
        }

        
    }

    const [comments, setComments] = useState(null);

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const res = await fetch(`http://localhost:3000/cheeses/${cheeseName}/comments`);
                const data = await res.json();
                console.log('comments:', data);
                setComments(data);
            } catch(err) {
                console.error('error fetching comments', err);
            }
        }
        fetchComments();
    }, [cheese, cheeseName]);
        
    return (
        <div className="">
        <Navbar />
        {!cheese ? (
            <div>Loading...</div>
        ) : (
            <>
                <div className="flex flex-col items-center">
                    <div className="flex justify-center">
                        <div className="m-4 w-100 h-75 shadow rounded overflow-hidden">
                            <img src={getImage(cheese.name)} alt=""/>
                        </div>
                        <div className="p-4 m-4 flex flex-col gap-3 flex-wrap justify-start w-65 border-1 border-gray-200 rounded">
                            <h1 className="h-fit text-4xl">{capitalizeCheese(cheese.name)}</h1>
                            <div className="flex flex-col gap-1">
                                <p className="h-fit ">Origin: {fixCountryName(cheese.country_name)} <span class={setFlag()}></span></p>
                                <p>Made with {cheese.milk_name}'s milk</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-173 bg-white border-1 border-gray-200 rounded p-6">
                        {cheese.desc}
                    </div>

                    <div className="flex flex-col item-start w-170 m-5">
                        <h1 className='text-2xl mb-2'>Comments</h1>
                        <form className="flex flex-col" onSubmit={handleSubmit}>
                            <label htmlFor="comment"></label>
                            <textarea className="border-1 border-gray-200 rounded w-150 h-35 resize-none focus:outline-none indent-1" name="comment" id="comment" placeholder={`Share your experience with ${cheese.name}...`}></textarea>
                            <button className="cursor-pointer m-1 p-1 border-1 border-blue-400 bg-blue-400 text-white rounded w-25" type="submit">Post</button>
                        </form>

                    </div>
                </div>
            </>
            )}
            {!comments ? (
                <div>Loading comments...</div>
            ) : (
                <div className="flex flex-col flex-wrap gap-10 items-center w-290 mb-10">
                    {[...comments].reverse().map((comment) =>
                    <div key={comment.id}>
                        <Comment content={comment.content}/>
                    </div>
                    )}
                </div>  
            )}
        
        </div>
    )
}

export default Cheese