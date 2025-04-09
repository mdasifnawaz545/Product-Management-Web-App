import  { useEffect, useState } from 'react'
import { IoIosAddCircleOutline } from "react-icons/io";
import axios from 'axios'
import Card from './Card';
const Home = () => {
    const [product, setProduct] = useState<any[]>([{ name: "", desc: "", categ: "", rating: "", price: "", imgURL: "" }]);
    const fetchAllProducts = async () => {

        let response = await axios.get("http://localhost:3000/view");
        if (Array.isArray(response.data)) {
            setProduct(response.data as any[]);
        }
        console.log(response);
    }
    useEffect(() => {
        fetchAllProducts();
    }, [])
    return (
        <div className='w-full overflow-x-auto min-h-screen  mt-6 flex-col items-center justify-center'>
             <div className='flex w-full items-center justify-center mb-6'>
                <div className='w-40 scale-105 mt-4 backdrop-blur-xs h-10 rounded-xl border-[1px] border-gray-600 text-white flex items-center justify-center'>
                    <a href="/add">
                        <h1 className='flex text-black items-center justify-center text-center ml-2'>Add Product <span className='ml-2 text-black'><IoIosAddCircleOutline /></span></h1></a>
                    <div></div>
                </div>
            </div>
            <div className='flex flex-wrap items-center justify-center gap-4 mb-4'>
                {
                    Array.isArray(product) && product.map((element: any, index) => (
                        <a href={`/view/${element.name}`}><Card
                            key={index}
                            name={element.name} desc={element.description} categ={element.category} rating={element.rating} price={element.price} url={element.imgURL} />
                        </a>
                    ))
                }
            </div>
           


        </div>
    )
}

export default Home