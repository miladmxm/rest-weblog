import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import DropBox from '../../ui/dropBox';
import UploadImg from '../../ui/uploadimage';
const Settings = ({ history }) => {

    const [password, setPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [newRePassword, setNewRePassword] = useState('')

    const uploadProfile = () => {

    }

    const reset = () => {

    }
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


    const submitHandler = () => {

    }
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

                    <UploadImg name="profile" uploadChange={e => uploadProfile(e)} title="تصویر پروفایل خود را انتخاب کنید" classN="profiler" />
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
                    <Link to='/delete-user'>اگر از حذف حساب کاربری خود اطمینان دارید بر روی این لینک کلیک کنید</Link>
                </DropBox>

                <div className="row">
                    <button type="reset" onClick={() => { reset(); history.replace('/dashboard') }} className="btn btn-denger">
                        انصراف
                    </button>
                    <button className="btn btn-success" type="submit">
                        ثبت تغییرات
                    </button>
                </div>
            </form>

        </>
    );
}

export default Settings;