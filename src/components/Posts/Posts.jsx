import React, { useState } from 'react'
import './Posts.css'
import image from '../../assets/images/post3.jpg'
import { postsData } from '../../data/Posts'

const Posts = () => {
    const [activePost, setActivePost] = useState(1)
  return (
    <section className="posts">
        <div className="container">
            <div className="section-head">
                <h1>Recent Posts</h1>
                <h3>Lorem Ipsum available, but the majority have suffered alteration in some form.</h3>
            </div>

            <div className="posts-info">
                {
                    postsData.map((post, index) => (
                        <div className={index == activePost ? "inner active" : "inner"} key={post.id}>
                            <div className="image">
                                <img src={post.image} alt="" />
                            </div>
                            <div className="details">
                                <span className='title'>{post.title}</span>
                                <span className='date'>{post.date}</span>
                                <span className="detail">{post.detail}</span>
                                <span className="read-more">Read more+</span>
                            </div>
                        </div>
                    ))
                }      
            </div>
        </div>
    </section>
  )
}

export default Posts