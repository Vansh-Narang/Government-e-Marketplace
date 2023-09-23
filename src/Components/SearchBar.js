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
                className='  w-[800px] h-10  rounded-full bg-gray-900  mx-auto border-white                                                                                                               
                border-color:inherit mt-10 mb-4  text-2xl placeholder:text-center caret-whit text-white text-center '
                value={Text}
            />
        </div>
    )
}

export default SearchBar