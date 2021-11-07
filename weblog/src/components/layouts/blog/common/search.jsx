import React, { useState } from "react";
import {withRouter} from 'react-router-dom'
const SearchForm = ({url,history}) => {
    const [search,setSearch]=useState('')
    const submitSearch=(e)=>{
        e.preventDefault()
        if(search.length >= 2){
            history.push(`${url}?search=${search}`)
        }else{
            history.push(url)
        }
    }
    return (
        <form action="/search" onSubmit={e=>submitSearch(e)} className="serchbar">
            <input type="serch" name="search" placeholder="جستجو کنید" onChange={e=>setSearch(e.target.value)} />
            <button type="submit" className="serchBtn"><i className="fa fa-search"></i></button>
        </form>
    )
}

export default withRouter(SearchForm)