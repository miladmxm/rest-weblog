import React from "react";
import ImageUploaded from "./singleImage";

const ImgShow = ({numberOfShow = 12}) => {
    const img = [
        'http://miladmxm.ir/uploads/thumbnails/2021-9-9_20-45-6_f0994c29-d697-4ed3-acd6-0cce8bfa5cc0.jpg',
        'http://miladmxm.ir/uploads/thumbnails/2021-9-9_20-45-6_%D8%A7%D8%B3%D9%84%D8%A7%DB%8C%D8%AF%DB%8C_06.jpg',
        'http://miladmxm.ir/uploads/thumbnails/2021-9-5_13-26-21_4.jpg',
        'http://miladmxm.ir/uploads/thumbnails/2021-9-5_16-52-49_%D8%AF%D9%86%D8%AF%D8%A7%D9%86%D9%BE%D8%B2%D8%B4%DA%A9%DB%8C-%D8%A7%DB%8C%D8%B1%D8%A7%D9%86%D9%85%D9%87%D8%B1-5-min.png',
        'http://miladmxm.ir/uploads/thumbnails/2021-9-5_13-35-28_Screenshot%20(136).jpg',
        'http://miladmxm.ir/uploads/thumbnails/2021-9-5_13-26-21_4.jpg',
        'http://miladmxm.ir/uploads/thumbnails/2021-9-9_20-45-6_f0994c29-d697-4ed3-acd6-0cce8bfa5cc0.jpg',
        'http://miladmxm.ir/uploads/thumbnails/2021-9-9_20-45-6_%D8%A7%D8%B3%D9%84%D8%A7%DB%8C%D8%AF%DB%8C_06.jpg',
        'http://miladmxm.ir/uploads/thumbnails/2021-9-5_13-35-28_Screenshot%20(136).jpg',
        'http://miladmxm.ir/uploads/thumbnails/2021-9-5_16-52-49_%D8%AF%D9%86%D8%AF%D8%A7%D9%86%D9%BE%D8%B2%D8%B4%DA%A9%DB%8C-%D8%A7%DB%8C%D8%B1%D8%A7%D9%86%D9%85%D9%87%D8%B1-5-min.png',
        'http://miladmxm.ir/uploads/thumbnails/2021-9-5_13-35-28_Screenshot%20(136).jpg',
        'http://miladmxm.ir/uploads/thumbnails/2021-9-5_13-26-21_4.jpg',
        'http://miladmxm.ir/uploads/thumbnails/2021-9-9_20-45-6_f0994c29-d697-4ed3-acd6-0cce8bfa5cc0.jpg',
        'http://miladmxm.ir/uploads/thumbnails/2021-9-9_20-45-6_%D8%A7%D8%B3%D9%84%D8%A7%DB%8C%D8%AF%DB%8C_06.jpg',
        'http://miladmxm.ir/uploads/thumbnails/2021-9-5_13-26-21_4.jpg',
        'http://miladmxm.ir/uploads/thumbnails/2021-9-5_16-52-49_%D8%AF%D9%86%D8%AF%D8%A7%D9%86%D9%BE%D8%B2%D8%B4%DA%A9%DB%8C-%D8%A7%DB%8C%D8%B1%D8%A7%D9%86%D9%85%D9%87%D8%B1-5-min.png',
        'http://miladmxm.ir/uploads/thumbnails/2021-9-5_13-35-28_Screenshot%20(136).jpg',
        'http://miladmxm.ir/uploads/thumbnails/2021-9-5_13-26-21_4.jpg',
        'http://miladmxm.ir/uploads/thumbnails/2021-9-9_20-45-6_f0994c29-d697-4ed3-acd6-0cce8bfa5cc0.jpg',
        'http://miladmxm.ir/uploads/thumbnails/2021-9-9_20-45-6_%D8%A7%D8%B3%D9%84%D8%A7%DB%8C%D8%AF%DB%8C_06.jpg',
        'http://miladmxm.ir/uploads/thumbnails/2021-9-5_13-35-28_Screenshot%20(136).jpg',
        'http://miladmxm.ir/uploads/thumbnails/2021-9-5_16-52-49_%D8%AF%D9%86%D8%AF%D8%A7%D9%86%D9%BE%D8%B2%D8%B4%DA%A9%DB%8C-%D8%A7%DB%8C%D8%B1%D8%A7%D9%86%D9%85%D9%87%D8%B1-5-min.png',
        'http://miladmxm.ir/uploads/thumbnails/2021-9-5_13-35-28_Screenshot%20(136).jpg',
        'http://miladmxm.ir/uploads/thumbnails/2021-9-5_13-26-21_4.jpg'
    ]


    const imgshow= []

    let cuont;
    if(img.length == 0){
        return(
            <h2>تصویری برای نمایش وجود ندارد</h2>
        )
    }else if(numberOfShow >= img.length){
        cuont = img.length
    }else{
        cuont = numberOfShow
    }
    for(let i = 0; i < cuont;i++){
        imgshow.push(img[i])
    }
    return(
        <div className="imgUploadGroup">
            {imgshow.map((src,index)=>{
                return <ImageUploaded url={src} key={index} />
            })}
        </div>
    )
    
}

export default ImgShow