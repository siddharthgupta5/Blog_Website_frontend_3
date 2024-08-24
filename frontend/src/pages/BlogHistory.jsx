// import Footer from "../components/Footer";
// import Navbar from "../components/Navbar";
// import ProfilePosts from "../components/ProfilePosts";

// const BlogHistory = ({ user }) => {
//     user=true;
//   if (!user) {
//     return (
//       <div>
//         <Navbar />
//         <div className="px-8 mt-8 md:px-[200px] flex justify-center items-center">
//           <h1 className="text-xl font-bold">Please log in to view your blog history.</h1>
//         </div>
//         <Footer />
//       </div>
//     );
//   }

//   return (
//     <div>
//       <Navbar />
//       <div className="px-8 mt-8 md:px-[200px]">
//         <h1 className="text-xl font-bold mb-4">Blog History for {user.username}</h1>
//         <div className="px-8 mt-8 md:px-[200px] flex flex-col-reverse md:flex-row">
//             <div className="flex flex-col w-full md:w-[70%] ">
//                 <h1 className="text-xl mb-4 font-bold">Your posts:</h1>
//                 <ProfilePosts userId={user.id} />
//             </div>
//         </div>
//       </div>  
//       <Footer />
//     </div>
//   );
// };

// export default BlogHistory;

import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProfilePosts from "../components/ProfilePosts";

const BlogHistory = ({ user }) => {
    user = true; // Placeholder for user; replace with actual user authentication logic.
    const [posts, setPosts] = useState([
        {
            id: 1,
            title: "10 uses of AI",
            description: "Before going into the possibilities of this technology innovator, you should understand what AI entails...",
            date: "22/08/2024",
            time: "11:50",
        },
        // Add more posts here
    ]);

    const handleDelete = (postId) => {
        const confirmed = window.confirm("Are you sure you want to delete this post?");
        if (confirmed) {
            setPosts(posts.filter(post => post.id !== postId));
        }
    };

    if (!user) {
        return (
            <div>
                <Navbar />
                <div className="px-8 mt-8 md:px-[200px] flex justify-center items-center">
                    <h1 className="text-xl font-bold">Please log in to view your blog history.</h1>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div>
            <Navbar />
            <div className="px-8 mt-8 md:px-[200px]">
                <h1 className="text-xl font-bold mb-4">Blog History:</h1>
                <div className="space-y-6">
                    {posts.map(post => (
                        <div key={post.id} className="border p-4 rounded-lg shadow-lg bg-white">
                            <h2 className="text-lg font-bold">{post.title}</h2>
                            <p className="text-sm text-gray-500">{post.date} {post.time}</p>
                            <p className="mt-2 mb-4 text-gray-700">{post.description}</p>
                            <div className="flex justify-end space-x-4">
                                <Link
                                    to={`/edit/${post.id}`}
                                    className="text-white bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600"
                                >
                                    Edit
                                </Link>
                                <button
                                    onClick={() => handleDelete(post.id)}
                                    className="text-white bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default BlogHistory;
