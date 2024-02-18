"use client";
import Singleseller from "@/app/component/singleseller/Singleseller";
import getAllposts from "@/app/getApi/getAllposts";
import { useEffect, useState } from "react";

const page =  () => {
  const [seller,setSeller] = useState([])
  const [clicker, setClicker] = useState(true)
  // const { seller } = await getAllposts();
  useEffect(()=>{
    fetch("http://localhost:3000/api/application")
    .then(res =>res.json())
    .then(data =>setSeller(data))
  },[])
  
  
  



    // return data;
  return (
    <div className="flex flex-col gap-3">
      <div className="bg-white h-10 flex   rounded-lg shadow-lg w-[1190px] items-center  text-center">
        <p className="w-10">#</p>
        <p className="w-60">Author-email</p>
        <p className="w-60 pl-12">Author-name</p>
        <p className="w-60 pr-16">Company-Name</p>
        <p className="w-30">Address</p>
        <p className="w-60 pl-16">Number</p>
        <p className="pl-16">Action</p>
      </div>

      {seller?.seller?.map((e, index) => (
        <Singleseller key={e._id} index={index}  data={e}  setClicker={setClicker} />
      ))}
    </div>
  );
};


export default page;
