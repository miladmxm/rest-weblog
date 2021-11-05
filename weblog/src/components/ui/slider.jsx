import React from 'react';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
const Slider = ({ responsive, autoPlay = true, showDots = true, arrows = false, children }) => {
    const responsived = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: responsive[0]
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: responsive[1]
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: responsive[2]
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: responsive[3]
        }
    }
    return (
        <div style={{ direction: 'ltr' }} >
            <Carousel responsive={responsived}
                autoPlay={autoPlay}
                autoPlaySpeed={5000}
                showDots={showDots}
                slidesToSlide={1}
                arrows={arrows}
                infinite={true}
            >{children}</Carousel></div>

    )
}
export default Slider;