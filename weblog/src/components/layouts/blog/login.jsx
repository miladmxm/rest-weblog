import React, { useContext, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { loginUser } from '../../../services/blogServises'
import { Link } from "react-router-dom";
import { ContextDash } from "../../context/context";
const Login = () => {
    const [isCaptcha, setIsCaptcha] = useState(null)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {setMessage,setMessageArr} = useContext(ContextDash)
    const captcha = (value) => {
        if (value) {
            setIsCaptcha(value)
        } else {
            setIsCaptcha(null)
        }
    }

    const loginHandler = async (e) => {
        setMessageArr([])
        e.preventDefault()
        const datas = {
            email,
            password,
            grecaptcharesponse:isCaptcha
        }
        try {
            const data = await loginUser(datas)
            console.log(data);
        } catch (ex) {
            let err = []
            if(ex.response.data.data){
                ex.response.data.data.forEach(message => {
                    err.push(message.message)
                });
            }else{
                err.push(ex.response.data.message)
            }
            setMessage(err,'error')
        }
    }
    return (
        <main id="main">
            <h2 className="title">ورود به بخش مدیریت</h2>
            {/* message for validate */}
            <form className="loginForm" onSubmit={e=>loginHandler(e)}>
                <input type="email" name="email" id="email" placeholder="ایمیل خود را وارد کنید" required value={email} onChange={e=>setEmail(e.target.value)} />
                <input type="password" name="password" id="password" placeholder="رمز عبور را وارد کنید" required value={password} onChange={e=>setPassword(e.target.value)} />
                <div className="remember">
                    <label htmlFor="reMember">مرا به خاطر بسپار</label>
                    <input name="reMember" className="checkedBeautiful" id="reMember" type="checkbox" />
                </div>
                <div className="g-recaptcha">
                    <ReCAPTCHA
                        sitekey="6Ld9Pb0cAAAAADrqfRhWeHqvXTCN-8YES5r-6qr5"
                        onChange={captcha}
                        hl="fa"
                    />
                </div>
                <button type="submit">ورود <i className="fa fa-sign-in"></i></button>
            </form>
            <Link to="/forget-pass" className="center">رمز عبورتان را فراموش کردید؟!</Link>
        </main>

    )
}
export default Login

// secret key
// 6Ld9Pb0cAAAAAAZR9Y_zLmIqWDBBG8trWe8q4T-c