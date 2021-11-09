import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { contact } from "../../../services/blogServises";
import { ContextDash } from "../../context/context";

const Contact = ({ history }) => {

    // const [fullname, setFullname] = useState('')
    // const [email, setEmail] = useState('')
    // const [subject, setSubject] = useState('')
    // const [text, setText] = useState('')
    // const [numCaptcha, setNumCaptcha] = useState('')

    // const { setMessageArr, setMessage,setLoader,setMessaLoader } = useContext(ContextDash)

    // const reset = () => {
    //     setFullname('')
    //     setEmail('')
    //     setSubject('')
    //     setText('')
    //     setNumCaptcha('')
    // }
    // const submitSendContact = async (e) => {
    //     setLoader(true)
    //     setMessaLoader("لطفا منتظر بمانید")
    //     setMessageArr([])
    //     e.preventDefault()
    //     const datas = {
    //         fullname,
    //         email,
    //         subject,
    //         text,
    //         numCaptcha
    //     }

    //     try {
    //         const { data,status } = await contact(datas)
    //         if (status === 200) {
    //             setMessage(['پیام شما با موفقیت ارسال شد'], "success")
    //             history.replace('/')
    //             reset()
    //         } else {
    //             setMessage(["مشکلی در ثبت نام پیش آمده است"], 'error')
    //         }
    //     } catch (ex) {
    //         let err = []
    //         if(ex.response.data.data){
    //             ex.response.data.data.forEach(message => {
    //                 err.push(message.message)
    //             });
    //         }else{
    //             err.push(ex.response.data.message)
    //         }
    //         setMessage(err,'error')
    //     }
    //     setLoader(false)
    //     setMessaLoader("اتصال اینترنت خود را بررسی کنید")
    // }
    // return (
    //     <main id="main">
    //         <h2 className="title">ارسال پیام به ما</h2>
    //         <Helmet>
    //             <title>وبلاک | تماس با ما</title>
    //         </Helmet>
    //         <form className="loginForm" onSubmit={e => submitSendContact(e)}>
    //             <input
    //                 type="text"
    //                 name="fullname"
    //                 id="fullname"
    //                 placeholder="نام و نام خانوادگی خود را وارد کنید"
    //                 required
    //                 value={fullname}
    //                 onChange={e=>setFullname(e.target.value)}
    //             />
    //             <input
    //                 type="email"
    //                 name="email"
    //                 id="email"
    //                 placeholder="ایمیل خود را وارد کنید"
    //                 required
    //                 value={email}
    //                 onChange={e=>setEmail(e.target.value)}
    //             />

    //             <input
    //                 type="text"
    //                 name="subject"
    //                 id="subject"
    //                 placeholder="موضوع پیام خود را وارد کنید"
    //                 required
    //                 value={subject}
    //                 onChange={e=>setSubject(e.target.value)}
    //             />
    //             <textarea name="text" id="mainText" placeholder="متن اصلی" value={text} onChange={e=>setText(e.target.value)}></textarea>
    //             <label className="captchalabel" htmlFor="rememberme">
    //                 <input
    //                     type="text"
    //                     name="numberCaptcha"
    //                     placeholder="کد امنیتی را وارد کنید"
    //                     required
    //                     value={numCaptcha}
    //                     onChange={e=>setNumCaptcha(e.target.value)}
    //                 />
    //                 <img src="http://localhost:4000/captcha.png" alt="captcha" />
    //             </label>
    //             <button type="submit">ارسال <i className="fa fa-send"></i></button>
    //         </form>
    //     </main>

    // )
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const { setMessage, setMessageArr, setLoader, setMessaLoader } = useContext(ContextDash)

    const reset = () => {
        setValue('email', '')
        setValue("password", "")
        setValue("rePassword", "")
        setValue("fullname", "")

    }

    const onSubmit = async input => {

        setLoader(true)
        setMessaLoader("لطفا منتظر بمانید")
        setMessageArr([])
       
        const datas = {
            fullname:input.fullname,
            email:input.email,
            subject:input.subject,
            text:input.text,
            numCaptcha:input.numCaptcha
        }

        try {
            const { status } = await contact(datas)
            if (status === 200) {
                setMessage(['پیام شما با موفقیت ارسال شد'], "success")
                history.replace('/')
                reset()
            } else {
                setMessage(["مشکلی در ثبت نام پیش آمده است"], 'error')
            }
        } catch (ex) {
            let err = []
            if (ex.response.data.data) {
                ex.response.data.data.forEach(message => {
                    err.push(message.message)
                });
            } else {
                err.push(ex.response.data.message)
            }
            setMessage(err, 'error')
        }
        setLoader(false)
        setMessaLoader("اتصال اینترنت خود را بررسی کنید")

    }

    return (
        <main id="main" >
            <Helmet>
                <title>وبلاگ | ثبت نام در سایت</title>
            </Helmet>
            <h2 className="title">ثبت نام در سایت</h2>
            <form className="loginForm" onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <div className={errors.fullname && "invalid"}>
                    <input type="text" placeholder="نام و نام خانوادگی خود را وارد کنید"{...register("fullname", { required: true, minLength: 4, maxLength: 255 })} />
                </div>
                <div className={errors.email && "invalid"}>
                    <input type="email" placeholder="ایمیل خود را وارد کنید" {...register("email", { required: true, minLength: 4 })} />
                </div>
                <div className={errors.subject && "invalid"}>
                    <input type="text" placeholder="موضوع پیام خود را بنویسید" {...register("subject", { required: true, minLength: 4 })} />
                </div>
                <div className={errors.text ? "invalid fontziro" : "fontziro"}>
                    <textarea id="mainText" placeholder="متن اصلی"{...register("text", { required: true, minLength: 4 })}  ></textarea>
                </div>
                <div className={errors.numCaptcha && "invalid"}>
                    <label className="captchalabel" htmlFor="rememberme">
                        <input
                            type="text"
                            placeholder="کد امنیتی را وارد کنید"
                            {...register("numCaptcha", { required: true, minLength: 4 })}
                        />
                        <img src="http://localhost:4000/captcha.png" alt="captcha" />
                    </label>
                </div>
                <button type="submit">ارسال <i className="fa fa-send"></i></button>
            </form>

        </main>
    )

}

export default Contact