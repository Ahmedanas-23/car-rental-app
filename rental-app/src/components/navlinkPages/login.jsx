import axios from "axios";
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    try {
      axios
        .post("/user/login", { email, password })
        .then((res) => {
          localStorage.setItem("token", res.data.token); // ✅ store token
          // navigate or show success
            navigate("/signup");
        })
        
      // navigate to protected route (you can change this path)

    } catch (err) {
      console.error(err);
      alert("Invalid email or password");
    }
  };

  return (
    <div className="backdrop-blur-sm bg-gradient-to-r from-blue-200/50 to-blue-400/50 mix-blend-multiply h-[100vh] text-black py-5 justify-center items-center rounded-md flex flex-col">
      <div className="py-2 flex flex-col text-center">
        <h1 className="font-bold text-blue-400 text-2xl">Welcome Back!</h1>
      </div>

      <form
        onSubmit={handleLogin}
        className="shadow-2xl justify-center items-center bg-white p-5 rounded-2xl w-[90%] max-w-md"
      >
        <p className="font-semibold text-blue-400 flex text-center justify-center pb-3 items-center">
          Please enter your details
        </p>

        <div className="py-3">
          <label className="text-gray-400">Email</label>
          <input
            className="w-full pl-2 py-2 outline-0 focus-within:border-blue-400 rounded-sm border border-gray-300"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="py-3">
          <label className="text-gray-400">Password</label>
          <input
            className="w-full pl-2 py-2 rounded-sm outline-0 focus-within:border-blue-400 border border-gray-300"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <input
              id="remember"
              type="checkbox"
              className="w-4 h-4 text-blue-600 border-blue-400 rounded focus:ring-blue-500"
            />
            <label htmlFor="remember" className="text-blue-400 cursor-pointer">
              Remember me
            </label>
          </div>

          <span className="text-blue-400 underline">Forgot password</span>
        </div>
        <div className="py-3">
          <input
            className="w-full mt-3 m py-3 hover:bg-blue-500 active:bg-blue-600 bg-blue-400 rounded-sm text-white font-semibold"
            type="submit"
            value={"Login"}
          />
        </div>
        <div>
          <p className="text-blue-400">
            Dosen't have an account?{" "}
            <Link to={"/signup"} className="text-blue-900 underline">
              Sign up
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Auth;
