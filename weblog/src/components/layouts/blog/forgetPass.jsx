import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { forgetPass } from "../../../services/blogServises";
import { ContextDash } from "../../context/context";

const ForgetPass = ({history}) => {
    const [email, setEmail] = useState('')
    const { setMessage, setMessageArr, setLoader, setMessaLoader } = useContext(ContextDash)

    const forgetHandler = async (e) => {
        setLoader(true)
        setMessaLoader("لطفا منتظر بمانید")
        setMessageArr([])
        e.preventDefault()

        const datas = {
            email
        }
        try {
            const {data, status } = await forgetPass(datas)
            if (status === 200) {
                setMessage([data.message], "success")
                setEmail('')
                history.replace('/')
            }
        } catch (ex) {
            let err = []
            console.log(ex);
            if (ex.status != 200) {
                err.push(ex.response.data.message)
            }

            setEmail('')

            setMessage(err, 'error')
        }
        setLoader(false)
        setMessaLoader("اتصال اینترنت خود را بررسی کنید")
    }
    return (
        <main id="main">
            <h2 className="title">فراموشی رمز عبور</h2>
            <Helmet>
                <title>وبلاگ | فراموشی رمز عبور</title>
            </Helmet>
            <form className="loginForm" onSubmit={e => forgetHandler(e)}>
                <input type="email" name="email" id="email" placeholder="ایمیل خود را وارد کنید" required value={email} onChange={e => setEmail(e.target.value)} />
                <button type="submit">ارسال ایمیل <i className="fa fa-envelope"></i></button>
            </form>

        </main>

    )
}
export default ForgetPass