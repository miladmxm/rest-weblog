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

const Login = ({ history }) => {

    const [isCaptcha, setIsCaptcha] = useState(null)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [reMember, setReMember] = useState(false)
    const { setMessage, setMessageArr,setLoader,setMessaLoader } = useContext(ContextDash)
    const dispatch = useDispatch()
    const captcha = (value) => {
        if (value) {
            setIsCaptcha(value)
        } else {
            setIsCaptcha(null)
        }
    }
    const reset = () => {
        setEmail('')
        setPassword("")
        setIsCaptcha('')
        setReMember(false)
    }
    const loginHandler = async (e) => {
        setLoader(true)
        setMessaLoader("لطفا منتظر بمانید")
        setMessageArr([])
        e.preventDefault()
        const datas = {
            email,
            password,
            reMember,
            grecaptcharesponse: isCaptcha
        }
        try {
            const { data, status } = await loginUser(datas)
            if (status === 200) {
                reset()

                console.log(data.token);
                const { payload } = decodedToken(data.token)
                dispatch(addUser(payload.user))
                localStorage.setItem('token', data.token)

                setMessage(['با موفقیت وارد شدید'], "success")
                history.replace('/dashboard')
            } else (
               setMessage(['مشکلی در ورود پیش آمده است'], 'error')
            )

        } catch (ex) {
            console.table(ex);
            let err = []
            console.log(ex);
            if (isEmpty(ex.response.data.data)) {
                ex.response.data.data.forEach(message => {
                    err.push(message.message)
                });
            } else {
                err.push(ex.response.data.message)
            }
            reset()

            setMessage(err, 'error')
        }
        setLoader(false)
        setMessaLoader("اتصال اینترنت خود را بررسی کنید")
    }
    return (
        <main id="main" onClick={() => isCaptcha === '' ? setIsCaptcha('d') : null}>
            <h2 className="title">ورود به بخش مدیریت</h2>
            <Helmet>
                <title>وبلاگ | ورود به سایت</title>
            </Helmet>
            <form className="loginForm" onSubmit={e => loginHandler(e)}>
                <input type="email" name="email" id="email" placeholder="ایمیل خود را وارد کنید" required value={email} onChange={e => setEmail(e.target.value)} />
                <input type="password" name="password" id="password" placeholder="رمز عبور را وارد کنید" required value={password} onChange={e => setPassword(e.target.value)} />
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
            <Link to="/forget-pass" className="center">رمز عبورتان را فراموش کردید؟!</Link>
        </main>

    )
}
export default React.memo(Login)

// secret key
// 6Ld9Pb0cAAAAAAZR9Y_zLmIqWDBBG8trWe8q4T-c