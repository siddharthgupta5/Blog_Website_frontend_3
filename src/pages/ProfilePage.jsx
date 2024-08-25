
// import Footer from "../components/Footer";
// import Navbar from "../components/Navbar";
// import { Link } from "react-router-dom";

// const ProfilePage = ({ user }) => {
//     user = true; // Placeholder to simulate a logged-in user. Replace with actual user logic.

//     if (!user) {
//         return (
//             <div>
//                 <Navbar />
//                 <div className="px-8 mt-8 md:px-[200px] flex justify-center items-center">
//                     <h1 className="text-xl font-bold">Please log in to view your profile.</h1>
//                 </div>
//                 <Footer />
//             </div>
//         );
//     }

//     return (
//         <div>
//             <Navbar />
//             <div className="relative px-8 mt-8 md:px-[200px] flex flex-col items-center justify-center min-h-screen">
//                 {/* Blog History Link in Top Right Corner */}
//                 <div className="absolute top-4 right-4 md:right-[200px]">
//                     <Link
//                         to="/history/:id"
//                         className="text-blue-500 hover:underline"
//                     >
//                         Blog History
//                     </Link>
//                 </div>

//                 {/* Profile Section */}
//                 <div className="flex flex-col w-full md:w-[50%] bg-white p-8 shadow-lg rounded-lg">
//                     <h1 className="text-2xl font-bold mb-6 text-center">User Profile</h1>
//                     <input
//                         className="px-4 py-2 mb-4 text-gray-500 border border-gray-300 rounded-lg"
//                         placeholder="Your username"
//                         type="text"
//                         value={user.username}
//                         readOnly
//                     />
//                     <input
//                         className="px-4 py-2 mb-4 text-gray-500 border border-gray-300 rounded-lg"
//                         placeholder="Your email"
//                         type="email"
//                         value={user.email}
//                         readOnly
//                     />
//                     <div className="flex justify-center mt-8">
//                         <button className="font-semibold text-white bg-emerald-500 px-6 py-3 rounded-lg hover:bg-emerald-600">
//                             Update
//                         </button>
//                     </div>
//                 </div>
//             </div>
//             <Footer />
//         </div>
//     );
// };

// export default ProfilePage;

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const ProfilePage = () => {
    // Simulating a logged-in user with test data
    const user = {
        username: "testuser",
        email: "testuser@example.com"
    };

    if (!user) {
        return (
            <div className="flex flex-col h-screen">
                <Navbar />
                <div className="flex flex-grow justify-center items-center">
                    <h1 className="text-xl font-bold">Please log in to view your profile.</h1>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="flex flex-col h-screen">
            <Navbar />

            {/* Profile Section */}
            <div className="relative flex-grow flex flex-col items-center justify-center">
                {/* Blog History Link in Top Right Corner */}
                <div className="absolute top-4 right-4 md:right-[200px]">
                    <Link
                        to="/history/"
                        className="text-blue-500 hover:underline"
                    >
                        Blog History
                    </Link>
                </div>

                <div className="flex flex-col w-full max-w-md bg-white p-6 shadow-lg rounded-lg">
                    <h1 className="text-2xl font-bold mb-6 text-center">User Profile</h1>
                    <input
                        className="px-4 py-2 mb-4 text-gray-500 border border-gray-300 rounded-lg"
                        placeholder="Your username"
                        type="text"
                        value={user.username}
                        readOnly
                    />
                    <input
                        className="px-4 py-2 mb-4 text-gray-500 border border-gray-300 rounded-lg"
                        placeholder="Your email"
                        type="email"
                        value={user.email}
                        readOnly
                    />
                    
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default ProfilePage;
