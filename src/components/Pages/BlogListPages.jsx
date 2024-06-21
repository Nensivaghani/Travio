import React from 'react'
import PagesTitle from '../PagesTitle'
import BlogList from '../Blog/BlogList'

const BlogListPages = () => {
  return (
    <>
    <PagesTitle title='Blog List'/>
    <BlogList  itemsPerPage={4}/>
    
    </>
  )
}

export default BlogListPages