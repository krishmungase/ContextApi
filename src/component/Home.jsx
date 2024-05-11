import React, { useContext } from 'react'
import { ContextApi } from "../Context/ContextApi";

const Home = () => {
    const { increment, decrement } = useContext(ContextApi)
    return (
        <div className='flex items-center justify-center space-x-8 h-full w-full'>
            <button className='bg-gray-800 text-white font-serif font-bold shadow-lg text-sm py-2 px-3 rounded-md'
                onClick={decrement}
            >
                Decrement
            </button>
            <button className='bg-gray-800 text-white font-serif font-bold shadow-lg text-sm py-2 px-3 rounded-md'
                onClick={increment}
            >
                Increment
            </button>
        </div>
    )
}

export default Home
