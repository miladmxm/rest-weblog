import { React } from "react";
const headerBlog = () => {
    return (
        <div class="fixed-top">
            <div class="navbar">
                <div class="container">
                    <h2 class="logo"><a class='text-initial' href="/">Milad MXM</a></h2>
                    <button class="toggle">
                        <span></span>
                    </button>

                    <nav id="navMenu">
                        <ul>
                            <li><a class="active" href="/">خانه</a></li>

                            <li><a href="/dashboard">پنل کاربری</a></li>
                            <li><a href="/users/logout">خروج</a></li>

                            <li>
                                <a class="" href="/users/login">ورود</a>
                            </li>
                            <li>
                                <a href="/users/register">ثبت نام</a >
                            </li>
                            <li>
                                <a class="<%= path == '/contact'? 'active' : ''%>" href="/contact"
                                >تماس با ما</a
                                >
                            </li>
                            <li>
                                <form action="/search" method="POST" class="serchbar">
                                    <input type="serch" name="search" placeholder="جستجو کنید" />
                                    <button class="serchBtn"><i class="fa fa-search"></i></button>
                                </form>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>

    )
}
export default headerBlog