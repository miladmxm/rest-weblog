import React from "react";

const Contact = () => {
    return (
        <main id="main">
            <h2 className="title">ارسال پیام به ما</h2>
            {/* message validate */}
            <form className="loginForm" action="/contact" method="POST">
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
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="موضوع پیام خود را وارد کنید"
                    required
                />
                <textarea name="text" id="mainText" placeholder="متن اصلی"></textarea>
                <label className="captchalabel" for="rememberme">
                    <input
                        type="text"
                        name="numberCaptcha"
                        placeholder="کد امنیتی را وارد کنید"
                    />
                    <img src="/img/captcha.png" alt="captcha" />
                </label>
                <button type="submit">ارسال <i className="fa fa-send"></i></button>
            </form>
        </main>

    )
}

export default Contact