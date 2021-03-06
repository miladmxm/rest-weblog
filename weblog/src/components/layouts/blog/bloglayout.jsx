import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import Paginate from "../../ui/paginate";
import MapingBlogs from "./mapBlogs";
import { ContextDash } from "../../context/context";

const Blog = ({ location }) => {
    const constext = useContext(ContextDash)
    const { numberOfPaginate } = constext
    const Allposts = useSelector(state => state.getBlog)
    const [filterpost, setFilterpost] = useState(Allposts)
    const [correntPage, setCorrentPage] = useState(1)
    const [productNumber, setProductNumber] = useState(numberOfPaginate)
    const [endPage, setEndPage] = useState(false)
    const [showPaginate, setShowPaginate] = useState(false)

    useEffect(() => {
        setFilterpost(Allposts)
        const searchText = new URLSearchParams(location.search).get("search")
        if (searchText !== null) {
            const filteredPost = Allposts.filter(item => {
                return item.title.includes(searchText)
            })
            setFilterpost(filteredPost)
        }
    }, [location.search, Allposts])

    useEffect(() => {
        if (filterpost.length <= productNumber) {
            setShowPaginate(false)
        } else {
            setShowPaginate(true)
        }
    }, [filterpost])


    const clicked = e => {

        if (Math.ceil(filterpost.length / productNumber) === e) {
            setEndPage(true)
            setProductNumber(filterpost.length % numberOfPaginate)
        } else {
            setEndPage(false)
            setProductNumber(numberOfPaginate)
        }

        setCorrentPage(e)
    }
    return (
        <div>
            <Helmet>
                <title>miladmxm</title>
            </Helmet>
            
            <MapingBlogs correntPage={correntPage} endPage={endPage} filterpost={filterpost} productNumber={productNumber} >
                {showPaginate ? <Paginate pageCount={Math.ceil(filterpost.length / numberOfPaginate)} clicked={e => clicked(e)} /> : null}
            </MapingBlogs>

        </div>
    )
}
export default React.memo(Blog)