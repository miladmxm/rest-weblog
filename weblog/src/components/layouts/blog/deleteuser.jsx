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
    const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm();
    // const [isCaptcha, setIsCaptcha] = useState(null)
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')

    // const { setMessage, setMessageArr, setLoader, setMessaLoader } = useContext(ContextDash)

    // const dispatch = useDispatch()
    // const captcha = (value) => {
    //     if (value) {
    //         setIsCaptcha(value)
    //     } else {
    //         setIsCaptcha(null)
    //     }
    // }
    // const reset = () => {
    //     setEmail('')
    //     setPassword("")
    //     setIsCaptcha('')
    // }
    // const loginHandler = async (e) => {
    // setLoader(true)
    // setMessaLoader("لطفا منتظر بمانید")
    // setMessageArr([])
    // e.preventDefault()
    // const datas = {
    //     email,
    //     password,
    //     grecaptcharesponse: isCaptcha
    // }
    // try {
    //     const { data, status } = await deleteUser(datas, match.params.token)
    //     console.log(status);
    //     if (status === 200) {
    //         reset()                
    //         setMessage(['کار بر با موفقیت حذف شد'], "success")
    //         dispatch(getBlog())
    //         history.replace('/')
    //     } else (
    //        setMessage(['مشکلی در حذف حساب پیش آمده است'], 'error')
    //     )

    // } catch (ex) {
    //     let err = []
    //     if (isEmpty(ex.response.data.data)) {
    //         ex.response.data.data.forEach(message => {
    //             err.push(message.message)
    //         });
    //     } else {
    //         err.push(ex.response.data.message)
    //     }
    //     reset()

    //     setMessage(err, 'error')
    // }
    // setLoader(false)
    // setMessaLoader("اتصال اینترنت خود را بررسی کنید")
    // }
    // return (
    //     <main id="main" onClick={() => isCaptcha === '' ? setIsCaptcha('d') : null}>
    // <h2 className="title">حذف حساب کاربری</h2>
    // <Helmet>
    //     <title>وبلاگ | حذف حساب کاربری</title>
    // </Helmet>
    //         <form className="loginForm" onSubmit={e => loginHandler(e)}>
    //             <input type="email" name="email" id="email" placeholder="ایمیل خود را وارد کنید" required value={email} onChange={e => setEmail(e.target.value)} />
    //             <input type="password" name="password" id="password" placeholder="رمز عبور را وارد کنید" required value={password} onChange={e => setPassword(e.target.value)} />
    //             <div className="g-recaptcha">
    //                 {isCaptcha !== '' ? <ReCAPTCHA
    //                     sitekey="6Ld9Pb0cAAAAADrqfRhWeHqvXTCN-8YES5r-6qr5"
    //                     onChange={captcha}
    //                     hl="fa"
    //                 /> : null}

    //             </div>
    //             <button type="submit">حذف حساب <i className="fa fa-trash"></i></button>
    //         </form>
    //         <Link to="/forget-password" className="center">رمز عبورتان را فراموش کردید؟!</Link>
    //     </main>

    // )
    const { setMessage, setMessageArr, setLoader, setMessaLoader } = useContext(ContextDash)
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
            email: input.email,
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
            <h2 className="title">حذف حساب کاربری</h2>
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
                        sitekey="6Ld9Pb0cAAAAADrqfRhWeHqvXTCN-8YES5r-6qr5"
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