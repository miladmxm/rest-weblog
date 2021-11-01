import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { resetPass } from "../../../services/blogServises";
import { ContextDash } from "../../context/context";
import { decodedToken } from "../../utils/decodedToken";

const ResetPass = ({ history, match }) => {
    const [password, setPassword] = useState('')
    const [repassword, setRepassword] = useState('')
    const { setMessage, setMessageArr, setLoader, setMessaLoader } = useContext(ContextDash)
    const token = match.params.token


    useEffect(() => {
        if (!token || token.length < 15 || !decodedToken(token)) {
            
            history.replace('/')
        }
    }, [])

    const reset = () => {
        setPassword('')
        setRepassword('')
    }

    const resetHandler = async (e) => {
        setLoader(true)
        setMessaLoader("لطفا منتظر بمانید")
        setMessageArr([])
        e.preventDefault()

        const datas = {
            password,
            repassword
        }
        try {
            const { data, status } = await resetPass(datas, token)
            if (status === 200) {
                setMessage([data.message], "success")
                reset()
                history.replace('/')
            }
        } catch (ex) {
            let err = []
            console.log(ex);
            if (ex.status != 200) {
                err.push(ex.response.data.message)
            }

            reset()

            setMessage(err, 'error')
        }
        setLoader(false)
        setMessaLoader("اتصال اینترنت خود را بررسی کنید")
    }
    return (
        <main id="main">
            <h2 className="title">تغییر رمز عبور</h2>
            <Helmet>
                <title>وبلاگ | تغییر رمز عبور</title>
            </Helmet>
            <form className="loginForm" onSubmit={e => resetHandler(e)}>
                <input type="password" name="password" id="password" placeholder="رمز عبور جدید خود را وارد کنید" required value={password} onChange={e => setPassword(e.target.value)} />
                <input type="password" name="repassword" id="repassword" placeholder="تکرار رمز عبور خود را وارد کنید" required value={repassword} onChange={e => setRepassword(e.target.value)} />
                <button type="submit">تغییر رمز عبور <i className="fa fa-key"></i></button>
            </form>

        </main>

    )
}
export default ResetPass