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
  const [instagram, setInstagram] = useState(user.instagram);
  const [whatsapp, setWhatsapp] = useState(user.whatsapp);
  const [emailAddress, setEmailAddress] = useState(user.emailAddress);
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);
  const [bio, setBio] = useState(user.bio);
  const [skill, setSkill] = useState(user.skill);
  const [profile, setProfile] = useState(null);
  console.log(user);
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
  const titleBar = (e) => {
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
    data.append("bio", bio);
    data.append("skill", skill);
    data.append("social", [emailAddress,whatsapp,instagram,phoneNumber]);
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
            onChange={(e) => { titleBar(e); setPassword(e.target.value); }}
          />
          <span>کلمه عبور خود را وارد کنید</span>
        </label>

        <label className="fildinput">
          <input
            className="input-outlined"
            type="text"
            name="skill"
            id="skill"
            data-value={user.skill? false:true}
            value={skill}
            onChange={(e) => { titleBar(e); setSkill(e.target.value); }}
          />
          <span>مهارت و یا شغل شما</span>
        </label>

        <label className="fildinput">
          <textarea onChange={e => { titleBar(e); setBio(e.target.value) }} data-value={user.bio? false:true} className="input-outlined" maxLength="400" name="bio" id="bio">
            {bio}
          </textarea>
          <span>بیوگرافی شما</span>
        </label>

        <DropBox title="راه های ارتباط با شما ">
            <div className="inputSocial">
            <i className="fa fa-instagram insta tooltip" data-tooltip="فقط نام کاربری اینستاگرام خود را بنویسید"></i>
              <input type="text" placeholder="برای مثال : miladmxm" value={instagram} onChange={e=>setInstagram(e.target.value)}/>
            </div>
            <div className="inputSocial">
              <i className="fa fa-phone"></i>
              <input type="number" placeholder="فقط شماره بدون صفر : 9109600000" value={phoneNumber} onChange={e=>setPhoneNumber(e.target.value)}/>
            </div>
            <div className="inputSocial">
              <i className="fa fa-whatsapp whatsapp" ></i>
              <input type="number" placeholder="فقط شماره بدون صفر : 9109600000" value={whatsapp} onChange={e=>setWhatsapp(e.target.value)} />
            </div>
            <div className="inputSocial">
              <i className="fa fa-envelope email" ></i>
              <input type="email" required={false} placeholder="ایمیل خود را کامل وارد کنید : miladmxm@gmail.com" value={emailAddress} onChange={e=>setEmailAddress(e.target.value)}/>
            </div>
        </DropBox>
        <DropBox title="برای تغییر کلمه عبور کلیک کنید (در صورت پشیمانی فیلد ها را خالی بگذارید) ">
          <label className="fildinput">
            <input
              className="input-outlined"
              type="password"
              name="newPassword"
              id="newPassword"
              data-value="true"
              value={newPassword}
              onChange={(e) => { titleBar(e); setNewPassword(e.target.value); }}
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
              onChange={(e) => { titleBar(e); setNewRePassword(e.target.value); }}
            />
            <span>تکرار کلمه عبور جدید خود را وارد کنید</span>
          </label>
        </DropBox>

        <DropBox title="برای حذف حساب کاربری خود کلیک کنید">
          <Link replace to={`/delete-user/${localStorage.getItem("token")}`} onClick={logout} >
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
