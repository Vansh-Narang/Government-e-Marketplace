import React from 'react'
import { useState } from 'react';

function SearchBar() {
    const [Text, setText] = useState("")
    const handleSearchChange = (e) => {
        e.preventDefault();
        setText(e.target.value);
        console.log(e.target.value);
    }
    return (
        <div className='flex items-center justify-center'>
            <input onChange={handleSearchChange}
                type="text" placeholder='Search for your Product'
                className=' w-[35rem] h-10 rounded-lg bg-gray-800  mx-auto border-white order-2
                border-color:inherit mt-10 mb-4 text-blue-gray-900 placeholder:text-center caret-whit text-white text-center '
                value={Text}
            />
        </div>
    )
}

export default SearchBar