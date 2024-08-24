
// import { Link } from "react-router-dom"
// import {BsSearch} from 'react-icons/bs'

// const Navbar = () => {
//         const user=false
//     return (
//         <div className="flex items-center justify-between px-6 md:px-[200px] py-4">
//         <h1 className="text-lg md:text-xl font-extrabold"><Link to="/">Blog Space</Link></h1>
//         <div className="flex justify-center items-center space-x-0">
//         <p><BsSearch/></p>
//         <input className="py-3 px-8 rounded-lg" placeholder="Search a post" type="text"/>
        
//         </div>
//         <div className="hidden md:flex items-center justify-center space-x-2 md:space-x-4">
//           {user? <h3><Link to="/write">Write</Link></h3> :<h3><Link to="/login">Login</Link></h3>}
//           {user? <h3>Profile</h3>:<h3><Link to="/register">Register</Link></h3>}
//         </div>
    
//         </div>
//       )
// }

// export default Navbar

import { Link } from "react-router-dom";
import { BsSearch } from 'react-icons/bs';

const Navbar = () => {
    const user = false;
    return (
        <div className="flex items-center justify-between px-6 md:px-[200px] py-4 bg-indigo-500 text-white">
            <h1 className="text-lg md:text-xl font-extrabold">
                <Link to="/">Blog Space</Link>
            </h1>
            <div className="relative flex items-center">
                <span className="absolute right-2 text-gray-500">
                    <BsSearch />
                </span>
                <input
                    className="py-3 pl-5 pr-4 rounded-lg text-black placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    placeholder="Search a post"
                    type="text"
                />
            </div>
            <div className="hidden md:flex items-center justify-center space-x-2 md:space-x-4">
                {user ? <h3><Link to="/write">Write</Link></h3> : <h3><Link to="/login">Login</Link></h3>}
                {user ? <h3>Profile</h3> : <h3><Link to="/register">Register</Link></h3>}
            </div>
        </div>
    );
};

export default Navbar;
