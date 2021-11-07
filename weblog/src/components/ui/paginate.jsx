import React from "react";
import ReactPaginate from "react-paginate";

const Paginate = ({clicked,pageCount}) => {
    return (
        <ReactPaginate
            previousLabel=""
            nextLabel=""
            breakLabel='...'
            activeClassName="activePaginateItems"
            previousClassName='previousClassName'
            nextClassName='nextClassName'
            containerClassName='paginateItems'
            onPageChange={(e) => clicked(e.selected + 1)}
            pageCount={pageCount}
        />
    )
}
export default Paginate