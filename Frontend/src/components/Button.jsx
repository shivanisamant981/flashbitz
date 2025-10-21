import React from 'react'

export default function Button({label, onclick}) {
  return (
    <div>
        <button onClick={onclick}
        className="h-full w-full bg-[#15011F] font-medium text-white rounded-lg text-sm px-5 py-2.5 me-2 mb-2 hover:bg-blue-500 focus:outline-none focus:ring-gray-800">
        {label}
        </button>
    </div>
  )
}
