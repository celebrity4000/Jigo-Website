import React from 'react'
import { Home } from 'lucide-react'

import { Outlet, Link } from "react-router-dom";

const BreadCrumbs = ({page}) => {
  return (
    <nav className="flex w-full items-start rounded-md bg-gray-100 p-2" aria-label="Breadcrumb" style={{ backgroundImage: "url(" + "https://jigoindia.com/wp-content/themes/jigomain/images/inner_banner.jpg" + ")",}} >
      <ol className="inline-flex items-center space-x-1 md:space-x-3" style={{paddingLeft:'10%'}}>
        <Link to={'/'}>
        <li className="inline-flex items-center">
          <a
            href="#"
            className="ml-1 inline-flex text-sm font-medium text-gray-800 hover:underline md:ml-2"
          >
            <Home className="mr-4 h-4 w-4" />
            Home
          </a>
        </li>
        </Link>

        <li>
          <div className="flex items-center">
            <span className="mx-2.5 text-gray-800 ">/</span>
            <a href="#" className="ml-1 text-sm font-medium text-gray-800 hover:underline md:ml-2">
              {page}
            </a>
          </div>
        </li>
       
      </ol>
    </nav>
  )
}

export default BreadCrumbs