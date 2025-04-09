import React from 'react'

const Card = ({ name, desc, categ, rating, price,url }: { name: string, desc: string, categ: string, rating: string, price: number,url:string }) => {
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

            </div>
        </div>
    )
}

export default Card