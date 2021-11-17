import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { forgetPass } from "../../../services/blogServises";
import { ContextDash } from "../../context/context";

const ForgetPass = ({ history }) => {
  

  const { setMessage, setMessageArr, setLoader, setMessaLoader } = useContext(ContextDash)
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

  const onSubmit = async input => {
    setLoader(true)
    setMessaLoader("لطفا منتظر بمانید")
    setMessageArr([])
    

    const datas = {
        email:input.email.toLowerCase()
    }
    try {
        const {data, status } = await forgetPass(datas)
        if (status === 200) {
            setMessage([data.message], "success")
            setValue('email','')
            history.replace('/')
        }
    } catch (ex) {
        let err = []
        console.log(ex);
        if (ex.status != 200) {
            err.push(ex.response.data.message)
        }

        setValue('email','')

        setMessage(err, 'error')
    }
    setLoader(false)
    setMessaLoader("اتصال اینترنت خود را بررسی کنید")
}

  return (
    <main id="main">
      <h1 className="title">فراموشی رمز عبور</h1>
      <Helmet>
        <title>وبلاگ | فراموشی رمز عبور</title>
      </Helmet>
      <form className="loginForm" onSubmit={handleSubmit(onSubmit)}>
        <div className={errors.email && "invalid"}>
          <input
            type="email"
            placeholder="ایمیل خود را وارد کنید"
            {...register("email", { required: true, minLength: 4,pattern:/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ })}
          />
        </div>
        <button type="submit">
          ارسال ایمیل <i className="fa fa-envelope"></i>
        </button>
      </form>
    </main>
  );
};
export default ForgetPass;
