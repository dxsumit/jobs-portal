import {Link} from "react-router-dom"

const Navbar = () => {
    return (
        
        <div className="w-full">
            <div className="container w-5/6 mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
                <div className="text-xl font-bold items-center text-gray-900 mb-4 md:mb-0">
                    <Link to="/"> XeroCodee </Link> 
                </div>

                <div className="flex flex-wrap items-center text-base justify-center">
                    <div className="bg-[#F9F9F9] text-[#242331] px-8 py-3 border-0 text-sm font-medium rounded-full">
                        <Link to="#" className="mr-6">Home </Link>
                        <Link to="#" className="mr-6">About</Link>
                        <Link to="#" className="mr-6">Features<svg className="inline-flex h-4 w-4"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"> <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="6 9 12 15 18 9" /></svg> </Link>
                        <Link to="#" className="mr-6">Pages<svg className="inline-flex h-4 w-4"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"> <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="6 9 12 15 18 9" /></svg> </Link>
                        <Link to="#" className="mr-6">Blog </Link>
                        <Link to="#" className="mr-6">Contact </Link>
                    </div>

                    <button className="inline-flex items-center text-white bg-[#0C5BC6] border-0 rounded-full text-xs py-3 px-7 mt-4 ml-3 md:mt-0">Sign In</button>

                </div>
            </div>
        </div>
    )
} 

export default Navbar;