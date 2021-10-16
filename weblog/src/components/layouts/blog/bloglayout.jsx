import React, { useEffect, useState } from "react";
import PostCart from "./common/postCart";
import { getAllPosts } from "../../../services/blogServises";

const Blog = () => {
    const [posts, setPosts] = useState([])

    useEffect(async () => {

        try {
            const resPosts = await getAllPosts()
            console.log(resPosts.data.posts);
            setPosts(resPosts.data.posts)
        } catch (err) {
            console.log(err);
        }
    }, [])


    return (
        <div>
            <div style={{ marginTop: "70px" }}></div>
            {posts.length > 0 ? posts.map((post, index) => {
                return <PostCart key={index} thumbnail={post.thumbnail} body={post.body} title={post.title} fullname={post.user.fullname} createdAt={post.createdAt} />
            }) : null}
        </div>
    )
}
export default Blog