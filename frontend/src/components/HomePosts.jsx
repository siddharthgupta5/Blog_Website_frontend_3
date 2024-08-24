// // import React from 'react'

// const HomePosts = () => {
//   return (
//     <div className="w-full flex mt-8 space-x-4">
//     {/* left */}
//     <div className="w-[35%] h-[200px] flex justify-center items-center">
//     <img src="https://www.desuvit.com/wp-content/uploads/2021/04/AI.png" alt="" className="h-full w-full object-cover"/>
//     </div>
//     {/* right */}
//     <div className="flex flex-col w-[65%]">
//       <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
//       10 uses of AI
//       </h1>
//       <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4">
//        <p>@Sid</p>
//        <div className="flex space-x-2 text-sm">
//        <p>22/08/2024</p>
//        <p>11:50</p>
//        </div>
//       </div>
//       <p className="text-sm md:text-lg">Before going into the possibilities of this technology innovator, you should understand what AI entails.

//       Artificial Intelligence or AI refers to technology being leveraged to simulate human intelligence in machines. The goal here is to mimic capabilities of the human mind like decision-making, problem-solving and intelligent reasoning. This way, it can tackle both tedious and challenging tasks but faster and more accurately than humans.
      
//       Machine Learning or ML is a component of AI. The machine will analyze data after learning and recognizing computing algorithms within the data. It will learn by itself what insights to draw without being explicitly programmed on where to look and for what.
      
//       This kind of advancement has opened up opportunities for automating virtually every aspect of your life.</p>
//     </div>
    
//     </div>
    
//   )
// }

// export default HomePosts

import { useState } from 'react';
import { Link } from 'react-router-dom';

const HomePosts = () => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  const truncateText = (text, limit) => {
    return text.length > limit ? `${text.slice(0, limit)}...` : text;
  };

  const description = `Before going into the possibilities of this technology innovator, you should understand what AI entails.
  Artificial Intelligence or AI refers to technology being leveraged to simulate human intelligence in machines. The goal here is to mimic capabilities of the human mind like decision-making, problem-solving, and intelligent reasoning. This way, it can tackle both tedious and challenging tasks but faster and more accurately than humans.
  Machine Learning or ML is a component of AI. The machine will analyze data after learning and recognizing computing algorithms within the data. It will learn by itself what insights to draw without being explicitly programmed on where to look and for what.
  This kind of advancement has opened up opportunities for automating virtually every aspect of your life.`;

  const truncatedDescription = truncateText(description, 200); // Adjust the limit to fit two and a half lines

  return (
    <div className="w-full flex mt-8 space-x-4">
      {/* left */}
      <div className="w-[35%] h-[200px] flex justify-center items-center">
        <img
          src="https://www.desuvit.com/wp-content/uploads/2021/04/AI.png"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      {/* right */}
      <div className="flex flex-col w-[65%]">
        <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">10 uses of AI</h1>
        <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4">
          <p>@Sid</p>
          <div className="flex space-x-2 text-sm">
            <p>22/08/2024</p>
            <p>11:50</p>
          </div>
        </div>
        <p className="text-sm md:text-lg">
          {showFullText ? description : truncatedDescription}
          <Link to="/posts/post/" className="text-blue-500 hover:underline ml-2" onClick={toggleText}>
            {showFullText ? '' : 'Read More'}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default HomePosts;
