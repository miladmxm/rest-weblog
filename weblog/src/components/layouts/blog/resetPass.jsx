import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { resetPass } from "../../../services/blogServises";
import { ContextDash } from "../../context/context";
import { decodedToken } from "../../utils/decodedToken";

const ResetPass = ({ history, match }) => {

    const { setMessage, setMessageArr, setLoader, setMessaLoader } = useContext(ContextDash)
    const { register, handleSubmit, reset, setError, formState: { errors } } = useForm();
    const token = match.params.token

    useEffect(() => {
        if (!token || token.length < 15 || !decodedToken(token)) {
            history.replace('/')
        }
    }, [])
    const defaultValues = {
        password: '', repassword: ''
    }


    const onSubmit = async input => {
        setLoader(true)
        setMessaLoader("لطفا منتظر بمانید")
        setMessageArr([])

        if (input.password !== input.repassword) {
            setMessage(['رمز عبور و تکرار آن همخوانی ندارد'], 'error')
            setError('repassword', { type: 'required', message: '', ref: input })
            setLoader(false)
            setMessaLoader("اتصال اینترنت خود را بررسی کنید")
            return reset({ defaultValues })

        }

        const datas = {
            password: input.password,
            repassword: input.repassword
        }
        try {
            const { data, status } = await resetPass(datas, token)
            if (status === 200) {
                setMessage([data.message], "success")
                reset({ defaultValues })
                history.replace('/')
            }
        } catch (ex) {
            let err = []
            console.log(ex);
            if (ex.status != 200) {
                err.push(ex.response.data.message)
            }

            reset({ defaultValues })

            setMessage(err, 'error')
        }
        setLoader(false)
        setMessaLoader("اتصال اینترنت خود را بررسی کنید")
    }


    return (
        
        <main id="main">
            <h1 className="title">تغییر رمز عبور</h1>
            <Helmet>
                <title>وبلاگ | تغییر رمز عبور</title>
            </Helmet>
            <form className="loginForm" onSubmit={handleSubmit(onSubmit)}>
                <div className={errors.password && "invalid"}>
                    <input type="password" placeholder="رمز عبور جدید خود را وارد کنید" {...register("password", { required: true, minLength: 4 })} />
                </div>
                <div className={errors.repassword && "invalid"}>
                    <input type="password" placeholder="رمز عبور جدید خود را وارد کنید" {...register("repassword", { required: true, minLength: 4 })} />
                </div>
                <button type="submit">
                    ارسال ایمیل <i className="fa fa-envelope"></i>
                </button>
            </form>
        </main>
    );
}
export default ResetPass