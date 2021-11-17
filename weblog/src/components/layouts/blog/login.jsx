import React, { useContext, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { loginUser } from '../../../services/blogServises'
import { Link } from "react-router-dom";
import { ContextDash } from "../../context/context";
import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";
import { addUser } from "../../../action/user";
import { decodedToken } from "../../utils/decodedToken";
import isEmpty from "../../utils/isEmpty";
import { getDashboard } from "../../../action/dashboard";
import { useForm } from "react-hook-form";

const Login = ({ history }) => {
    const { register, handleSubmit,reset, setValue, formState: { errors } } = useForm();
    const { setMessage, setMessageArr, setLoader, setMessaLoader } = useContext(ContextDash)
    const [isCaptcha, setIsCaptcha] = useState(null)
    const [reMember, setReMember] = useState(false)
    const dispatch = useDispatch()

    const captcha = (value) => {
        if (value) {
            setIsCaptcha(value)
        } else {
            setIsCaptcha(null)
        }
    }
    const defaultValues ={
        email:"",
        password:""
    }
    const resetform = () => {
        reset({defaultValues})
        setIsCaptcha('')
        setReMember(false)
    }

    const onSubmit = async input => {
        setLoader(true)
        setMessaLoader("لطفا منتظر بمانید")
        setMessageArr([])
        
        const datas = {
            email: input.email.toLowerCase(),
            password: input.password,
            reMember,
            grecaptcharesponse: isCaptcha
        }
        try {
            const { data, status } = await loginUser(datas)
            
            if (status === 200) {
                const { payload } = decodedToken(data.token)
                resetform()

                localStorage.setItem('token', data.token)
                dispatch(addUser(payload.user))

                dispatch(getDashboard());

                setMessage(['با موفقیت وارد شدید'], "success")
                history.replace('/dashboard')
            } else (
                setMessage(['مشکلی در ورود پیش آمده است'], 'error')
            )

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
            <h1 className="title">ورود به بخش مدیریت</h1>
            <Helmet>
                <title>وبلاگ | ورود به سایت</title>
            </Helmet>
            <form className="loginForm" onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <div className={errors.email && "invalid"}>
                    <input type="email" placeholder="ایمیل خود را وارد کنید" {...register("email", { required: true, minLength: 4,pattern:/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ })} />
                </div>
                <div className={errors.password && "invalid"}>
                    <input type="password" placeholder="رمز عبور را وارد کنید" {...register("password", { required: true, minLength:4 })} />
                </div>
                <div className="remember">
                    <label htmlFor="reMember">مرا به خاطر بسپار</label>
                    <input name="reMember" value={reMember} onChange={e => { setReMember(e.target.checked) }} className="checkedBeautiful" id="reMember" type="checkbox" />
                </div>

                <div className="g-recaptcha">
                    {isCaptcha !== '' ? <ReCAPTCHA
                        sitekey="6Ld9Pb0cAAAAADrqfRhWeHqvXTCN-8YES5r-6qr5"
                        onChange={captcha}
                        hl="fa"
                    /> : null}

                </div>
                <button type="submit">ورود <i className="fa fa-sign-in"></i></button>
            </form>
            <Link to="/forget-password" className="center">رمز عبورتان را فراموش کردید؟!</Link>
            </main>
   
    );
}
export default React.memo(Login)

// secret key
// 6Ld9Pb0cAAAAAAZR9Y_zLmIqWDBBG8trWe8q4T-c