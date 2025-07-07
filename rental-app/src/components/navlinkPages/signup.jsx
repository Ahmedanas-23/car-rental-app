import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

function signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ fullname: '', email: '', password: '' });
  const [errors, setErrors] = useState([]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors([]); // clear errors while typing
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setErrors([]);
    try { 
      await axios.post('http://localhost:3333/api/login', form); // Adjust route if needed 
      navigate('/'); 
    } catch (err) { 
      if (err.response?.data?.errors) { 
        setErrors(err.response.data.errors); 
      } else { 
        setErrors('Signup failed!'); 
      } 
    } 
  };

  // Utility to get error by keyword
  const getError = (keyword) => {
    return errors.find((e) => typeof e === 'string' && e.toLowerCase().includes(keyword));
  };

  return (
    <div className="bg-blue-400 h-[100vh] text-black py-5 justify-center items-center rounded-md flex flex-col">
      <div className="py-2 flex flex-col text-center">
        <h1 className="font-bold text-white text-2xl">Welcome! Let's get started.</h1>
      </div>

      <form onSubmit={handleSignup} className="shadow-2xl justify-center items-center bg-white p-5 rounded-2xl w-[90%] max-w-md">
        <p className="font-semibold text-blue-400 flex text-center justify-center pb-3 items-center">
          Create a free account with your email.
        </p>

        <div className="py-3">
          <label className="text-gray-400">Full Name</label>
          {getError("name") && <p className="text-red-500 text-sm">{getError("name")}</p>}
          <input
            className="w-full pl-2 py-2 rounded-sm border outline-0 focus-within:border-blue-400 border-gray-300"
            type="text"
            name="fullname"
            value={form.fullname}
            onChange={handleChange}
          />
        </div>

        <div className="py-3">
          <label className="text-gray-400">Email</label>
          {getError("email") && <p className="text-red-500 text-sm">{getError("email")}</p>}
          <input
            className="w-full pl-2 py-2 outline-0 focus-within:border-blue-400 rounded-sm border border-gray-300"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </div>

        <div className="py-3">
          <label className="text-gray-400">Password</label>
          {getError("password") && <p className="text-red-500 text-sm">{getError("password")}</p>}
          <input
            className="w-full pl-2 py-2 rounded-sm outline-0 focus-within:border-blue-400 border border-gray-300"
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
        </div>

        <div className="py-3">
          <input
            className="w-full mt-3 m py-3 bg-blue-400 rounded-sm text-white font-semibold"
            type="submit"
            value={"Sign up"}
          />
        </div>
      </form>
    </div>
  );
}

export default signup;
