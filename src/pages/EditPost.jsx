import { useContext, useEffect, useState } from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import axios from "axios"
import { URL } from "../url"
import { useNavigate, useParams } from "react-router-dom"
import { UserContext } from "../context/UserContext"


const EditPost = () => {

  const postId=useParams().id
  const [title,setTitle]=useState("")
  const [desc,setDesc]=useState("")
  const [file,setFile]=useState(null)
  const [existingImage, setExistingImage] = useState(null);
  const {user} = useContext(UserContext)
  const navigate = useNavigate()

  const fetchPost = async() =>{
      try {
        const res = await axios.get(URL+"/api/posts/"+postId)
        setTitle(res.data.title)
        setDesc(res.data.desc)
        setExistingImage(res.data.photo);
        
      } catch (err) {
        console.log(err)
        
      }
  }


  const handleUpdate = async(e) => {

    e.preventDefault()
    const post={
      title,
      desc,
      username:user.username,
      userId:user._id,
      photo: existingImage,
    }

    if(file){
      const data = new FormData()
      const filename = Date.now()+file.name
      data.append("img",filename)
      data.append("file",file)
      post.photo=filename

      try {
        await axios.post(URL+"/api/upload",data)

      } catch (err) {
        console.log(err)
      }
    }

    try {
      const res = await axios.put(URL+"/api/posts/"+postId,post,{withCredentials:true})
      navigate("/posts/post/"+res.data._id)
      
    } catch (err) {

      console.log(err)
    }
  }

  useEffect(()=>{

    fetchPost()
  },[postId])

  return (
    <div>
        <Navbar/>
        <div className='px-6 md:px-[200px] mt-8'>
        <h1 className='font-bold md:text-2xl text-xl '>Update a post</h1>
        <form className='w-full flex flex-col space-y-4 md:space-y-8 mt-4'>
          <input onChange={(e)=>setTitle(e.target.value)} value={title} type="text" placeholder='Enter post title' className='px-4 py-2'/>
          <input onChange={(e)=>setFile(e.target.files[0])} type="file" className='px-4'/>
         
          <textarea onChange={(e)=>setDesc(e.target.value)} value={desc} rows={15} cols={30} className='px-4 py-2 border-black' placeholder='Enter post description'/>
          <button onClick={handleUpdate} className='bg-rose-400 w-full md:w-[20%] mx-auto text-white font-semibold px-4 py-2 md:text-xl text-lg'>Update</button>
        </form>

        </div>
        <Footer/>
    </div>
  )
}

export default EditPost