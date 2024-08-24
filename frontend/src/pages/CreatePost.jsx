import Footer from "../components/Footer"
import Navbar from "../components/Navbar"


const CreatePost = () => {
  return (
    <div>
        <Navbar/>
        <div className='px-6 md:px-[200px] mt-8'>
        <h1 className='font-bold md:text-2xl text-xl '>Create a post</h1>
        <form className='w-full flex flex-col space-y-4 md:space-y-8 mt-4'>
          <input type="text" placeholder='Enter post title' className='px-4 py-2'/>
          <input type="file" className='px-4'/>
         
          <textarea rows={15} cols={30} className='px-4 py-2 border-black' placeholder='Enter post description'/>
          <button className='bg-emerald-600 w-full md:w-[20%] mx-auto text-white font-semibold px-4 py-2 md:text-xl text-lg'>Create</button>
        </form>

        </div>
        <Footer/>
    </div>
  )
}

export default CreatePost