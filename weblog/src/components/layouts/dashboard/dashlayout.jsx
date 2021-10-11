import React from "react";
import { Link } from "react-router-dom";
const dashboard = () => {
  return (
    <>
      <div id="dashboard">
        <aside className="side-bar">
        <header>داشبورد وبلاگ <img stc="./img/logo" /></header>
          <nav>
            <ul>
              <li>
                <Link className="active" href="">
                <i className="fa fa-book"></i>
                  پست ها
                </Link>
              </li>
              <li>
              <i className="fa fa-plus"></i>
                <Link href="">افزودن پست</Link>
              </li>
              <li>
              <i className="fa fa-cog"></i>
                <Link href="">تنظیمات حساب</Link>
              </li>
            </ul>
          </nav>
        </aside>
        <section className="content">
          <div className="table">
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
                <tr>
                  <td>1</td>
                  <td>
                    <Link to="#">لورم ایپسوم</Link>
                  </td>
                  <td>25 بهمن 1400</td>
                  <td>
                    <span className="badge badge-denger">خصوصی</span>
                  </td>
                  <td className="textCenter editDelete">
                    <Link to="#">
                      <i className="fa fa-edit"></i>
                    </Link>{" "}
                    |{" "}
                    <Link to="">
                      <i className="fa fa-trash"></i>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    <Link to="#">لورم ایپسوم</Link>
                  </td>
                  <td>25 بهمن 1400</td>
                  <td>
                    <span className="badge">خصوصی</span>
                  </td>
                  <td className="textCenter editDelete">
                    <Link to="#">
                      <i className="fa fa-edit"></i>
                    </Link>{" "}
                    |{" "}
                    <Link to="">
                      <i className="fa fa-trash"></i>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    <Link to="#">لورم ایپسوم</Link>
                  </td>
                  <td>25 بهمن 1400</td>
                  <td>
                    <span className="badge">خصوصی</span>
                  </td>
                  <td className="textCenter editDelete">
                    <Link to="#">
                      <i className="fa fa-edit"></i>
                    </Link>{" "}
                    |{" "}
                    <Link to="">
                      <i className="fa fa-trash"></i>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    <Link to="#">لورم ایپسوم</Link>
                  </td>
                  <td>25 بهمن 1400</td>
                  <td>
                    <span className="badge badge-denger">عمومی</span>
                  </td>
                  <td className="textCenter editDelete">
                    <Link to="#">
                      <i className="fa fa-edit"></i>
                    </Link>{" "}
                    |{" "}
                    <Link to="">
                      <i className="fa fa-trash"></i>
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </>
  );
};
export default dashboard;
