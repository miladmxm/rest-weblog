import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Link } from "react-router-dom";
const Login = () => {
    const captcha = (value) => {
        console.log(value);
    }
    return (
        <main id="main">
            <h2 class="title">ورود به بخش مدیریت</h2>
            {/* message for validate */}
            <form class="loginForm" action="/users/login" method="POST">
                <input type="email" name="email" id="email" placeholder="ایمیل خود را وارد کنید" required />
                <input type="password" name="password" id="password" placeholder="رمز عبور را وارد کنید" required />
                <div class="remember">
                    <label for="reMember">مرا به خاطر بسپار</label>
                    <input name="reMember" class="checkedBeautiful" id="reMember" type="checkbox" />
                </div>
                <div className="g-recaptcha">
                    <ReCAPTCHA
                        sitekey="6Ld9Pb0cAAAAADrqfRhWeHqvXTCN-8YES5r-6qr5"
                        onChange={captcha}
                        hl="fa"
                    />
                </div>
                <button type="submit">ورود <i class="fa fa-sign-in"></i></button>
            </form>
            <Link href="/users/forget-pass" class="center">رمز عبورتان را فراموش کردید؟!</Link>
        </main>

    )
}
export default Login

// secret key
// 6Ld9Pb0cAAAAAAZR9Y_zLmIqWDBBG8trWe8q4T-c