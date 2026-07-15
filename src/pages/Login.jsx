import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import {auth} from "../firebase"
import { setUser } from "../features/authSlice";


const Login = () => {


  const [email, setemail] = useState('');
  const [password, setpassword] = useState('')
  const [error, seterror] = useState('')
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEmailLogin = async () => {
    seterror("")
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      dispatch(setUser({uid: result.user.uid, email:result.user.email}));
      navigate("/");
    } catch (error) {
      seterror(error.message);
    }
  }

  const handleGooglelogin = async () => {
    seterror("");
    try {
      const provider = new GoogleAuthProvider;
      const result = await signInWithPopup(auth,provider);
      dispatch(setUser({uid:result.user.uid, email:result.user.email}));
      navigate("/");
    } catch (error) {
      seterror(error.message)
    }
  }


  return (
    <div className="bg-[#f1f2ff] h-screen w-screen ">
      <div className="h-[450px] w-[350px] ml-100 rounded-xl absolute mt-10  bg-white p-3">
        <div className="flex justify-center">
          <img
            className="w-15 h-15 rounded-3xl"
            src="https://images.unsplash.com/photo-1705988142466-e468bc654eeb?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>

        <h1 className="flex justify-center font-bold ">Welcome back</h1>
        <h4 className="flex justify-center text-gray-400">
          Sign in to your workspace
        </h4>

        <h5 className="mt-6 text-gray-700">Email</h5>
        <input
          value={email}
          onChange={(e)=>{
            setemail(e.target.value)
          }}
          type="email"
          placeholder="Enter Your Email"
          className="w-full border border-gray-400 rounded-md px-3 py-2 text-gray-700 placeholder-gray-400 outline-none"
        />

        <h5 className="mt-3 text-gray-700">Password</h5>
        <input
          value={password}
          onChange={(e)=>{setpassword(e.target.value)}}
          type="password"
          placeholder="Enter Your Password"
          className="w-full border border-gray-400 rounded-md px-3 py-2 text-gray-700 placeholder-gray-400 outline-none"
        />

        <button
        onClick={handleEmailLogin}
         className=" h-8 w-50 rounded mt-5 ml-14 bg-[#7050ff] text-white font-semibold">
          Sign in
        </button>
        <div className="flex items-center my-5">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="mx-4 text-gray-500 text-sm">OR</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>
        <button onClick={handleGooglelogin} className=" h-8 w-50 rounded  ml-15 bg-[#7050ff] text-black bg-gray-200 ">
          Continue with google
        </button>
      </div>
    </div>
  );
};

export default Login;
