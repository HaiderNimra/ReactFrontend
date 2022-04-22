import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TopMenu from "./components/TopMenu";
import LandingPage from "./components/LandingPage";
import User from "./components/users/User";
import NewUser from "./components/users/NewUser";
import ContactUS from "./components/ContactUs";
import NotFound from "./components/NotFound";
import UpdateUser from "./components/users/UpdateUser";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import ForgetPass from "./components/ForgetPass";
import ChangePass from "./components/ChangePass";

function App() {
  return (
    <>
      <Router>
        <div>
          <TopMenu />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/users/forget-pass" element={<ForgetPass />} />
            <Route path="/users/change-pass" element={<ChangePass />} />
            <Route path="/contact-us" element={<ContactUS />} />
            <Route path="/users/update/:id" element={<UpdateUser />} />
            <Route path="/users" element={<User />} />
            <Route path="/" element={<LandingPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>

      <ToastContainer />
    </>
  );
}

export default App;
