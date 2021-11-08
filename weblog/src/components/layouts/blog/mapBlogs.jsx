import React, { useContext, useEffect, useState } from "react";
import { ContextDash } from "../../context/context";
import PostCart from "./common/postCart";

const MapingBlogs = ({ correntPage, filterpost, productNumber, children,endPage }) => {
    
    const constext = useContext(ContextDash)
    const {numberOfPaginate,setNumberOfPaginate} = constext
    const { isLight } = useContext(ContextDash)
    const posts = [...filterpost]
    const [outFilter, setOutFilte] = useState([])
    const newPosts=[]
    useEffect(() => {
        setOutFilte(posts)
        if(!endPage){
            for (let i = (correntPage - 1) *  productNumber ; i < productNumber * correntPage; i++) {
                newPosts.push(posts[i])
            }
        }else{
            for (let i = (correntPage - 1) *  numberOfPaginate ; i < filterpost.length; i++) {
                newPosts.push(posts[i])
            }
        }
        if (filterpost.length <= productNumber) {
            setOutFilte(filterpost)
        } else {
            setOutFilte(newPosts)
        }
    }, [correntPage, filterpost])
    return (
        <>
        <div className="postWraper">
            {outFilter.length > 0 ? outFilter.map((post) => {
                return <PostCart key={post._id} category={post.category} id={post._id} thumbnail={post.thumbnail} body={post.body} title={post.title} fullname={post.user ? post.user.fullname : null} createdAt={post.createdAt} />
            }) :
                <h2 className="center" style={isLight ? { color: "#333", width: "100%" } : { color: "#fff", width: "100%" }}>متأسفم مثل اینکه هیچ پستی وجود نداره 😥</h2>
            }
            </div>
            {children}
            </>
    )
}
export default MapingBlogs