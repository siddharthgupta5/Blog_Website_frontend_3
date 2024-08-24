import Comment from "../components/Comment"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import {BiEdit} from 'react-icons/bi'
import {MdDelete} from 'react-icons/md'

const PostDetails = () => {
  return (
    <div>
        <Navbar/>
        <div className="px-8 md:px-[200px] mt-8">
        <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-black md:text-3xl">10 uses of AI</h1>
            <div className="flex items-center justify-center space-x-2">
                <p><BiEdit/></p>
                <p><MdDelete/></p>
            </div>
        </div>
        <div className="flex items-center justify-between md:mt-4 mt-2">
        <p>@Sid</p>
        <div className="flex space-x-2">
            <p>22/08/2024</p>
            <p>14:00</p>
        </div>
        </div>
        <img src="https://www.desuvit.com/wp-content/uploads/2021/04/AI.png" className="w-full mt-8 mx-auto" alt="" />
          <p className="mx-auto mt-8">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
          

          <div>
          <h3 className="mb-4 mt-6">Comments:</h3>
            <Comment/>

            <div className="w-full flex flex-col mt-4 md:flex-row">
          <input type="text" placeholder="Write a comment" className="md:w-[80%] outline-none py-2 px-4 mt-4 md:mt-0"/>
          <button className="bg-blue-500 text-sm text-white px-2 py-2 md:w-[20%] mt-4 md:mt-0">Add Comment</button>
         </div>

          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default PostDetails