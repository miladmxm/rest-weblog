import React, { useEffect, useState } from "react";
import PostCart from "./common/postCart";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";

const Blog = ({location}) => {
    const [filterpost,setFilterpost] = useState([])
    const Allposts = useSelector(state => state.getBlog)
    useEffect(()=>{
        console.log(Allposts);
        setFilterpost(Allposts)
        const searchText = new URLSearchParams(location.search).get("search")
        if(searchText !== null){
            const filteredPost = Allposts.filter(item=>{
                return item.title.includes(searchText)
            })
            setFilterpost(filteredPost)
        }
    },[location.search,Allposts])
    return (
        <div>
            <Helmet>
                <title>miladmxm</title>
            </Helmet>
            <div className="postWraper">


            {filterpost.length > 0 ? filterpost.map((post, index) => {
                return <PostCart key={index} category={post.category} id={post._id} thumbnail={post.thumbnail} body={post.body} title={post.title} fullname={post.user?post.user.fullname:null} createdAt={post.createdAt} />
            }) :
                <h2 className="center" style={{ color:"#fff"}}>متأسفم مثل اینکه هیچ پستی وجود نداره 😥</h2>
            }
            </div>
        </div>
    )
}
export default Blog