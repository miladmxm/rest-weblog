import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { contact } from "../../../services/blogServises";
import { ContextDash } from "../../context/context";

const Contact = ({ history }) => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { setMessage, setMessageArr, setLoader, setMessaLoader } = useContext(ContextDash)


    const defaultValues ={
        email:'',fullname:'',subject:'',text:''
    }
   

    const onSubmit = async input => {

        setLoader(true)
        setMessaLoader("لطفا منتظر بمانید")
        setMessageArr([])
       
        const datas = {
            fullname:input.fullname,
            email:input.email,
            subject:input.subject,
            text:input.text,
            numCaptcha:input.numCaptcha
        }

        try {
            const { status } = await contact(datas)
            if (status === 200) {
                setMessage(['پیام شما با موفقیت ارسال شد'], "success")
                history.replace('/')
                reset({defaultValues})
            } else {
                setMessage(["مشکلی در ثبت نام پیش آمده است"], 'error')
            }
        } catch (ex) {
            let err = []
            if (ex.response.data.data) {
                ex.response.data.data.forEach(message => {
                    err.push(message.message)
                });
            } else {
                err.push(ex.response.data.message)
            }
            setMessage(err, 'error')
        }
        setLoader(false)
        setMessaLoader("اتصال اینترنت خود را بررسی کنید")

    }

    return (
        <main id="main" >
            <Helmet>
                <title>وبلاگ | تماس با ما</title>
                <meta name="description" content="Nested component"/>
            </Helmet>
            <h2 className="title">تماس با ما</h2>
            <form className="loginForm" onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <div className={errors.fullname && "invalid"}>
                    <input type="text" placeholder="نام و نام خانوادگی خود را وارد کنید"{...register("fullname", { required: true, minLength: 4, maxLength: 255 })} />
                </div>
                <div className={errors.email && "invalid"}>
                    <input type="email" placeholder="ایمیل خود را وارد کنید" {...register("email", { required: true, minLength: 4,pattern:/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ })} />
                </div>
                <div className={errors.subject && "invalid"}>
                    <input type="text" placeholder="موضوع پیام خود را بنویسید" {...register("subject", { required: true, minLength: 4 })} />
                </div>
                <div className={errors.text ? "invalid fontziro" : "fontziro"}>
                    <textarea id="mainText" placeholder="متن اصلی"{...register("text", { required: true, minLength: 4 })}  ></textarea>
                </div>
                <div className={errors.numCaptcha && "invalid"}>
                    <label className="captchalabel" htmlFor="rememberme">
                        <input
                            type="text"
                            placeholder="کد امنیتی را وارد کنید"
                            {...register("numCaptcha", { required: true, minLength: 4 })}
                        />
                        <img src="http://localhost:4000/captcha.png" alt="captcha" />
                    </label>
                </div>
                <button type="submit">ارسال <i className="fa fa-send"></i></button>
            </form>

        </main>
    )

}

export default Contact