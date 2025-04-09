import  { useState } from 'react'
import axios from 'axios';

const Signup = () => {
    const [user, setUser] = useState({ email: "", password: "" });
    const handleSubmit = async () => {
        const userRegister = await axios.post("https://product-management-web-app-r7id.onrender.com/user/register", {
            email: user.email,
            password: user.password
        });
        console.log(userRegister)
    }
    return (
        <div className='w-full min-h-screen flex items-center justify-center'>
            <div className=" w-80 h-[425px] bg-transparent border-mywidth border-gray-600 backdrop-blur-md rounded-xl drop-shadow-lg flex flex-col justify-evenly items-center gap-4">


                <form className='flex-col items-center justify-center text-center' onSubmit={() => { handleSubmit(); }}>
                    <div className='text-center flex items-center justify-center mb-4'>
                        <img src="https://res.cloudinary.com/dpqdgcipi/image/upload/v1744180274/zynetic_gmgrcm.png" alt="Zynetic" width={225} />
                    </div>
                    <input type="text" className='outline-none mb-4 border-2 border-gray-600 rounded-lg text-white pl-2 w-64 h-10' placeholder='Email' value={user.email} onChange={(e) => {
                        setUser((prev: any) => (
                            { ...prev, email: e.target.value as string }
                        ))
                    }} />
                    <input type="password" className='outline-none mb-4 border-2 border-gray-600 rounded-lg text-white pl-2 w-64 h-10' placeholder='Password' value={user.password} onChange={(e) => {
                        setUser((prev: any) => (
                            { ...prev, password: e.target.value as string }
                        ))
                    }} />
                    <div className='min-w-full flex mt-2 justify-center items-center text-center'><button className={`p-1 px-4 rounded-md flex items-center justify-center hover:drop-shadow-lg hover:opacity-90 bg-green-600 text-md text-[#fff]`} type='submit'>Sign Up</button></div>
                    <div className='text-white mt-4 text-bold '>
                        <h1>Already have an account ? <span className='text-green-500'><a href="https://product-management-web-app-1.onrender.com/login">Login</a></span></h1>
                        <hr />
                        <h1 className='p-1'>JWT token is saved you can check the cookie as well and there is a specific route for logout just change the route to /user/logout</h1>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Signup