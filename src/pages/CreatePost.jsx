import { useContext, useState } from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { UserContext } from "../context/UserContext"
import axios from "axios"
import { URL } from "../url"
import { useNavigate } from "react-router-dom"


const CreatePost = () => {

  const [title,setTitle] = useState("")
  const [desc,setDesc] = useState("")
  const [file,setFile] = useState(null)
  const {user} = useContext(UserContext)
  console.log(file)

  const navigate = useNavigate()

  const handleCreate = async(e) =>{
      e.preventDefault()
      const post={
        title,
        desc,
        username:user.username,
        userId:user._id
      }

      if(file){
        const data = new FormData()
        const filename = Date.now()+file.name
        data.append("img",filename)
        data.append("file",file)
        post.photo=filename

        try {
          const imgUpload = await axios.post(URL+"/api/upload",data)
  
        } catch (err) {
          console.log(err)
        }
      }

      try {
        const res = await axios.post(URL+"/api/posts/create",post,{withCredentials:true})
          navigate("/posts/post/"+res.data._id)
        
      } catch (err) {

        console.log(err)
      }

      
  } 

  return (
    <div>
        <Navbar/>
        <div className='px-6 md:px-[200px] mt-8'>
        <h1 className='font-bold md:text-2xl text-xl '>Create a post</h1>
        <form className='w-full flex flex-col space-y-4 md:space-y-8 mt-4'>
          <input onChange={(e)=>setTitle(e.target.value)} type="text" placeholder='Enter post title' className='px-4 py-2'/>
          <input onChange={(e)=>setFile(e.target.files[0])} type="file" className='px-4'/>
         
          <textarea onChange={(e)=>setDesc(e.target.value)} rows={15} cols={30} className='px-4 py-2 border-black' placeholder='Enter post description'/>
          <button onClick={handleCreate} className='bg-emerald-600 w-full md:w-[20%] mx-auto text-white font-semibold px-4 py-2 md:text-xl text-lg'>Create</button>
        </form>

        </div>
        <Footer/>
    </div>
  )
}

export default CreatePost