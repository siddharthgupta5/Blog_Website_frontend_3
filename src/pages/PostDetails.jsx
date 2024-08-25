import { useNavigate, useParams } from "react-router-dom"
import Comment from "../components/Comment"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import {BiEdit} from 'react-icons/bi'
import {MdDelete} from 'react-icons/md'
import { URL,IMF } from "../url"
import { useContext, useEffect, useState } from "react"
import axios from "axios"
import { UserContext } from "../context/UserContext"
import Loader from "../components/Loader"

const PostDetails = () => {

  const postId = useParams().id
  const [post,setPost] = useState({})
  const {user} = useContext(UserContext)
  const [comments,setComments]=useState([])
  const [loader,setLoader]=useState(false)
  const [comment,setComment]=useState("")
  const navigate = useNavigate()

  const fetchPost = async() =>{
    setLoader(true)
    try {

      const res = await axios.get(URL+'/api/posts/'+postId)
      setPost(res.data)
      setLoader(false)

    } catch (err) {
      console.log(err)
      setLoader(true)
    }
  }

  const handleDeletePost = async() => {
    try {
      const res=await axios.delete(URL+"/api/posts/"+postId,{withCredentials:true})
      console.log(res.data)
      navigate("/")
      
    } catch (err) {
        console.log(err)
    }
  }

  useEffect(()=>{
    fetchPost()

  },[postId])


  const fetchPostComments=async()=>{
    setLoader(true)
    try{
      const res=await axios.get(URL+"/api/comments/post/"+postId)
      setComments(res.data)
      setLoader(false)

    }
    catch(err){
      setLoader(true)
      console.log(err)
    }
  }

  useEffect(()=>{
    fetchPostComments()

  },[postId])


  const postComment=async(e)=>{
    e.preventDefault()
    try{
      const res=await axios.post(URL+"/api/comments/create",
      {comment:comment,author:user.username,postId:postId,userId:user._id},
      {withCredentials:true})
      
      // fetchPostComments()
      setComment("")
      window.location.reload(true)

    }
    catch(err){
         console.log(err)
    }

  }

  return (
    <div>
        <Navbar/>
        {loader?<div className="h-[80vh] flex justify-center items-center w-full"><Loader/></div>:<div className="px-8 md:px-[200px] mt-8">
        <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-black md:text-3xl">{post.title}</h1>
            {user?._id===post?.userId && <div className="flex items-center justify-center space-x-2">
              <p onClick={()=>navigate("/edit/"+postId)} className="cursor-pointer"><BiEdit/></p>
              <p onClick={handleDeletePost} className="cursor-pointer"><MdDelete/></p>
            </div>}         
        </div>

        <div className="flex items-center justify-between md:mt-4 mt-2">
        <p>@{post.username}</p>
        <div className="flex space-x-2">
            <p>{new Date(post.updatedAt).toString().slice(0,15)}</p>
            <p>{new Date(post.updatedAt).toString().slice(16,24)}</p>
        </div>
        </div>
        <img src={IMF+post.photo} className="w-full mt-8 mx-auto" alt="" />
          <p className="mx-auto mt-8">{post.desc}</p>
          

          <div className="flex flex-col mt-4">
          <h3 className="font-semibold mb-4 mt-6">Comments:</h3>
          {comments?.map((c)=>(
            <Comment key={c._id} c={c} post={post} />
           ))}

           </div>

          <div className="w-full flex flex-col mt-4 md:flex-row">
            <input onChange={(e)=>setComment(e.target.value)} type="text" placeholder="Write a comment" className="md:w-[80%] outline-none py-2 px-4 mt-4 md:mt-0"/>
            <button onClick={postComment} className="bg-blue-500 text-sm text-white px-2 py-2 md:w-[20%] mt-4 md:mt-0">Add Comment</button>
         </div>

        </div>}
        <Footer/>
    </div>
  )
}

export default PostDetails