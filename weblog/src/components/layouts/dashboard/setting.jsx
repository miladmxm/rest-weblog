import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { cleareDash } from "../../../action/dashboard";
import { addUser, deleteUser } from "../../../action/user";
import { editUser } from "../../../services/dashServises";
import { ContextDash } from "../../context/context";
import DropBox from "../../ui/dropBox";
import UploadImg from "../../ui/uploadimage";
import { decodedToken } from "../../utils/decodedToken";
const Settings = ({ history }) => {
  const user = useSelector((state) => state.userHandler);

  
  const [profile, setProfile] = useState(null);
  const { setMessage, setMessageArr, setLoader, setMessaLoader } = useContext(ContextDash);

  const { register, handleSubmit, reset,setError, formState: { errors } } = useForm();

  const dispatch = useDispatch();

  const logout = () => {
    localStorage.removeItem('token')
    dispatch(cleareDash())
    dispatch(deleteUser())
  }

  const defaultValue = {
    password: '',
    newPassword: null,
    newRePassword:null
  }
  const resetForm = () => {
    reset({defaultValue})
    setProfile(null)
  };
  const titleBar = (e) => {
    if (e.target.value === "" || e.target.value === null) {
      e.currentTarget.dataset.value = "true";
    } else {
      e.currentTarget.dataset.value = "false";
    }
  };



  const onSubmit = async input => {

    if (input.newPassword === '' &&profile == null&& input.newRePassword === "" && input.bio === user.bio && input.skill === user.skill && input.emailAddress === user.emailAddress && input.whatsapp === user.whatsapp && input.instagram === user.instagram && input.phoneNumber === user.phoneNumber) {
      return setMessage(["برای ویرایش حداقل یک مورد را باید تغییر بدید"], "error");
    } else if (input.newPassword !== ''||input.newRePassword !== '') {
      if (input.newPassword !== input.newRePassword) {
        return setError('newRePassword',{type: 'required', message: '', ref: input})
      }
    }
    setLoader(true);
    setMessaLoader("لطفا منتظر بمانید");
    setMessageArr([]);

    const datas = new FormData();
    datas.append("password", input.password);
    datas.append("newPassword", input.newPassword);
    datas.append("newRePassword", input.newRePassword);
    datas.append("bio", input.bio);
    datas.append("skill", input.skill);
    datas.append("social", [input.emailAddress, input.whatsapp, input.instagram, input.phoneNumber]);
    datas.append("profile", profile);

    try {
      const { data, status } = await editUser(datas);
      
      if (status === 200) {

        const { payload } = decodedToken(data.token)
       

        localStorage.setItem('token', data.token)
        dispatch(addUser(payload.user))


        setMessage(['تغییرات با موفقیت ذخیره شد'], "success")
        resetForm();
        history.replace("/dashboard");
      }
    } catch (ex) {
      console.log(ex);
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
        onSubmit={handleSubmit(onSubmit)}
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

        <label className={errors.password ? "fildinput red" : "fildinput"}>
          <input
            className="input-outlined"
            type="password"
            name="password"
            id="password"
            data-value="true"
            onInput={e => titleBar(e)}
            {...register("password", { required: true, minLength: 4 })}
          />
          <span>کلمه عبور خود را وارد کنید</span>
          {errors.password && <small className="subTitle">برای ذخیره تغییرات نیاز به وارد کردن رمز خود دارید</small>}
        </label>

        <label className={errors.skill ? "fildinput red" : "fildinput"}>
          <input
            className="input-outlined"
            type="text"
            name="skill"
            id="skill"
            data-value={user.skill ? false : true}
            defaultValue={user.skill}
            onInput={e => titleBar(e)}
            {...register("skill", { minLength: 2 })}
          />
          <span>مهارت و یا شغل شما</span>
          {errors.skill && <small className="subTitle">مهارت خود را به درستی وارد کنید</small>}
        </label>

        <label className={errors.bio ? "fildinput red" : "fildinput"}>
          <textarea
            onInput={e => titleBar(e)}
            defaultValue={user.bio}
            {...register("bio", { minLength: 10 })}
            data-value={user.bio ? false : true} className="input-outlined" maxLength="400" name="bio" id="bio">
          </textarea>
          <span>بیوگرافی شما</span>
          {errors.bio && <small className="subTitle">بیوگرافی شما نباید کمتر از 10 کاراکتر باشد</small>}
        </label>

        <DropBox title="راه های ارتباط با شما ">
          <div className="inputSocial">
            <i className="fa fa-instagram insta tooltip" data-tooltip="فقط نام کاربری اینستاگرام خود را بنویسید"></i>
            <input type="text" placeholder="برای مثال : miladmxm" className={errors.instagram && "red"} defaultValue={user.instagram} {...register("instagram", { minLength: 4 })} />
          </div>
          <div className="inputSocial">
            <i className="fa fa-phone"></i>
            <input type="number" className={errors.phoneNumber && "red"} placeholder="فقط شماره بدون صفر : 9109600000" defaultValue={user.phoneNumber} {...register("phoneNumber", { min: 10, pattern: /^9(1[0-9]|3[1-9]|2[1-9])[0-9]{7}/ })} />
          </div>
          <div className="inputSocial">
            <i className="fa fa-whatsapp whatsapp" ></i>
            <input type="number" placeholder="فقط شماره بدون صفر : 9109600000" className={errors.whatsapp && "red"} defaultValue={user.whatsapp} {...register("whatsapp", { min: 10, pattern: /^9(1[0-9]|3[1-9]|2[1-9])[0-9]{7}/ })} />
          </div>
          <div className="inputSocial">
            <i className="fa fa-envelope email" ></i>
            <input type="email" required={false} placeholder="ایمیل خود را کامل وارد کنید : miladmxm@gmail.com" className={errors.emailAddress && "red"} defaultValue={user.emailAddress} {...register("emailAddress", { minLength: 4, pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ })} />
          </div>
        </DropBox>
        <DropBox plus={40} title="برای تغییر کلمه عبور کلیک کنید (در صورت پشیمانی فیلد ها را خالی بگذارید) ">
          <label className="fildinput" className={errors.newPassword ? "fildinput red" : "fildinput"}>
            <input
              className="input-outlined"
              type="password"
              name="newPassword"
              id="newPassword"
              data-value="true"
              onInput={e => titleBar(e)}
              {...register("newPassword", { minLength: 4 })}
            />
            <span>کلمه عبور جدید خود را وارد کنید</span>
            {errors.newPassword && <small className="subTitle">رمز عبور خود را به درستی و بیشتر از 4 کاراکتر وارد کنید</small>}
          </label>
          <label className="fildinput" className={errors.newRePassword ? "fildinput red" : "fildinput"}>
            <input
              className="input-outlined"
              type="password"
              name="newRePassword"
              id="newRePassword"
              data-value="true"
              onInput={e => titleBar(e)}
              {...register("newRePassword", { minLength: 4 })}
            />
            <span>تکرار کلمه عبور جدید خود را وارد کنید</span>
            {errors.newRePassword && <small className="subTitle">تکرار رمز عبور خود را برابر با رمز عبور جدید وارد کنید</small>}
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
              resetForm();
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
