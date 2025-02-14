import React from 'react'

const Pagination = () =>  {
  return (
    <div className="w-full border-t border-gray-300" style={{marginBottom:20}}>
    <div className="mt-2 flex items-center justify-between">
      <div>
        <a href="#" className="mx-5 cursor-not-allowed text-sm font-semibold text-gray-900">
          &larr; Previous
        </a>
      </div>
      <div className="flex items-center">
        <a href="#" className="mx-1 flex items-center px-3 py-1 text-gray-900 hover:scale-105">
          1
        </a>
        <a href="#" className="mx-1 flex items-center px-3 py-1 text-gray-900 hover:scale-105">
          2
        </a>
        <a href="#" className="mx-1 flex items-center px-3 py-1 text-gray-900 hover:scale-105">
          3
        </a>
        <p>...</p>
        <a href="#" className="mx-1 flex items-center px-3 py-1 text-gray-900 hover:scale-105">
          8
        </a>
        <a href="#" className="mx-1 flex items-center px-3 py-1 text-gray-900 hover:scale-105">
          9
        </a>
        <a href="#" className="mx-1 flex items-center px-3 py-1 text-gray-900 hover:scale-105">
          10
        </a>
      </div>
      <div>
        <a href="#" className="mx-5 text-sm font-semibold text-gray-900">
          Next &rarr;
        </a>
      </div>
    </div>
  </div>
  )
}
export default Pagination