import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Candidates.css";
import { toast } from "react-toastify";

// Component for displaying a single blog row
const UserSection = ({
  id,
  firstName,
  lastName,
  email,
  resume,
  backendUrl,
  isAdmin,
}) => (
  <tr className="border-b border-black text-[0.675rem] sm:text-sm">
    <td className="p-[0.15rem] sm:p-1 md:p-2">{id}</td>
    <td className="p-[0.15rem] sm:p-1 md:p-2">{firstName}</td>
    <td className="p-[0.15rem] sm:p-1 md:p-2">{lastName}</td>
    <td className="p-[0.15rem] sm:p-1 md:p-2">{email}</td>
    <td className="p-[0.15rem] sm:p-1 md:p-2">{isAdmin === true ? (
        <div>
            True
        </div>
    ) : (
        <div>
            False
        </div>
    )}</td>
    <td className="p-[0.15rem] sm:p-1 md:p-2">
      {isAdmin === false && (
        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
          <a
            href={`${backendUrl}${resume}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              //onClick={handleLogout}
              type="button"
              className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-700 "
            >
              Open
            </button>
          </a>
        </div>
      )}
    </td>
  </tr>
);

const AllUser = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    // Fetch blogs from the API
    const fetchUsers = async () => {
      try {
        const { data } = await axios.get(`/api/users/admin/users`, {
          withCredentials: true,
        });
        setUsers(data);
        setLoading(false);
        console.log(data)
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="home-section flex flex-col items-center  h-screen">
      <div className="bg-white m-5 rounded-sm md:w-4/5 w-full py-10 px-2 md:p-10 overflow-y-auto">
        <h1 className="text-[1.5rem] sm:text-3xl font-semibold">All Users</h1>
        <p className="mb-3 text-[11px] sm:text-[16px]"></p>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <div className="overflow-x-auto">
            <table
              className="w-full border-separate"
              style={{ borderSpacing: "0 10px" }}
            >
              <thead>
                <tr>
                  <th className="p-[0.15rem] sm:p-1 md:p-2 text-left text-[11px] sm:text-[16px]">
                    #
                  </th>
                  <th className="p-[0.15rem] sm:p-1 md:p-2 text-left text-[11px] sm:text-[16px]">
                    First Name
                  </th>
                  <th className="p-[0.15rem] sm:p-1 md:p-2 text-left text-[11px] sm:text-[16px]">
                    LastName
                  </th>
                  <th className="p-[0.15rem] sm:p-1 md:p-2 text-left text-[11px] sm:text-[16px]">
                    Email
                  </th>
                  <th className="p-[0.15rem] sm:p-1 md:p-2 text-left text-[11px] sm:text-[16px]">
                    isAdmin
                  </th>
                  <th className="p-[0.15rem] sm:p-1 md:p-2 text-left text-[11px] sm:text-[16px]">
                    Resume
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <UserSection
                    key={user._id}
                    id={index + 1}
                    firstName={user.firstName}
                    lastName={user.lastName}
                    email={user.email}
                    resume={user.resume}
                    isAdmin={user.isAdmin}
                    backendUrl={backendUrl}
                  />
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllUser;
