import React from 'react'

const Rejister = () => {
    return (
        <main id="main">
            {/* message */}
            <h2 className="title">ثبت نام در سایت</h2>
            <form className="loginForm">
                <input
                    type="text"
                    name="fullname"
                    id="fullname"
                    placeholder="نام و نام خانوادگی خود را وارد کنید"
                    required
                />
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="ایمیل خود را وارد کنید"
                    required
                />
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="رمز عبور را وارد کنید"
                    required
                />
                <input
                    type="password"
                    name="repassword"
                    id="repassword"
                    placeholder="تکرار رمز عبور را وارد کنید"
                    required
                />
                <button type="submit">ثبت نام <i className="fa fa-sign-in"></i></button>
            </form>
        </main>

    )
}

export default Rejister