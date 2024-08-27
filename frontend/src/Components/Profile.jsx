import React from 'react';
import { Link } from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios"


const Profile = () => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
          try {
            const { data } = await axios.get(`/api/users/profile`, { withCredentials: true});
            setUserData(data);
           
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }; 
        fetchUsers();
      }, []);


  return (
    <div className="mx-auto my-5 w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex items-center justify-between mb-4">
        <h5 className=" mx-auto text-xl font-bold leading-none text-gray-900 dark:text-white">Profile</h5>
        
      </div>
      <div className="flow-root">
        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">

          <li className="py-3 sm:py-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
              </div>
              <div className="flex-1 min-w-0 ms-4">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  First Name
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                {userData.firstName}
              </div>
            </div>
          </li>

          <li className="py-3 sm:py-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
               
              </div>
              <div className="flex-1 min-w-0 ms-4">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                 Last Name
                </p>
               
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                {userData.lastName}
              </div>
            </div>
          </li>

          <li className="py-3 sm:py-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                
              </div>
              <div className="flex-1 min-w-0 ms-4">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  Email
                </p>
                
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                {userData.email}
              </div>
            </div>
          </li>

          <li className="py-3 sm:py-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
               
              </div>
              <div className="flex-1 min-w-0 ms-4">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  Resume
                </p>
               
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                <a href={`${backendUrl}${userData.resume}`} target="_blank" rel="noopener noreferrer">
              <button
                //onClick={handleLogout}
                type="button"
                className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-700 "
              >
                Open
              </button>

                </a>
              </div>
            </div>
          </li>

          
        </ul>
      </div>
    </div>
  );
};

export default Profile;
