import React from "react";
const Single = () => {
    return (
        <>
            <div style={{ marginTop: "60px" }}></div>
            <article className="postCart w-100">
                <img src="/img/1.jpg" alt="" />
                <div className ="main">
                <h2>lorem ipsom </h2>
                <div className ="bodyPost">
                Aute laborum duis nostrud incididunt.Consequat mollit ad est dolor aliquip consequat.Fugiat culpa nisi quis amet culpa cupidatat nisi.

                Non esse non ullamco ex eiusmod excepteur adipisicing ut.Consectetur nostrud eu adipisicing et ad Lorem consequat labore ex mollit anim in et quis.Enim ea voluptate eu nulla.

                Occaecat cupidatat laboris incididunt magna voluptate voluptate ea irure sint adipisicing aliquip duis exercitation ipsum.Consequat voluptate qui labore non duis est.Nostrud eu culpa nostrud officia aliquip sunt consectetur dolor dolore aute nostrud in adipisicing.Irure laborum deserunt in tempor incididunt anim ipsum officia laboris adipisicing anim.Culpa amet ea dolor dolore.Consequat dolore occaecat mollit voluptate aute occaecat mollit consectetur sit.Nisi aliquip in sint dolore pariatur ad.

                Proident pariatur minim ullamco tempor magna dolor.Proident nulla anim est velit esse laboris sit quis sunt proident.Aliquip ut exercitation irure amet irure consequat adipisicing labore cupidatat officia dolor officia velit mollit.Incididunt tempor culpa ad officia proident velit dolore ea aute in eiusmod.Id deserunt laborum anim tempor consequat ea excepteur sit.Fugiat in tempor cillum aliquip.Et adipisicing aliquip culpa labore aute esse.
                </div>
                </div>
                <footer>
                <span>تاریخ انتشار: 15 دی 1400 </span>
                <span>نویسنده: میلاد حسیبی </span>
                </footer>
            </article>

            <div className="postCart">
                <form className="Comments" action="#">
                    <input type="email" name="email" id="email" placeholder="ایمیل شما" />
                    <textarea name="Comment" id="Comment" placeholder="نظر شما در رابطه با این پست"></textarea>
                    <button type ="button">ارسال نظر</button>
                </form>
            </div>
        </>
    )
}
export default Single