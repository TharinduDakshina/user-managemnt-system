'use client';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FaSearch, FaEdit, FaTrash } from "react-icons/fa";
import CommonMessage from "@/components/CommonMessage";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaUserEdit } from "react-icons/fa";

const Page = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();
  const [isDelete, setIsDelete] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    axios.get("https://dummyjson.com/users")
      .then((res) => {
        setUsers(res.data.users);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }, []);

  const filteredUsers = users.filter((user) => {
    const fullText = `${user.firstName || ""} ${user.lastName || ""} ${user.username || ""} ${user.email || ""}`;
    return fullText.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const handleOnDelete = (userName) => {
    setIsDelete(true);
    setUserName(userName)
  }

  const handleClickFunctionForDelete = (option) => {
    if (option === 1){
      // handel ok button
      setIsDelete(false);
      // write api request
    }else {
      // handel cancel button
      setIsDelete(false);
    }

  }

  const handleClickFunctionForUpdate = (option) => {
    if (option === 1){
      // handel ok button
      setIsEdit(false);
      // write api request
    }else {
      // handel cancel button
      setIsEdit(false);
    }

  }

const handelOnEdit = () =>{
    setIsEdit(true);
}


  return (
    <div className="p-4">
      {/* Search bar */}
      <div className="flex w-full items-center border border-gray-300 rounded px-4 py-2 mb-4 md:w-auto">
        <FaSearch className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full focus:outline-none"
        />
      </div>

      {/* User Table */}
      <div className='relative w-full flex flex-col shadow-lg mb-6 overflow-x-auto'>
        <table className='w-full table-auto overflow-hidden rounded-lg'>
          <thead className='bg-gray-300 '>
            <tr>
              <th className='text-md px-6 py-3 pb-4 pt-4'>First Name</th>
              <th className='text-md px-6 py-3 pb-4 pt-4'>Last Name</th>
              <th className='text-md px-6 py-3 pb-4 pt-4'>User Name</th>
              <th className='text-md px-6 py-3 pb-4 pt-4'>Email</th>
              <th className='text-md px-6 py-3 pb-4 pt-4'>Status</th>
              <th className='text-md px-6 py-3 pb-4 pt-4'>Actions</th>
            </tr>
          </thead>
          <tbody className={'divide-y bg-white/70 divide-gray-200'}>
            {
              filteredUsers.map((user) => (
                <tr key={user.id} className='text-center hover:bg-gray-50  '>
                  <td className="text-md px-6 py-2 pb-4 pt-4">{user.firstName}</td>
                  <td className="text-md px-6 py-2 pb-4 pt-4">{user.lastName}</td>
                  <td className="text-md px-6 py-2 pb-4 pt-4">{user.username}</td>
                  <td className="text-md px-6 py-2 pb-4 pt-4">{user.email}</td>
                  <td className="text-md px-6 py-2 pb-4 pt-4">{user.isVerified ? 'Active' : 'Inactive'}</td>
                  <td className="text-md px-6 py-2 pb-4 pt-4 flex justify-center gap-2">
                    <button
                        className="p-1 text-gray-500 pr-4 hover:text-blue-600  cursor-pointer"
                        onClick={()=>{handelOnEdit()}}
                    >
                      <FaEdit  size={20}/>
                    </button>
                    <button
                        className="p-1 text-gray-500 hover:text-red-600 cursor-pointer"
                        onClick={() => {handleOnDelete(user.firstName)}}
                    >
                      <FaTrash  size={20}/>
                    </button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>

      {/* Add New User Button */}
      <div className="flex justify-end">
        <button
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => router.push("/userAdd")}
        >
          Add New User +
        </button>
      </div>

      {isDelete &&(
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/60 ">
            <CommonMessage
                icon={<RiDeleteBin5Line className="text-red-500 text-4xl"/>}
                message={`Do you want to delete ${userName}'s details ?`}
                onClickHandle={handleClickFunctionForDelete}
            />
          </div>
      )}


      {isEdit && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/60 ">
            <CommonMessage
                icon={<FaUserEdit className="text-blue-950 text-4xl"/>}
                message={`Do you want to update ${userName}'s details ?`}
                onClickHandle={handleClickFunctionForUpdate}
            />
          </div>
      )}
    </div>
  );
}

export default Page;
