import { React } from 'react';

function Comment({content}) {
    return (
        <div className="border-1 border-gray-200 rounded w-100 h-25 bg-gray-100 shadow pl-5 pt-5">
            <p>{content}</p>
        </div>
    )

}

export default Comment