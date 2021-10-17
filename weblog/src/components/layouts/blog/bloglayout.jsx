import React from "react";
import PostCart from "./common/postCart";
import { useSelector } from "react-redux";

const Blog = () => {

    const posts = useSelector(state => state.getBlog)

    return (
        <div>
            <div style={{ marginTop: "70px" }}></div>
            {posts.length > 0 ? posts.map((post, index) => {
                return <PostCart key={index} id={post._id} thumbnail={post.thumbnail} body={post.body} title={post.title} fullname={post.user.fullname} createdAt={post.createdAt} />
            }) : null}
        </div>
    )
}
export default Blog