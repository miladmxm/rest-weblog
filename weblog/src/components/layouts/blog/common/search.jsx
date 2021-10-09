import React from "react";

const SearchForm = () => {
    return (
        <form action="/search" method="POST" className="serchbar">
            <input type="serch" name="search" placeholder="جستجو کنید" />
            <button className="serchBtn"><i className="fa fa-search"></i></button>
        </form>
    )
}

export default SearchForm