import React from "react";
import PostCart from "./common/postCart";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";

const Blog = () => {

    const posts = useSelector(state => state.getBlog)

    return (
        <div>
            <Helmet>
                <title>miladmxm</title>
            </Helmet>
            <div className="postWraper">


            {posts.length > 0 ? posts.map((post, index) => {
                return <PostCart key={index} category={post.category} id={post._id} thumbnail={post.thumbnail} body={post.body} title={post.title} fullname={post.user?post.user.fullname:null} createdAt={post.createdAt} />
            }) :
                <h2 className="center" style={{ color:"#fff"}}>متأسفم مثل اینکه هیچ پستی وجود نداره 😥</h2>
            }
            </div>
        </div>
    )
}
export default Blog