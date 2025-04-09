import { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router';

const EditProduct = () => {
  const {name}=useParams();
  console.log(name)
  const [user, setUser] = useState("");
  const [product, setProduct] = useState({ name: "", description: "", category: "", price: "", rating: "", imgURL: "", user: user });
  const getUserData = async () => {
    let userData: any = await axios.get("https://product-management-web-app-r7id.onrender.com/user/verify");
    setUser(userData.email as string);
  }
  const handleSubmit = async () => {
    const productData = await axios.post("https://product-management-web-app-r7id.onrender.com/create", {
      product
    });
    console.log(productData)
  }

  useEffect(() => {
    getUserData();
  }, []);
  return (
    <div className='w-full min-h-screen flex items-center justify-center'>
      <div className=" w-4xl mx-8 h-[425px] bg-transparent border-mywidth border-gray-600 backdrop-blur-md rounded-xl drop-shadow-lg flex flex-col justify-evenly items-center gap-4">
        <form className='flex-col items-center justify-center  text-center' onSubmit={() => { handleSubmit() }}>
          <div className='text-center flex items-center justify-center mb-4'>
            <img src="https://res.cloudinary.com/dpqdgcipi/image/upload/v1744180274/zynetic_gmgrcm.png" alt="Zynetic" width={225} />
          </div>
          <input type="text" className='outline-none mb-4 border-2 border-gray-600 rounded-lg text-white pl-2 w-64 h-10' placeholder='Product Name' value={product.name} onChange={(e) => {
            setProduct((prev: any) => (
              { ...prev, name: e.target.value }
            ))
          }} />
          <input type="text" className='outline-none mb-4 border-2 border-gray-600 rounded-lg text-white pl-2 w-64 h-10' placeholder='Description' value={product.description} onChange={(e) => {
            setProduct((prev: any) => (
              { ...prev, description: e.target.value }
            ))
          }} />
          <input type="text" className='outline-none mb-4 border-2 border-gray-600 rounded-lg text-white pl-2 w-64 h-10' placeholder='Category' value={product.category} onChange={(e) => {
            setProduct((prev: any) => (
              { ...prev, category: e.target.value }
            ))
          }} />
          <input type="number" className='outline-none mb-4 border-2 border-gray-600 rounded-lg text-white pl-2 w-64 h-10' placeholder='Price' value={product.price} onChange={(e) => {
            setProduct((prev: any) => (
              { ...prev, price: e.target.value }
            ))
          }} />
          <input type="text" className='outline-none mb-4 border-2 border-gray-600 rounded-lg text-white pl-2 w-64 h-10' placeholder='Rating' value={product.rating} onChange={(e) => {
            setProduct((prev: any) => (
              { ...prev, rating: e.target.value }
            ))
          }} />
          <input type="text" className='outline-none mb-4 border-2 border-gray-600 rounded-lg text-white pl-2 w-64 h-10' placeholder='Image Link' value={product.imgURL} onChange={(e) => {
            setProduct((prev: any) => (
              { ...prev, imgURL: e.target.value }
            ))
          }} />
          <div className='min-w-full flex mt-2 justify-center items-center text-center'><button className={`p-1 px-4 rounded-md flex items-center justify-center hover:drop-shadow-lg hover:opacity-90 bg-green-600 text-md text-[#fff]`} type='submit'>Add Product</button></div>

        </form>
      </div>
    </div>
  )
}

export default EditProduct;