import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { localhost } from "../../../../services/config.json"
import {
    EmailIcon,
    EmailShareButton,
    FacebookIcon,
    FacebookShareButton,
    TelegramIcon,
    TelegramShareButton,
    TwitterIcon,
    TwitterShareButton,
    WhatsappIcon,
    WhatsappShareButton,
} from "react-share";
import { Link } from "react-router-dom";
import Slider from "../../../ui/slider";
import { findeByCategory } from "../../../utils/findPost";

const SideBar = ({ user_id, post, edit }) => {
    const mainUser = useSelector(state => state.userHandler)
    const [divice, setDivice] = useState('web')


    const [show, setShow] = useState(false)

    const drop = useRef(null)
    const posts = findeByCategory(post.category, useSelector(state => state.getBlog))

    const togge = () => {
        setShow(!show)
        if (!show) {
            drop.current.style.height = drop.current.scrollHeight + 'px'
        } else {

            drop.current.style.height = "124px"
        }
    }
    useEffect(() => {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            setDivice('api')
        } else {
            setDivice('web')
        }
    }, [])
    return (
        <aside className="asideSinglePost w-30">
            <div className="container-aside">
                <div className="w-70">
                    <h3 className="m3">اشتراک گذاری در <i className='fa fa-share-alt'></i></h3>
                    <div className="display_flex">
                        <EmailShareButton
                            url={`http://localhost:3000/single/${user_id}`}
                        >
                            <EmailIcon size={40} round={true} />
                        </EmailShareButton>
                        <FacebookShareButton
                            url={`http://localhost:3000/single/${user_id}`}
                        >
                            <FacebookIcon size={40} round={true} />
                        </FacebookShareButton>
                        <TelegramShareButton
                            url={`http://localhost:3000/single/${user_id}`}
                        >
                            <TelegramIcon size={40} round={true} />
                        </TelegramShareButton>
                        <WhatsappShareButton
                            url={`http://localhost:3000/single/${user_id}`}
                        >
                            <WhatsappIcon size={40} round={true} />
                        </WhatsappShareButton>
                        <TwitterShareButton
                            url={`http://localhost:3000/single/${user_id}`}
                        >
                            <TwitterIcon size={40} round={true} />
                        </TwitterShareButton>
                    </div>
                </div>
                <span className="br" />
                <h3 className="m3">درباره نویسنده <i className="fa fa-pencil"></i></h3>
                {edit ? <Link className="editLink" to={mainUser.dadashami === "dada" ? `/dashboard/setting-user/${post.user._id}` : `/dashboard/setting/${post.user._id}`}><i className="fa fa-edit"></i> ویرایش اطلاعات شخصی</Link> : null}
                {post.user ? <>
                    <div className="dropBox" style={{ height: "124px", padding: '0' }} ref={drop}>
                        <div className="writer">
                            <div className="row" onClick={togge} >
                                <img className="profileImg" alt="تصویری برای پروفایل" src={`${localhost}/uploads/${post.user.profileImg === "default" ? 'user.png' : `image/${post.user.profileImg}`}`} />
                                <div className="column userNameInWriter">
                                    <h4>{post.user.fullname}</h4>
                                    <small>{post.user.skill}</small>
                                </div>
                            </div>
                            <div className="column">
                                <p>
                                    {post.user.bio}
                                </p>
                            </div>
                            {
                                post.user.whatsapp || post.user.emailAddress || post.user.phoneNumber || post.user.instagram ?
                                    <div className="column">
                                        <h4 className="h3">
                                            راه های ارتباط با من
                                        </h4>
                                        <div className="mysocial">
                                            {post.user.whatsapp ? <a target="_blank" href={`https://${divice}.whatsapp.com/send?phone=98${post.user.whatsapp}`}><WhatsappIcon size={40} round={true} /></a> : null}
                                            {post.user.emailAddress ? <a target="_blank" href={`mailto:${post.user.emailAddress}`}><EmailIcon size={40} round={true} /></a> : null}
                                            {post.user.phoneNumber ? <a target="_blank" className="phone" href={`tel:0${post.user.phoneNumber}`}><i className="fa fa-phone"></i></a> : null}
                                            {post.user.instagram ? <a target="_blank" className="insta" href={`https://www.instagram.com/${post.user.instagram}/`}><i className="fa fa-instagram"></i></a> : null}
                                        </div>
                                    </div> : null
                            }
                        </div>
                    </div>
                </> : null}

                <span className="br" />
                <h3 className="m3">پست های مرتبط</h3>
                <Slider responsive={[4, 3, 3, 2]}>
                    {posts.map(pos => {
                        return (
                            <Link key={pos._id} to={`/single/${pos._id}`} className="slidItem row">
                                <img className="imgSlider" src={`${localhost}/uploads/thumbnails/${pos.thumbnail}`} />
                                <small>{pos.title}</small>
                            </Link>
                        )
                    })}
                </Slider>
            </div>
        </aside>
    )
}
export default React.memo(SideBar)