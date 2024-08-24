import React from 'react'

const ProfilePosts = () => {
  return (
    <div className="w-full flex mt-8 space-x-4">
    {/* left */}
    <div className="w-[35%] h-[200px] flex justify-center items-center">
    <img src="https://www.desuvit.com/wp-content/uploads/2021/04/AI.png" alt="" className="h-full w-full object-cover"/>
    </div>
    {/* right */}
    <div className="flex flex-col w-[65%]">
      <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
      10 uses of AI
      </h1>
      <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4">
       <p>@Sid</p>
       <div className="flex space-x-2 text-sm">
       <p>22/08/2024</p>
       <p>11:50</p>
       </div>
      </div>
      <p className="text-sm md:text-lg">Prominent AI uses</p>
    </div>

    </div>
  )
}

export default ProfilePosts