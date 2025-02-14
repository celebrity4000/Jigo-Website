import React from 'react'
import BlogList from '../components/BlogList'
import BreadCrumbs from '../components/BreadCrumbs'

function blog() {
  return (
    <div>
         <BreadCrumbs page={'Blogs'} />
        <BlogList />

    </div>
  )
}

export default blog