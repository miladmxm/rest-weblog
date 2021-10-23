import React, { useContext, useState } from 'react'
import { Helmet } from 'react-helmet'
import { registerUser } from '../../../services/blogServises'
import { ContextDash } from '../../context/context'

const Rejister = ({ history }) => {
    const [fullname, setFullname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repassword, setRepassword] = useState('')
    const { setMessage, setMessageArr,setLoader,setMessaLoader } = useContext(ContextDash)
    const reset = () => {
        setFullname('')
        setEmail('')
        setPassword('')
        setRepassword('')
    }
    const registerHandler = async e => {
        setMessageArr([])
        setLoader(true)
        setMessaLoader("لطفا منتظر بمانید")
        e.preventDefault()
        const datas = {
            fullname,
            email,
            password,
            repassword
        }

        try {
            const { data, status } = await registerUser(datas)
            if (status === 201) {
                setMessage(['ثبت نام شما موفقیت آمیز بود'], "success")
                history.replace('/login')
                reset()
            } else {
                setMessage(["مشکلی در ثبت نام پیش آمده است"], 'error')
            }
        } catch (ex) {
            let err = []
            if (ex.statusCode === 500) {
                err.push(ex.data)
                console.log('sala');
            } else {

                if (ex.response.data.data) {
                    ex.response.data.data.forEach(message => {
                        err.push(message.message)
                    });
                } else {
                    err.push(ex.response.data.message)
                }
            }
            setMessage(err, 'error')
        }
        setLoader(false)
        setMessaLoader("اتصال اینترنت خود را بررسی کنید")
    }
    return (
        <main id="main">
            <Helmet>
                <title>وبلاگ | ثبت نام در سایت</title>
            </Helmet>
            <h2 className="title">ثبت نام در سایت</h2>
            <form className="loginForm" onSubmit={(e) => registerHandler(e)}>
                <input
                    type="text"
                    name="fullname"
                    id="fullname"
                    placeholder="نام و نام خانوادگی خود را وارد کنید"
                    required
                    onChange={(e) => setFullname(e.target.value)}
                    value={fullname}
                />
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="ایمیل خود را وارد کنید"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="رمز عبور را وارد کنید"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
                <input
                    type="password"
                    name="repassword"
                    id="repassword"
                    placeholder="تکرار رمز عبور را وارد کنید"
                    required
                    onChange={(e) => setRepassword(e.target.value)}
                    value={repassword}
                />
                <button type="submit">ثبت نام <i className="fa fa-sign-in"></i></button>
            </form>
        </main>

    )
}

export default Rejister