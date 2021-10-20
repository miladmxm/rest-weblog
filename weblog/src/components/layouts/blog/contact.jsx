import React, { useContext, useState } from "react";
import { contact } from "../../../services/blogServises";
import { ContextDash } from "../../context/context";

const Contact = ({history}) => {

    const [fullname, setFullname] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [text, setText] = useState('')
    const [numCaptcha, setNumCaptcha] = useState('')

    const { setMessageArr, setMessage } = useContext(ContextDash)
    
    const reset = () => {
        setFullname('')
        setEmail('')
        setSubject('')
        setText('')
        setNumCaptcha('')
    }
    const submitSendContact =async (e) => {
        setMessageArr([])
        e.preventDefault()
        const datas = {
            fullname,
            email,
            subject,
            text,
            numCaptcha
        }
        
        try {
            const { data } = await contact(datas)
            console.log(data);
            setMessage(['پیام شما با موفقیت ارسال شد'], "success")
            history.replace('/')
            reset()
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
            <h2 className="title">ارسال پیام به ما</h2>
            {/* message validate */}
            <form className="loginForm" onSubmit={e=>submitSendContact(e)}>
                <input
                    type="text"
                    name="fullname"
                    id="fullname"
                    placeholder="نام و نام خانوادگی خود را وارد کنید"
                    required
                    value={fullname}
                    onChange={e=>setFullname(e.target.value)}
                />
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="ایمیل خود را وارد کنید"
                    required
                    value={email}
                    onChange={e=>setEmail(e.target.value)}
                />

                <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="موضوع پیام خود را وارد کنید"
                    required
                    value={subject}
                    onChange={e=>setSubject(e.target.value)}
                />
                <textarea name="text" id="mainText" placeholder="متن اصلی" value={text} onChange={e=>setText(e.target.value)}></textarea>
                <label className="captchalabel" htmlFor="rememberme">
                    <input
                        type="text"
                        name="numberCaptcha"
                        placeholder="کد امنیتی را وارد کنید"
                        required
                        value={numCaptcha}
                        onChange={e=>setNumCaptcha(e.target.value)}
                    />
                    <img src="/img/captcha.png" alt="captcha" />
                </label>
                <button type="submit">ارسال <i className="fa fa-send"></i></button>
            </form>
        </main>

    )
}

export default Contact