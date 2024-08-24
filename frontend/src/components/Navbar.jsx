
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsSearch } from 'react-icons/bs';
import {FaBars} from 'react-icons/fa';
import { useContext, useState } from "react";
import Menu from "./Menu";
import { UserContext } from "../context/UserContext";

const Navbar = () => {

    const [prompt,setPrompt] = useState("")
    const [menu,setMenu] = useState(false)
    const navigate = useNavigate()
    const path = useLocation().pathname


    const showMenu=()=>{

        setMenu(!menu)
    }

    const {user} = useContext(UserContext)

    return (
        <div className="flex items-center justify-between px-6 md:px-[200px] py-4 bg-indigo-500 text-white">
            <h1 className="text-lg md:text-xl font-extrabold">
                <Link to="/">Blog Space</Link>
            </h1>
            {path==="/" && <div className="relative flex items-center space-x-0">
                <p onClick={()=>navigate(prompt?"?search="+prompt:navigate("/"))} className="absolute right-2 text-gray-500 cursor-pointer">
                    <BsSearch />
                </p>
                <input onChange={(e)=>setPrompt(e.target.value)}
                    className="py-3 pl-5 pr-4 rounded-lg text-black placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    placeholder="Search a post"
                    type="text"
                />
            </div>}
            <div className="hidden md:flex items-center justify-center space-x-2 md:space-x-4">
                {user ? <h3><Link to="/create">Write</Link></h3> : <h3><Link to="/login">Login</Link></h3>}
                {user? <div onClick={showMenu}>
                    <p className="cursor-pointer relative"><FaBars/></p>
                    {menu && <Menu/>}
                </div>:<h3><Link to="/register">Register</Link></h3>}
            </div>
            <div onClick={showMenu} className="md:hidden text-lg">
                <p className="cursor-pointer relative"><FaBars/></p>
                {menu && <Menu/>}
            </div>
        </div>
    );
};

export default Navbar;
