import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { formatDate } from "../../utils/jalali";
import { Link } from "react-router-dom";
import { ContextDash } from "../../context/context";
import { getAllUsers } from "../../../action/allUsers";
const Users = ({ history, location }) => {
  const [filterUsers, setFilterUsers] = useState([]);
  const allUser = useSelector((state) => state.allUsers);
  const mainUser = useSelector((state) => state.userHandler);
  const { setConfirmUser, confirm } = useContext(ContextDash);
  const dispatch = useDispatch();

  useEffect(() => {
    if (mainUser.dadashami !== "dada") {
      history.replace('/dashboard')
    } else {

      dispatch(getAllUsers());
    }
  }, [location, confirm]);
  useEffect(() => {
    setFilterUsers(allUser);
    const searchText = new URLSearchParams(location.search).get("search");
    if (searchText !== null) {
      const filteredPost = allUser.filter((item) => {
        return item.email.includes(searchText) || item.fullname.includes(searchText);
      });
      setFilterUsers(filteredPost);
    }
  }, [location, allUser, confirm]);

  return (
    <div className="table">
      <Helmet>
        <title>داشبورد | همه پست ها</title>
      </Helmet>

      {filterUsers.length > 0 ? (
        <table className="tableShowItem">
          <thead>
            <tr>
              <th>#</th>
              <th>نام کاربر</th>
              <th>تاریخ ثبت نام</th>
              <th>ایمیل</th>
              <th className="textCenter">ویرایش | حذف</th>
            </tr>
          </thead>
          <tbody>
            {filterUsers.map((user, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <Link to={`/dashboard/setting/${user._id}`}>{user.fullname}</Link>
                  </td>
                  <td>{formatDate(user.createdAt)}</td>
                  <td>

                    <a target="_blank" href={`mailto:${user.email}`} className="badge">{user.email}</a>

                  </td>

                  <td className="textCenter editDelete">


                    <Link to={`/dashboard/setting-user/${user._id}`}>
                      <i className="fa fa-edit"></i>
                    </Link>

                   
                    {user._id !== mainUser.userId ?
                      <>
                       {" "}
                    |{" "}
                      <Link to="#" onClick={() => setConfirmUser(user._id)}>
                        <i className="fa fa-trash"></i>
                      </Link>
                      </>
                      : null}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <h2 className="center">متأسفم مثل اینکه هیچ کاربری پیدا نشد 😥</h2>
      )}
    </div>
  );
};

export default React.memo(Users);
