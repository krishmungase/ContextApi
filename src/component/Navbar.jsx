import { MdShoppingCart } from "react-icons/md";
import React, { useContext } from 'react'
import { ContextApi } from "../Context/ContextApi";

const Navbar = () => {
    const { count } = useContext(ContextApi)
    return (
        <div className='bg-gray-600 text-white h-15 w-full'>
            <div className="flex items-center justify-between px-32 py-2 text-center">
                <h1 className="text-lg">Logo</h1>
                <div className="flex items-center justify-center space-x-3 relative">
                    <MdShoppingCart className="size-10" />
                    <span className="text-white rounded-full text-xl font-bold">{count}</span>
                </div>
            </div>
        </div>
    )
}

export default Navbar
