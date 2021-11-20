import React, { useContext, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Link } from "react-router-dom";
import { ContextDash } from "../../context/context";
import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";
import isEmpty from "../../utils/isEmpty";
import { deleteUser } from "../../../services/dashServises";
import { getBlog } from "../../../action/blog";
import { useForm } from "react-hook-form";

const DeleteUser = ({ match, history }) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const constext = useContext(ContextDash)
    const { setMessage, setMessageArr, setLoader, setMessaLoader } = constext
    const [isCaptcha, setIsCaptcha] = useState(null)
    const dispatch = useDispatch()
    const captcha = (value) => {
        if (value) {
            setIsCaptcha(value)
        } else {
            setIsCaptcha(null)
        }
    }
    const defaultValues = {
        email: "",
        password: ""
    }
    const resetform = () => {
        reset({ defaultValues })
        setIsCaptcha('')
    }

    const onSubmit = async input => {

        setLoader(true)
        setMessaLoader("لطفا منتظر بمانید")
        setMessageArr([])

        const datas = {
            email: input.email.toLowerCase(),
            password: input.password,
            grecaptcharesponse: isCaptcha
        }
        try {
            const { data, status } = await deleteUser(datas, match.params.token)
            if (status === 200) {
                resetform()
                setMessage(['کار بر با موفقیت حذف شد'], "success")
                dispatch(getBlog())
                history.replace('/')
            } else if (status === 422) {
                setMessage([data.data.message], 'error')
            }else {
                setMessage(['مشکلی در حذف حساب پیش آمده است'], 'error')
            }

        } catch (ex) {
            let err = []
            if (isEmpty(ex.response.data.data)) {
                ex.response.data.data.forEach(message => {
                    err.push(message.message)
                });
            } else {
                err.push(ex.response.data.message)
            }
            resetform()

            setMessage(err, 'error')
        }
        setLoader(false)
        setMessaLoader("اتصال اینترنت خود را بررسی کنید")
    }
    return (
        
        <main id="main" onClick={() => isCaptcha === '' ? setIsCaptcha('d') : null} >
            <h1 className="title">حذف حساب کاربری</h1>
            <Helmet>
                <title>وبلاگ | حذف حساب کاربری</title>
            </Helmet>
            <form className="loginForm" onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <div className={errors.email && "invalid"}>
                    <input type="email" placeholder="ایمیل خود را وارد کنید" {...register("email", { required: true, minLength: 4, pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ })} />
                </div>
                <div className={errors.password && "invalid"}>
                    <input type="password" placeholder="رمز عبور را وارد کنید" {...register("password", { required: true, minLength: 4 })} />
                </div>

                <div className="g-recaptcha">
                    {isCaptcha !== '' ? <ReCAPTCHA
                        sitekey="6Ld0CkAdAAAAAPOGMLasWDvq-xv9_3x7KO0wtIyj"
                        onChange={captcha}
                        hl="fa"
                    /> : null}

                </div>
                <button type="submit">حذف حساب <i className="fa fa-trash"></i></button>
            </form>
            <Link to="/forget-password" className="center">رمز عبورتان را فراموش کردید؟!</Link>
            </main>

    )
}
export default DeleteUser