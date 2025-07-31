import React,  from 'react'

export default function Sidebar ({setPage}) {


  return (
    <div className="w-1/8 max-h-full border-r-2 border-gray-500 " >
      <button
        className="w-full text-left p-6 bg-white rounded hover:bg-cyan-100"
        onClick={()=>setPage(1)}
      >
        Home
      </button>
      <button
        className="w-full text-left p-6 bg-white rounded hover:bg-cyan-100"
        onClick={()=>setPage(2)}
      >
        Users
      </button>
      <button
        className="w-full text-left p-6 bg-white rounded hover:bg-cyan-100"
        onClick={()=>setPage(3)}
      >
        Contact
      </button>
      <button
        className="w-full text-left p-6 bg-white rounded hover:bg-cyan-100"
        onClick={()=>setPage(4)}
      >
        About
      </button>
    </div>
  )
}

