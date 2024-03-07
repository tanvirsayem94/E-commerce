"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const page = ({params}) => {
    const [singleData, setSingleData] = useState([]);

    const query = params.id.split("_");
    const id = query[0]
    const quantity = query[1]
    console.log(quantity)
    const { data: session } = useSession();
    useEffect(() => {
        fetch("http://localhost:3000/api/productDetails/" + id)
          .then((res) => res.json())
          .then((data) => setSingleData(data.product));
      }, [params,id]);
      const { authorName,
        productName,
        brandName,
        deliveryTime,
        deliveryFee,
        features,
        model,
        producImg,
        productPrice,
        productWarrenty,
        returnPolicy,
        description,
        authorImage, } = singleData;
        const productAmount = productPrice * quantity;
        
        const deliveryFeeNum = parseFloat(deliveryFee)
        console.log(typeof(deliveryFeeNum))

    return (
        <div className="grid grid-rows-2 grid-cols-12 gap-3 w-11/12 mx-auto">
            
                <div className="bg-white col-span-8 row-span-1 rounded-md shadow-lg p-5" >
                    <h1>delivery to {session?.user.name}</h1>
                    <form action="" className="grid gap-5">
                        <div className="grid">
                        <span>Address</span>
                        <input type="text" name="" id="" className="bg-slate-200 outline-none py-1 pl-2 w-96" placeholder="type your address here" />
                        </div>
                        <p>Email to {session?.user.email}</p>
                    </form>
                </div>
            
            <div className="bg-white row-start-2 col-span-8 rounded-md shadow-lg ">
asdfdfadfsadfasdf
            </div>
            <div className="bg-white col-start-9 row-span-2 rounded-md shadow-lg w-64 p-5">
                <p className="text-black">order summery</p>
                <div className="flex gap-5">
                    <p>Items Total</p>
                    <p>$ {productPrice * quantity}</p>
                </div>
                <div className="flex gap-5">
                <p>Delivery Fee</p>
                    <p>$ {deliveryFee}</p>
                </div>
                <div className="flex gap-5">
                <p>total-amount</p>
                    <p>$ {productAmount + deliveryFeeNum}</p>
                </div>
                <button>Place order</button>
            </div>
            
        </div>
    );
};

export default page;