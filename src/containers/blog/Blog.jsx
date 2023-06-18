import React from 'react'
import {Article} from "../../components"
import {blog01, blog02, blog03, blog04, blog05,} from "../blog/import"
import "./blog.css"

const Blog = () => {
  return (
    <div className='gpt3__blog section__padding'>
      <div className="gpt3__blog-heading">
        <h1 className='gradient__text'>
          A lot is happening. We are blogging about it
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article imageUrls={blog01} title="GPT3 and Open AI is the future. Let us explore how it is." date="Jun 18, 2023"/>
        </div>
        <div className="gpt3__blog-container__groupB">
          <Article imageUrls={blog02} title="GPT3 and Open AI is the future. Let us explore how it is." date="Jun 18, 2023"/>
          <Article imageUrls={blog03} title="GPT3 and Open AI is the future. Let us explore how it is." date="Jun 18, 2023"/>
          <Article imageUrls={blog04} title="GPT3 and Open AI is the future. Let us explore how it is." date="Jun 18, 2023"/>
          <Article imageUrls={blog05} title="GPT3 and Open AI is the future. Let us explore how it is." date="Jun 18, 2023"/>
        </div>
      </div>
    </div>
  )
}

export default Blog