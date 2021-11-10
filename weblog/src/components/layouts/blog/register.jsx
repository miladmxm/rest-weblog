import React, { useContext, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useForm } from 'react-hook-form'
import { registerUser } from '../../../services/blogServises'
import { ContextDash } from '../../context/context'

const Rejister = ({ history }) => {
  

    const { register, handleSubmit, setError,reset,setValue, formState: { errors } } = useForm();
    const { setMessage, setMessageArr, setLoader, setMessaLoader } = useContext(ContextDash)

    const defaultValues  = {email:'',password:'',repassword:'',fullname:''}
     

    const onSubmit = async input => {
        setMessageArr([])
        setLoader(true)
        setMessaLoader("لطفا منتظر بمانید")

        if (input.password !== input.repassword) {
            setLoader(false)
            setMessaLoader("اتصال اینترنت خود را بررسی کنید")
            setError('repassword',{type: 'required', message: '', ref: input})
            return setValue("repassword", "")
        }

        const datas = {
            fullname: input.fullname,
            email: input.email,
            password: input.password,
            repassword: input.repassword
        }

        try {
            const { status } = await registerUser(datas)
            if (status === 201) {
                setMessage(['ثبت نام شما موفقیت آمیز بود'], "success")
                history.replace('/login')
                reset({defaultValues})
            } else {
                setMessage(["مشکلی در ثبت نام پیش آمده است"], 'error')
            }
        } catch (ex) {
            let err = []
            if (ex.statusCode === 500) {
                err.push(ex.data)
                console.log('sala');
            } else {

                if (ex.response.data.data) {
                    ex.response.data.data.forEach(message => {
                        err.push(message.message)
                    });
                } else {
                    err.push(ex.response.data.message)
                }
            }
            setMessage(err, 'error')
        }
        setLoader(false)
        setMessaLoader("اتصال اینترنت خود را بررسی کنید")
    }
    return (
        <main id="main" >
            <Helmet>
                <title>وبلاگ | ثبت نام در سایت</title>
            </Helmet>
            <h2 className="title">ثبت نام در سایت</h2>
            <form className="loginForm" onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <div className={errors.fullname && "invalid"}>
                    <input type="text" placeholder="نام و نام خانوادگی خود را وارد کنید"{...register("fullname", { required: true, minLength: 4, maxLength: 255 })} />
                </div>
                <div className={errors.email && "invalid"}>
                    <input type="email" placeholder="ایمیل خود را وارد کنید" {...register("email", { required: true, minLength: 4,pattern:/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ })} />
                </div>
                <div className={errors.password && "invalid"}>
                    <input type="password" placeholder="رمز عبور را وارد کنید" {...register("password", { required: true, minLength: 4 })} />
                </div>
                <div className={errors.repassword && "invalid"}>
                    <input type="password" placeholder="تکرار رمز عبور را وارد کنید" {...register("repassword", { required: true, minLength: 4 })} />
                </div>



                <button type="submit">ثبت نام <i className="fa fa-sign-in"></i></button>
            </form>

        </main>
    )
}

export default Rejister