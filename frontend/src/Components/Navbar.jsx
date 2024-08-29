// import React, { useState, useEffect } from "react";
// import logo from "../assets/logo3.jpg";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { toast } from "react-toastify";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [user, setUser] = useState(null);

//   const navigate = useNavigate();

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const { data } = await axios.get("/api/users/profile", {
//           withCredentials: true,
//         }); // Endpoint to fetch user profile
//         setUser(data); // Assuming response contains user data when authenticated
//       } catch (error) {
//         console.error("Not authenticated");
//         setUser(null);
//       }
//     };

//     fetchUser();
//   }, []);

//   const handleAccountClick = () => {
//     if (user) {
//       // Navigate to the user's account page if logged in
//       navigate("/profile");
//     } else {
//       // Navigate to the login page if not logged in
//       navigate("/login");
//     }
//   };

//   const handleApplications = () => {
//       navigate("/admin/candidates");
//   };

//   const handleLogout = async () => {
//     try {
//       await axios.post(`/api/users/logout`, {}, { withCredentials: true });
//       toast.success("Logged out successfully");
//       navigate("/");
//       setUser(null) // Navigate to the home page
//     } catch (error) {
//       console.log(error);
//       toast.error("Error logging out.");
//     }
//   };

//   return (
//     <nav className="bg-white border-gray-200 dark:bg-gray-900">
//       <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//         <a
//           href="/"
//           className="flex items-center space-x-3 rtl:space-x-reverse"
//           aria-label="Homepage"
//         >
//           <img src={logo} className="h-14" alt="Flowbite Logo" />
//           <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
//             YourHR
//           </span>
//         </a>
//         <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
//           {user ? (
//             <> 

//             {user?.isAdmin===true ? (
//                  <button
//                  onClick={handleApplications}
//                  type="button"
//                  className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-700 m-2"
//                >
//                  View Applications
//                </button>
//             ) : (

//               <button
//                 onClick={handleAccountClick}
//                 type="button"
//                 className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-700 m-2"
//               >
//                 My Space
//               </button>
//             )}
//               <button
//                 onClick={handleLogout}
//                 type="button"
//                 className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-700 m-2"
//               >
//                 Logout
//               </button>
//             </>
//           ) : (
//             <button
//               onClick={handleAccountClick}
//               type="button"
//               className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-700"
//             >
//               Login
//             </button>
//           )}

//           <button
//             onClick={toggleMenu}
//             data-collapse-toggle="navbar-cta"
//             type="button"
//             className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//             aria-controls="navbar-cta"
//             aria-expanded={isMenuOpen}
//           >
//             <span className="sr-only">Open main menu</span>
//             <svg
//               className="w-5 h-5"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 17 14"
//             >
//               <path
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M1 1h15M1 7h15M1 13h15"
//               />
//             </svg>
//           </button>
//         </div>
//         <div
//           className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
//             isMenuOpen ? "block" : "hidden"
//           }`}
//           id="navbar-cta"
//         >
//           <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//             <li>
//               {/* <a
//                 href=""
//                 className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
//               >
//                 Find your dream job!
//               </a> */}
//               <p className="text-2xl">
//               Find your dream job!
//               </p>
//             </li>
            
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState, useEffect } from "react";
import logo from "../assets/logo3.jpg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios.get("/api/users/profile", {
          withCredentials: true,
        });
        setUser(data);
      } catch (error) {
        console.error("Not authenticated");
        setUser(null);
      }
    };

    fetchUser();
  }, []);

  const handleAccountClick = () => {
    if (user) {
      navigate("/profile");
    } else {
      navigate("/login");
    }
  };

  const handleApplications = () => {
    navigate("/admin/candidates");
  };

  const handleLogout = async () => {
    try {
      await axios.post(`/api/users/logout`, {}, { withCredentials: true });
      toast.success("Logged out successfully");
      navigate("/");
      setUser(null);
    } catch (error) {
      console.log(error);
      toast.error("Error logging out.");
    }
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
          aria-label="Homepage"
        >
          <img src={logo} className="h-14" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            YourHR
          </span>
        </a>
        <div className="flex md:order-2 space-x-3 rtl:space-x-reverse">
          {/* Toggle button for smaller screens */}
          <button
            onClick={toggleMenu}
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          {/* Buttons for larger screens */}
          <div className="hidden md:flex space-x-3">
            {user ? (
              <>
                {user?.isAdmin === true ? (
                  <button
                    onClick={handleApplications}
                    type="button"
                    className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-700 m-2"
                  >
                    View Applications
                  </button>
                ) : (
                  <button
                    onClick={handleAccountClick}
                    type="button"
                    className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-700 m-2"
                  >
                    My Space
                  </button>
                )}
                <button
                  onClick={handleLogout}
                  type="button"
                  className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-700 m-2"
                >
                  Logout
                </button>
              </>
            ) : (
              <button
                onClick={handleAccountClick}
                type="button"
                className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-700 m-2"
              >
                Login
              </button>
            )}
          </div>
        </div>

        {/* Dropdown menu for smaller screens */}
        <div
          className={`items-center justify-between w-full md:hidden md:w-auto md:order-1 ${
            isMenuOpen ? "block" : "hidden"
          }`}
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <p className="text-2xl">Find your dream job!</p>
            </li>
            {/* Buttons inside the dropdown for smaller screens */}
            {user ? (
              <>
                {user?.isAdmin === true ? (
                  <li>
                    <button
                      onClick={handleApplications}
                      type="button"
                      className="m-2 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-700 w-full"
                    >
                      View Applications
                    </button>
                  </li>
                ) : (
                  <li>
                    <button
                      onClick={handleAccountClick}
                      type="button"
                      className="m-2 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-700 w-full"
                    >
                      My Space
                    </button>
                  </li>
                )}
                <li>
                  <button
                    onClick={handleLogout}
                    type="button"
                    className="m-2 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-700 w-full"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <li>
                <button
                  onClick={handleAccountClick}
                  type="button"
                  className="m-2 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-700 w-full"
                >
                  Login
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
