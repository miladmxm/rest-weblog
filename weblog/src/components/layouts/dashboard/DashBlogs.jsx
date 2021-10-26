import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { formatDate } from "../../utils/jalali";
import { Link } from "react-router-dom";
import { getDashboard } from "../../../action/dashboard";
import { ContextDash } from "../../context/context";
const DashBlogs = ({location}) => {
  const posts = useSelector((state) => state.getDashboard);
  const user = useSelector((state) => state.userHandler);
  const contextx = useContext(ContextDash)
  const {setConfirm,confirm} = contextx
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDashboard(user.userId,localStorage.getItem('token'))); 
  }, [location,confirm]);
  return (
    <div className="table">
      <Helmet>
        <title>داشبورد | همه پست ها</title>
      </Helmet>
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
          {posts.length > 0
            ? posts.map((post, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      <Link to={`/single/${post._id}`}>{post.title}</Link>
                    </td>
                    <td>{formatDate(post.createdAt)}</td>
                    <td>
                      {post.status == "private" ? (
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
                      <Link to="#" onClick={()=>setConfirm(post._id)}>
                        <i className="fa fa-trash"></i>
                      </Link>
                    </td>
                  </tr>
                );
              })
            : null}
        </tbody>
      </table>
    </div>
  );
};

export default React.memo(DashBlogs);
