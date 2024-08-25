
import { useContext, useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { URL } from "../url";
import { UserContext } from "../context/UserContext";

const ProfilePage = () => {

    const param = useParams().id
    const [username,setUsername] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const { user,setUser } = useContext(UserContext)

    const fetchProfile = async(e) =>{
        try {
            const res=await axios.get(URL+"/api/users/"+param,{withCredentials:true})
            setUsername(res.data.username)
            setEmail(res.data.email)
            setPassword(res.data.password)
            
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(()=>{

        fetchProfile()

    },[param])


    return (
        <div>
            <Navbar />
            <div className="min-h-[80vh] px-8 md:px-[200px] mt-8 flex md:flex-row flex-col-reverse md:items-start items-start">
                
                <div className="absolute top-24 right-4 md:right-[200px]">
                    <Link
                        to={"/history/"+param}
                        className="text-blue-500 hover:underline"
                    >
                        Blog History
                    </Link>
                </div>

                <div className="md:sticky md:top-12  flex justify-start md:justify-end items-start md:w-[30%] w-full md:items-end ">
                <div className=" flex flex-col space-y-4 items-start">
                <h1 className="text-xl font-bold mb-4">Profile</h1>
                    <input onChange={(e)=>setUsername(e.target.value)} value={username} className="border-black px-4 py-2 text-gray-500" placeholder="Your username" type="text"/>
                    <input onChange={(e)=>setEmail(e.target.value)} value={email} className="border-black px-4 py-2 text-gray-500" placeholder="Your email" type="email"/>
                    
                </div>
          
        </div>
      </div>
      <Footer/>
    </div>
    );
};

export default ProfilePage;
