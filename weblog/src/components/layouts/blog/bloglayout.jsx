import React, { useContext, useEffect, useState } from "react";
import PostCart from "./common/postCart";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import { ContextDash } from "../../context/context";
import ReactPaginate from "react-paginate";

const Blog = ({ location }) => {
    const [filterpost, setFilterpost] = useState([])
    const Allposts = useSelector(state => state.getBlog)
    const { isLight } = useContext(ContextDash)
    const [perPage, setPerPage] = useState(1)
    const [currentPage, SetCurrentPage] = useState(1)
    const [pageCount, setPageCount] = useState(Math.ceil(Allposts.length / 2))


    useEffect(() => {
        setFilterpost(Allposts)
        const searchText = new URLSearchParams(location.search).get("search")
        if (searchText !== null) {
            const filteredPost = Allposts.filter(item => {
                return item.title.includes(searchText)
            })
            setFilterpost(filteredPost)
            setPageCount(0)
        }



        setPageCount(Math.ceil(Allposts.length / 2))
        console.log(Allposts)
    }, [location.search, Allposts])
    const clicked = e => {
        console.log(e.selected + 1);
    }
    return (
        <div>
            <Helmet>
                <title>miladmxm</title>
            </Helmet>
            <div className="postWraper">


                {filterpost.length > 0 ? filterpost.map((post, index) => {
                    return <PostCart key={index} category={post.category} id={post._id} thumbnail={post.thumbnail} body={post.body} title={post.title} fullname={post.user ? post.user.fullname : null} createdAt={post.createdAt} />
                }) :
                    <h2 className="center" style={isLight ? { color: "#333", width: "100%" } : { color: "#fff", width: "100%" }}>متأسفم مثل اینکه هیچ پستی وجود نداره 😥</h2>
                }
            </div>
            {pageCount > 1 ?

                <ReactPaginate
                    previousLabel=""
                    nextLabel=""
                    breakLabel='...'
                    activeClassName="activePaginateItems"
                    previousClassName='previousClassName'
                    nextClassName='nextClassName'
                    containerClassName='paginateItems'
                    onPageChange={(e) => clicked(e)}
                    pageCount={pageCount}
                />
                : null}

        </div>
    )
}
export default Blog