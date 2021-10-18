import React, { useState } from 'react'
import { registerUser } from '../../../services/blogServises'
import { MessageError, MessageSuccess } from '../../ui/messages'

const Rejister = () => {
    const [fullname,setFullname] = useState('')
    const [email, setEmail]=useState('')
    const [password,setPassword] = useState('')
    const [repassword,setRepassword]=useState('')

    const [errorRes,setErrorRes] = useState([])

    const reset = ()=>{
        setFullname('')
        setEmail('')
        setPassword('')
        setRepassword('')
    }
    const registerHandler =async e=>{
        e.preventDefault()
        const datas = {
            fullname,
            email,
            password,
            repassword
        }
        
        try {
          const {data} = await registerUser(datas)
          
          console.log(data);
          reset()
        } catch (ex) {
            let err = []
            if(ex.response.data.data){
                ex.response.data.data.forEach(message => {
                    err.push(message.message)
                });
            }else{
                err.push(ex.response.data.message)
                console.log('bb');
            }
            setErrorRes(err)
            console.log(errorRes);
            console.log( ex.response.data);
        }
    }
    return (
        <main id="main">
        <MessageError errors={errorRes}/>
        <MessageSuccess message={errorRes}/>
            <h2 className="title">ثبت نام در سایت</h2>
            <form className="loginForm" onSubmit={(e)=>registerHandler(e)}>
                <input
                    type="text"
                    name="fullname"
                    id="fullname"
                    placeholder="نام و نام خانوادگی خود را وارد کنید"
                    required
                    onChange={(e)=>setFullname(e.target.value)}
                    value={fullname}
                />
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="ایمیل خود را وارد کنید"
                    required
                    onChange={(e)=>setEmail(e.target.value)}
                    value={email}
                />
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="رمز عبور را وارد کنید"
                    required
                    onChange={(e)=>setPassword(e.target.value)}
                    value={password}
                />
                <input
                    type="password"
                    name="repassword"
                    id="repassword"
                    placeholder="تکرار رمز عبور را وارد کنید"
                    required
                    onChange={(e)=>setRepassword(e.target.value)}
                    value={repassword}
                />
                <button type="submit">ثبت نام <i className="fa fa-sign-in"></i></button>
            </form>
        </main>

    )
}

export default Rejister