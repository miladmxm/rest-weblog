import React from "react";
import {Link} from "react-router-dom"
const DashBlogs = () => {
    return (
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
    )
}

export default DashBlogs