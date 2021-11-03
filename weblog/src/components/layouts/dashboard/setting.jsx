import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { cleareDash } from "../../../action/dashboard";
import { addUser, deleteUser } from "../../../action/user";
import { editUser } from "../../../services/dashServises";
import { ContextDash } from "../../context/context";
import DropBox from "../../ui/dropBox";
import UploadImg from "../../ui/uploadimage";
const Settings = ({ history }) => {
  const user = useSelector((state) => state.userHandler);

  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState('');
  const [newRePassword, setNewRePassword] = useState('');
  const [profile, setProfile] = useState(null);
  const { setMessage, setMessageArr, setLoader, setMessaLoader } =
    useContext(ContextDash);
  const dispatch = useDispatch();
  const logout = () => {
    localStorage.removeItem('token')
    dispatch(cleareDash())
    dispatch(deleteUser())
  }
  const reset = () => {
    setPassword("");
    setNewPassword(null)
    setNewRePassword(null)
    setProfile(null)
  };
  const passwordHadnler = (e) => {
    setPassword(e.target.value);
    if (e.target.value === "" || e.target.value === null) {
      e.currentTarget.dataset.value = "true";
    } else {
      e.currentTarget.dataset.value = "false";
    }
  };

  const newPasswordHadnler = (e) => {
    setNewPassword(e.target.value);
    if (e.target.value === "" || e.target.value === null) {
      e.currentTarget.dataset.value = "true";
    } else {
      e.currentTarget.dataset.value = "false";
    }
  };
  const newRePasswordHadnler = (e) => {
    setNewRePassword(e.target.value);
    if (e.target.value === "" || e.target.value === null) {
      e.currentTarget.dataset.value = "true";
    } else {
      e.currentTarget.dataset.value = "false";
    }
  };

  const submitHandler = async (e) => {
    setLoader(true);
    setMessaLoader("لطفا منتظر بمانید");
    setMessageArr([]);
    e.preventDefault();
    const data = new FormData();
    data.append("password", password);
    data.append("newPassword", newPassword);
    data.append("newRePassword", newRePassword);
    data.append("profile", profile);

    try {
      const res = await editUser(data);
      if (res.status == 200) {
        dispatch(addUser(res.data.data));
        reset();
        history.replace("/dashboard");
      }
    } catch (ex) {
      console.log(ex.response);
      let err = [];

      err.push(ex.response.data.message);

      setMessage(err, "error");
    }

    setLoader(false);
    setMessaLoader("اتصال اینترنت خود را بررسی کنید");
  };
  return (
    <>
      <Helmet>
        <title>داشبورد | تنظیم پروفایل</title>
      </Helmet>

      <h2 className="contentTitle">تنظیم پروفایل</h2>

      <form
        className="add-post"
        encType="multipart/form-data"
        onSubmit={(e) => submitHandler(e)}
      >
        <div className="row">
          <UploadImg
            defaultImg={
              user.profileImg === "default"
                ? "user.png"
                : `image/${user.profileImg}`
            }
            name="profile"
            uploadChange={(e) => setProfile(e.target.files[0])}
            title="تصویر پروفایل خود را انتخاب کنید"
            classN="profiler"
          />
        </div>

        <label className="fildinput">
          <input
            className="input-outlined"
            type="password"
            name="password"
            id="password"
            data-value="true"
            value={password}
            onChange={(e) => passwordHadnler(e)}
          />
          <span>کلمه عبور خود را وارد کنید</span>
        </label>

        <DropBox title="برای تغییر کلمه عبور کلیک کنید (در صورت پشیمانی فیلد ها را خالی بگذارید) ">
          <label className="fildinput">
            <input
              className="input-outlined"
              type="password"
              name="newPassword"
              id="newPassword"
              data-value="true"
              value={newPassword}
              onChange={(e) => newPasswordHadnler(e)}
            />
            <span>کلمه عبور جدید خود را وارد کنید</span>
          </label>
          <label className="fildinput">
            <input
              className="input-outlined"
              type="password"
              name="newRePassword"
              id="newRePassword"
              data-value="true"
              value={newRePassword}
              onChange={(e) => newRePasswordHadnler(e)}
            />
            <span>کلمه عبور جدید خود را وارد کنید</span>
          </label>
        </DropBox>

        <DropBox title="برای حذف حساب کاربری خود کلیک کنید">
          <Link replace onClick={logout} to={`/delete-user/${user.userId}`}>
            اگر از حذف حساب کاربری خود اطمینان دارید بر روی این لینک کلیک کنید
          </Link>
        </DropBox>

        <div className="row">
          <button
            type="reset"
            onClick={() => {
              reset();
              history.replace("/dashboard");
            }}
            className="btn btn-denger"
          >
            انصراف
          </button>
          <button className="btn btn-success" type="submit">
            ثبت تغییرات
          </button>
        </div>
      </form>
    </>
  );
};

export default Settings;
