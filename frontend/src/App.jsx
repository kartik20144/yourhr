import { useState } from "react";
import "./App.css";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Components/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Profile from "./Components/Profile";
import Jobs from "./Components/Jobs";
import Candidates from "./Components/Candidates";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Jobs />
        </>
      ),
    },
    {
      path: "/login",
      element: (
        <>
          <Login />
        </>
      ),
    },
    {
      path: "/register",
      element: (
        <>
          <Register />
        </>
      ),
    },
    {
      path: "/profile",
      element: (
        <>
        <Navbar />
        <Profile />
        </>
      ),
    },
    {
      path: "/admin/candidates",
      element: (
        <>
        <Navbar />
        <Candidates />
        </>
      ),
    },
  ]);

  return (
    <>
      <ToastContainer />
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
