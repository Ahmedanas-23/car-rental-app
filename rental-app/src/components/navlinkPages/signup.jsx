import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import { useState } from "react";

function signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ fullname: "", email: "", password: "" });
  const [errors, setErrors] = useState([]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors([]); // clear errors while typing
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setErrors([]);
    try {
      await axios.post("http://localhost:3333/user/signup", form); // Adjust route if needed
      navigate("/");
      Swal.fire({
        title: "Registered Successfully!",
        icon: "success",
        draggable: true,
      });
    } catch (err) {
      if (err.response?.data?.errors) {
        setErrors(err.response.data.errors);
      } else {
        setErrors("Signup failed!");
      }
    }
  };

  // Utility to get error by keyword
  const getError = (keyword) => {
    return errors.find(
      (e) => typeof e === "string" && e.toLowerCase().includes(keyword)
    );
  };

  return (
    <div className="backdrop-blur-lg bg-gradient-to-r from-blue-200/50 to-blue-400/50 mix-blend-multiply h-[100vh] text-black py-5 justify-center items-center flex">
      <div className="relative w-[350px] h-[80vh]">
        <img
          src="public/assets/top-view-mix-blue-shades.jpg"
          className="shadow-2xl rounded-l-lg h-full w-full object-cover"
          alt="carimg"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="font-bold mx-3 text-white text-3xl text-center">
            Welcome! Let's get started.
          </h1>
        </div>
      </div>

      <div className="flex flex-col">
        <form
          onSubmit={handleSignup}
          className="shadow-2xl rounded-r-lg h-[80vh] bg-white p-5 w-[350px] max-w-md"
        >
          <p className="font-semibold text-blue-400 flex text-center justify-center pb-3 items-center">
            Create a free account with your email.
          </p>

          <div className="py-2">
            <label className="text-gray-400">Full Name</label>
            {getError("name") && (
              <p className="text-red-500 text-[10px]">{getError("name")}</p>
            )}
            <input
              className="w-full pl-2 py-2 rounded-sm border outline-0 focus-within:border-blue-400 border-gray-300"
              type="text"
              name="fullname"
              value={form.fullname}
              onChange={handleChange}
            />
          </div>

          <div className="py-2">
            <label className="text-gray-400">Email</label>
            {getError("email") && (
              <p className="text-red-500 text-[10px]">{getError("email")}</p>
            )}
            <input
              className="w-full pl-2 py-2 outline-0 focus-within:border-blue-400 rounded-sm border border-gray-300"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div className="py-2">
            <label className="text-gray-400">Password</label>
            {getError("password") && (
              <p className="text-red-500 text-[10px]">{getError("password")}</p>
            )}
            <input
              className="w-full pl-2 py-2 rounded-sm outline-0 focus-within:border-blue-400 border border-gray-300"
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
            />
          </div>

          <div className="py-2">
            <input
              className="w-full mt-3 m py-3 hover:bg-blue-500 active:bg-blue-600 bg-blue-400 rounded-sm text-white font-semibold"
              type="submit"
              value={"Sign up"}
            />
          </div>
          <div>
            <p className="text-[15px] text-blue-400">Already have an account? <Link className="text-indigo-900 underline" to={"/login"}>Login</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default signup;
