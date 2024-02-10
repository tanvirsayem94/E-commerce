"use client";
import Link from "next/link";
import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF, FaGithub } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/slice";
const page = () => {
  const [email, setEmail] = useState("")
  const dispatch = useDispatch();
  const handleLoginForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    setEmail(email)
    dispatch(addUser(email))
    console.log(name,email, password);
  };

  return (
    <div className="w-5/6 mx-auto h-[75vh]  mt-10 rounded-3xl shadow-2xl shadow-black overflow-hidden">
      <div className="flex">
        <div className=" w-3/6 mx-auto px-4 pt-10">
          <h1 className="text-4xl text-center mb-5  font-semibold">Sign In</h1>
          <div className="flex gap-5 justify-center mb-5">
            <div className="border border-slate-200   px-2 py-2 rounded-md"><FaGoogle /></div>
            <div className="border border-slate-200   px-2 py-2 rounded-md"><FaFacebookF /></div>
            <div className="border border-slate-200   px-2 py-2 rounded-md"><FaGithub /></div>
          </div>
          <p className="text-center mb-5">or use your email password</p>
          <form onSubmit={handleLoginForm} className="grid gap-5">
            <input
              type="email"
              name="email"
              className="bg-slate-200 rounded-md pl-2 py-2"
              placeholder="Email"
            />
            <input
              type="password"
              name="password"
              className="bg-slate-200 rounded-md pl-2 py-2"
              placeholder="Password"
            />
            <div className="mx-auto">
              <button className="text-white text-2xl py-1 mt-10 px-10 bg-[#4B3A9D] rounded-md font-semibold font-mono">
                Sign in
              </button>
            </div>
          </form>
        </div>
        <div className="bg-[#4B3A9D] h-[75vh]   w-5/12 rounded-s-full overflow-hidden text-center grid items-center justify-center">
          <div>
            <h1 className="text-center text-white font-semibold text-3xl">
              Hello, Friend!
            </h1>
            <p className="text-white mb-10">
              Register with your personal details<br/> to use all of sites features
            </p>
            
            <Link className="border border-white rounded-2xl px-10 py-1 " href={"/register"}>Sign Up</Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
