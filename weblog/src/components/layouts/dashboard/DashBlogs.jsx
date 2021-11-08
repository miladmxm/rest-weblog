import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { formatDate } from "../../utils/jalali";
import { Link } from "react-router-dom";
import { getDashboard } from "../../../action/dashboard";
import { ContextDash } from "../../context/context";
const DashBlogs = ({ location }) => {
  const [filterpost,setFilterpost] = useState([])
  const Allposts = useSelector((state) => state.getDashboard);
  const contextx = useContext(ContextDash)
  const { setConfirm, confirm } = contextx
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getDashboard());
},[location,confirm])
  useEffect(()=>{
    setFilterpost(Allposts)
    const searchText = new URLSearchParams(location.search).get("search")
    if(searchText !== null){
        const filteredPost = Allposts.filter(item=>{
            return item.title.includes(searchText)
        })
        setFilterpost(filteredPost)
    }
},[location,Allposts,confirm])

  return (
    <div className="table">
      <Helmet>
        <title>داشبورد | همه پست ها</title>
      </Helmet>

      {filterpost.length > 0

        ?
        <table className="tableShowItem">
          <thead>
            <tr>
              <th>#</th>
              <th>عنوان پست</th>
              <th>تاریخ ثبت پست</th>
              <th>وضعیت</th>
              <th className="textCenter">ویرایش | حذف</th>
            </tr>
          </thead>
          <tbody>
            {
              filterpost.map((post, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      <Link to={`/single/${post._id}`}>{post.title}</Link>
                    </td>
                    <td>{formatDate(post.createdAt)}</td>
                    <td>
                      {post.status === "private" ? (
                        <span className="badge badge-denger">خصوصی</span>
                      ) : (
                        <span className="badge">عمومی</span>
                      )}
                    </td>
                    <td className="textCenter editDelete">
                      <Link to={`/dashboard/edit-post/${post._id}`}>
                        <i className="fa fa-edit"></i>
                      </Link>{" "}
                      |{" "}
                      <Link to="#" onClick={() => setConfirm(post._id)}>
                        <i className="fa fa-trash"></i>
                      </Link>
                    </td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
        :
          <h2 className="center">متأسفم مثل اینکه هیچ پستی وجود نداره 😥</h2>
      }

    </div>
  );
};

export default React.memo(DashBlogs);
