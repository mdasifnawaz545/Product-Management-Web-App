import Button from './Button'
const Navbar = () => {

    return (
        <nav className='bg-transparent mx-8 mt-2 text-center text-bold text-2xl rounded-xl'>
            <div className='bg-transparent border-1 border-gray-600 px-4 text-center text-bold text-xl rounded-xl flex items-center justify-between w-full h-14'>
                <div>
                    <a href="/">
                        <img src="https://res.cloudinary.com/dpqdgcipi/image/upload/v1744180274/zynetic_gmgrcm.png" alt="Zynetic" width={125} />
                    </a>
                </div>
                <div>
                    <a href="/signup">
                        <Button buttonName='SIGN UP' ownClass={`p-1 px-4 text-md rounded-md flex items-center justify-center hover:drop-shadow-lg hover:opacity-90 bg-green-600 text-md text-[#fff]`}>
                        </Button>
                    </a>
                </div>
            </div>
        </nav >
    )
}

export default Navbar