import React, { useContext, useState } from "react";
import UploadImg from "../../ui/uploadimage";
import { getAllUsers } from "../../../action/allUsers"
import { Helmet } from "react-helmet";
import { addUser } from "../../../services/dashServises";
import isEmpty from "../../utils/isEmpty";
import { ContextDash } from "../../context/context";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import DropBox from "../../ui/dropBox";

const AddUser = ({ history }) => {


    const [profile, setProfile] = useState(null);
    const [isAdmin, setIsAdmin] = useState(false);
    const { setMessage, setMessageArr, setLoader, setMessaLoader } = useContext(ContextDash)
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();

    const dispatch = useDispatch()

    const titleBar = (e) => {
        if (e.target.value === "" || e.target.value === null) {
            e.currentTarget.dataset.value = "true";
        } else {
            e.currentTarget.dataset.value = "false";
        }
    };

    const resetfrom = () => {

        setValue("fullname", '')

    }

    const onSubmit = async input => {

        setLoader(true)
        setMessaLoader("لطفا منتظر بمانید")
        setMessageArr([])

        const data = new FormData()
        data.append("profileImg", profile)
        data.append("fullname", input.fullname)
        data.append("email", input.email.toLowerCase())
        data.append("password", input.password)
        data.append("repassword", input.repassword)
        data.append("bio", input.bio)
        data.append("skill", input.skill)
        data.append("emailAddress", input.emailAddress.toLowerCase())
        data.append("whatsapp", input.whatsapp)
        data.append("instagram", input.instagram)
        data.append("phoneNumber", input.phoneNumber)
        data.append("isAdmin",isAdmin)

        try {
            const res = await addUser(data);
            if (res.status === 201) {
                dispatch(getAllUsers())
                resetfrom();
                history.replace('/dashboard/users')
            }
        } catch (ex) {
            console.log(ex);
            let err = [];
            if (isEmpty(ex.response.data.data)) {
                ex.response.data.data.forEach((message) => {
                    err.push(message.message);
                });
            } else {
                err.push(ex.response.data.message);
            }

            setMessage(err, "error");
        }

        setLoader(false)
        setMessaLoader("اتصال اینترنت خود را بررسی کنید")
    };

    return (
        <>
            <h2 className="contentTitle">افزودن کاربر جدید</h2>
            <Helmet>
                <title>داشبورد | افزودن کاربر</title>
            </Helmet>
            <form
                className="add-post"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="row">
                    <UploadImg
                        name="profile"
                        uploadChange={(e) => setProfile(e.target.files[0])}
                        title="تصویر پروفایل کاربر را کنید"
                        classN="profiler"
                    />
                </div>
                <label className={errors.fullname ? "fildinput red" : "fildinput"}>
                    <input
                        className="input-outlined"
                        type="text"
                        id="fullname"
                        data-value="true"
                        onInput={e => titleBar(e)}
                        {...register("fullname", { required: true, minLength: 4 })}
                    />
                    <span>نام و نام خانوادگی</span>
                    {errors.fullname && <small className="subTitle">نوشتن نام و نام خانوادگی الزامی است</small>}
                </label>

                <label className={errors.email ? "fildinput red" : "fildinput"}>
                    <input
                        className="input-outlined"
                        type="email"
                        id="email"
                        data-value="true"
                        onInput={e => titleBar(e)}
                        {...register("email", { required: true, minLength: 4, pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ })}
                    />
                    <span>ایمیل کاربر</span>
                    {errors.email && <small className="subTitle">ایمیل را به درستی وارد کنید</small>}
                </label>

                <label className="fildinput" className={errors.password ? "fildinput red" : "fildinput"}>
                    <input
                        className="input-outlined"
                        type="password"
                        name="password"
                        id="password"
                        data-value="true"
                        onInput={e => titleBar(e)}
                        {...register("password", { required: true, minLength: 4 })}
                    />
                    <span>کلمه عبور کاربر را وارد کنید</span>
                    {errors.password && <small className="subTitle">رمز عبور کاربر را به درستی و بیشتر از 4 کاراکتر وارد کنید</small>}
                </label>

                <label className="fildinput" className={errors.repassword ? "fildinput red" : "fildinput"}>
                    <input
                        className="input-outlined"
                        type="password"
                        name="repassword"
                        id="repassword"
                        data-value="true"
                        onInput={e => titleBar(e)}
                        {...register("repassword", { required: true, minLength: 4 })}
                    />
                    <span>تکرار کلمه عبور کاربر را وارد کنید</span>
                    {errors.repassword && <small className="subTitle">تکرار رمز عبور کاربر را برابر با رمز عبور وارد کنید</small>}
                </label>
                <div>
                    <label className="fildinput" htmlFor="status">
                        <select
                            className="input-outlined"
                            data-value="true"
                            name="isAdmin"
                            id="isAdmin"
                            value={isAdmin}
                            onChange={(e) => setIsAdmin(e.target.value)}
                        >
                            <option value="false">عادی</option>
                            <option value="true">ادمین</option>
                        </select>
                        <span>نقش کاربر</span>
                    </label>
                </div>


                <DropBox plus={40} title="مشخصات شخصی کاربر">

                    <label className={errors.skill ? "fildinput red" : "fildinput"}>
                        <input
                            className="input-outlined"
                            type="text"
                            name="skill"
                            id="skill"
                            data-value="true"
                            onInput={e => titleBar(e)}
                            {...register("skill", { minLength: 2 })}
                        />
                        <span>مهارت و یا شغل کاربر</span>
                        {errors.skill && <small className="subTitle">مهارت کاربر را به درستی وارد کنید</small>}
                    </label>

                    <label className={errors.bio ? "fildinput red" : "fildinput"}>
                        <textarea
                            onInput={e => titleBar(e)}
                            {...register("bio", { minLength: 10 })}
                            data-value="true" className="input-outlined" maxLength="400" name="bio" id="bio">
                        </textarea>
                        <span>بیوگرافی کاربر</span>
                        {errors.bio && <small className="subTitle">بیوگرافی کاربر نباید کمتر از 10 کاراکتر باشد</small>}
                    </label>

                </DropBox>

                <DropBox title="راه های ارتباط با کاربر ">
                    <div className="inputSocial">
                        <i className="fa fa-instagram insta tooltip" data-tooltip="فقط نام کاربری اینستاگرام کاربر را بنویسید"></i>
                        <input type="text" placeholder="برای مثال : miladmxm" className={errors.instagram && "red"} {...register("instagram", { minLength: 4 })} />
                    </div>
                    <div className="inputSocial">
                        <i className="fa fa-phone"></i>
                        <input type="number" className={errors.phoneNumber && "red"} placeholder="فقط شماره بدون صفر : 9109600000" {...register("phoneNumber", { min: 10, pattern: /^9(1[0-9]|3[1-9]|2[1-9])[0-9]{7}/ })} />
                    </div>
                    <div className="inputSocial">
                        <i className="fa fa-whatsapp whatsapp" ></i>
                        <input type="number" placeholder="فقط شماره بدون صفر : 9109600000" className={errors.whatsapp && "red"} {...register("whatsapp", { min: 10, pattern: /^9(1[0-9]|3[1-9]|2[1-9])[0-9]{7}/ })} />
                    </div>
                    <div className="inputSocial">
                        <i className="fa fa-envelope email" ></i>
                        <input type="email" required={false} placeholder="ایمیل کاربر را کامل وارد کنید : miladmxm@gmail.com" className={errors.emailAddress && "red"} {...register("emailAddress", { minLength: 4, pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ })} />
                    </div>
                </DropBox>

                <div className="row">
                    <button type="reset" onClick={() => { resetfrom(); history.replace('/dashboard') }} className="btn btn-denger">
                        انصراف
                    </button>
                    <button className="btn btn-success" type="submit">
                        ساخت پست
                    </button>
                </div>
            </form>
        </>
    );


};

export default AddUser;
