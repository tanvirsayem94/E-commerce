"use client"

import { useEffect, useState } from "react";
import Modal from "../Modal";
import Swal from "sweetalert2";
import { useSession } from "next-auth/react";

const Reqpost = ({index, item,setClicker,posts}) => {
  const { data: session } = useSession();

    const [loading, setLoading] = useState(true);
    const [id, setId] = useState("");
    const handleModal = (id)=>{
        setId(id)
        setLoading(!loading)
    }
    const handleDelete = async(id)=>{
      const swalWithBootstrapButtons =  Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
      });
      swalWithBootstrapButtons.fire({
        title: "Are you sure?",
        text: "Please Write a Feedback for your action",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
        input: "text",
      }).then((result) => {
        let field = document.getElementById("swal2-input")
        if (result.isConfirmed) {
          
          fetch("http://localhost:3000/api/updatepostseller/"+id, {
            method: "delete",
          })
          .then(result => result.json())
          .then(data => {
            if(data.result.deletedCount){
              const res =  fetch("http://localhost:3000/api/updatepostseller/"+id, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                feedback: field?.value,
                authorEmail:session?.user?.email, 
              }),
              
            });
            setClicker(false)
            if(res.ok){
              swalWithBootstrapButtons.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
              
            }
          })
          
            
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your imaginary file is safe :)",
            icon: "error"
          });
        }
      });
    }
    const originalDateObject = new Date(item.updatedAt)
    const formatedDateString = originalDateObject.toLocaleString('en-US',{timezone: 'UTC'})
    const date = formatedDateString.split(",")[0]
    const time = formatedDateString.split(",")[1]

  return (
    <tr className={`bg-white rounded-2xl ${!item?.productName && "hidden"}`}>
      <th>
        {index + 1}
      </th>
      <td>
        {item.productName}
      </td>
      <td>{item.authorName}</td>
      <td>$ {item.productPrice}</td>
      <td className="text-sm">{date}</td>
      <td>{time}</td>
      <th>
        <button className=" bg-[#FEF1C5] py-2 px-2 rounded-md text-sm">Approve</button>
      </th>
      <th>
        <button className="bg-[#FEF1C5] py-2 px-2 rounded-md text-sm" onClick={()=>handleDelete(item._id)}>Decline</button>
      </th>
      <th>
      {/* <button className="btn" onClick={()=>document.getElementById('my_modal_4').showModal()}>open modal</button> */}
      <label htmlFor="my_modal_6" className="btn" onClick={()=>handleModal(item)}>See Details</label>
      </th>
        {
            !loading && <Modal key={item._id} item={item} id={id} posts={posts} handleModal={handleModal}/>
        }
    </tr>
  );
};

export default Reqpost;

