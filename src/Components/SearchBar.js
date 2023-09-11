import React from 'react'
import { useState } from 'react';

function SearchBar() {
    const [Text, setText] = useState("")
    const handleSearchChange = (e) => {
        e.preventDefault();
        setText(e.target.value)
        console.log(e.target.value)
    }
    return (
        <div>
            <input onChange={handleSearchChange}
                type="text" placeholder='Search for your Product'
                className='w-96 h-10 rounded-lg 
                border-color:inherit mt-10 text-blue-gray-900'
            />
        </div>
    )
}

export default SearchBar