import axios from "axios"
import { useState } from "react";
import { MdOutlineDeleteOutline } from "react-icons/md";

const Card = ({ name, desc, categ, rating, price, url,func }: { name: string, desc: string, categ: string, rating: string, price: number, url: string,func:(name:any)=>{} }) => {
    

    return (
        <div className='w-72 h-auto rounded-xl border-[1px] border-gray-600 backdrop-blur-md overflow-hidden'>
            <div className='h-40 relative overflow-hidden'>
                <img src={`${url}`} alt="" />
            </div>
            <div className='text-white p-2 py-4'>
                <h1>Product Name - {name}</h1>
                <h1>Description - {desc}</h1>
                <h1>Categories - {categ}</h1>
                <h1>Rating - {rating}</h1>
                <h1 className='text-2xl font-bold'>Price - Rs. {price}</h1>
                <div className="w-full flex items-center justify-end">
                    <button onClick={() => { func(name) }} className="text-3xl cursor-grabbing p-1 text-end flex items-center justify-center text-red-500"><MdOutlineDeleteOutline /></button>
                </div>

            </div>
        </div>
    )
}

export default Card