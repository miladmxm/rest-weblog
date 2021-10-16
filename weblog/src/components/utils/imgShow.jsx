import React from "react";
import ImageUploaded from "./singleImage";

const ImgShow = ({numberOfShow = 42}) => {
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
        'http://miladmxm.ir/uploads/thumbnails/2021-9-5_13-26-21_4.jpg',
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABEVBMVEX////c3Nzd3d1Li/VMi/VMjPXv7+/e3t5NjPVPjvVQjvVSj/VKivRPjfVSkPVOjfVRj/VTkPXf399IV7pmfoypw/lAhfT18+/l5eVwhpRLdttfeYluhJNYk/WosbfAxcnl4tvX3/B6j5vp6++Sn6jf5PCElZ85g/SuxPK6zPFCUrk6TLj2+f7P2vB+p/SYt/NkmPSSs/OJrfM0R7fk7P3G1PG0yPJynvBpf4f59u6krrW5v8OrwvLP0dPAy+KErPfq8f6zw+bI0OHB0fGjuuiuwOaSsOtYgLVTiN5gg6/P1N9aj+hpjcFgj91ed4BSb4CVnNK3utKorM6Yncp2f8NncsBZZb2FjcyQl8lgbMCus9wzKV4aAAAQM0lEQVR4nN3dC3faRhoGYEAIARksQ2GE1+AbxortYDCJoSR2nDZpd5vdNtttm273//+QHV2AmdFcpUFy8p3T9hzHaXnyvZqr0pRKm3rVe5wN28q1h9UzrPaxasYFeqXia9EG7r66T0/otovmlSZtS0enK2zCVwUDe1DXpyksOqa3QB+oJ3SHhQJ7aYB6wqb/rkDgJEVEtYXgvkBhKp+usD4rDrjQHkXTCIuMqcYkn0UIFkUBX6UaZvSF9rIo4b2bj7DpvyhIONdaqrGBSkJ4WZBwZriFXGFhMR3u5SRsFBXTXQ6lpLComKYUKj2GpNC6+fqETULY8L9YodJjiITw7gsSclvIH2gaDWv+NQj5jyEq+IUKuS1MCguJaSqhfkhDoXX7tQtd8KUI1YCJkKKYTr4M4V5qIZh+VcJESFFM3S9CmKaFsbBRxMlwPsIY2CjiZFhbmKWFDXfv6Qv3MgmLiKmmUASUh7SQmOoJ0wExYQEXGDkLG/mfDGsJ1YGckKKY5n6BoSMUAtVa2LBzv8BQF+7RpdpCQpj/kZuyUAJUbGGjBfO+wFAVagFFQivvk2E1YcKnAaSErbxjqiRMAlO3sNXK+2RYQcjwZWhh7jGVClk+MVDcQhTTJyVk+migVgtRTN/nKxTcPbF5GYCREDzmLNxjG3k8GVDaQtTE/o6rRgujUsExfBrAjfC7jlPppPjkHaVynEoZQw6FHAWgfgtb1s2J4zgpiGpCRHSccielMAtwI3Rh+CG0iYrA8F+OjLUUwqRPDGS3MIppCqKecE3UEcqBSi1EMZ2fOCmImsKYqC5k+FICWy6IhHpEVSBG9DSELJ8EyBe24NtOJSw1oiKIUcpCpi89sAVuTyoaRNWexYX+tVhOVYRsnwwoEtbdtVCJqC9cEx0VIZvXtC0AAITob5btarYQzRdvnTXR2YmwsnkSJUKODsDZvHd5Nzk9ndy9fz5d2hC4QiApdF3w46aJCsT0wkqtNHym+/DZcDi9q628oGq1WvhPb7y4gaCuCERCu70VyolphBGx0kfCqFQevKB9AExPVyGNLPSlyyW01DKKCn7vbImyZzG90OlshErVBO0FQ7dGrk4foa3UQjKm0i5mEDpaQssW+MJajZewpQJ07SEulHQxJ2ET3tbEvtD43rbEwEjowo+OMjEfod2erKS+IKu1GyhvIYrpB6KJQmIuQnCj0MC4jc+hK22ha89IoYiYhxD2lBoYt3FiSYGJmIqIOQjhQgMYdBFIMsqIqYC4eyF8r5rQCHgJ5S107SUt5BJ3LoSXesCFChDFtOwoEncr3N+H96yIBmu10Xg8qtErnNW9GtAFP3RoIYeYTbgv1KGy5kkgwl3ezmBYzZveBEOuevhkIRJayZhyiBmFQbFtYTWGiYh63vslBFa8m2ihncZ+bxR/12qqCnTrfjKmTKIMqCIUFDylhau7IaT2Si6A03C+1AC6dciIKYu4WyHoUUBvtIQNejuPCjQnXm01FwDpFtbBDSOmDOJOhYmMenfAZviCPqJVgQYQCeuQkdIkUQrMJKRnQrQiY/uC1TYYAi1gHX7HiilN3KnQnZHjKJoJuD5Urh6QF1OSKAdmEcI7ooXepRAoWG7TwEhoQ44QJ+5U2BgSLfROUwOZLeTHFCMqADMIrefkU/iMPlDj+FSBdTDnNXFD3K0QjogW3gLDwLoNuMKYqAJML3RviBaOWRll+KTArbC+ucDgEbML2wIhWOBC79EyDqxvLzDYRCWgWLgXfE4WD30ZjiUtZPm0gPVqXSBERFNCdrUa+Ejq9einUM0nBAYxZa9r0CdEH11xWkwrtB/xkK6G1EAaggBdkKoqDaSE5MkwDny4COo8rjciYlohueimQhp1DI49ca2WlhBYt/Z4y5rjw263ezg4C+vgaCdCfE3qLfCQrjMJT2vi8qZACLRt4gIjIex2DyLiTnoIJ8RkaNE8JeElFAGRkBfTtTAm7kaID6XeknXnIhXWJlAMtK2hRBgRdyPEVzTxQEONnHLhGIqBtu3TJ8O0MCTu5DmERNyaLcb0IBfWoARow8TJMC0MiLsREisamzX7aQlpYCy06AuMpBARc+jhvmtaaMfFjikh7HbTP4dtxefQm2UV8oCcmJLCwww9bLAOzsJBhRxLb1gxlQtHUAa0mSfDtPC1ACgV8gpO8Bl/CljfojyW8oEopsyTYaqHHce8EOAXMt4lQ9iC41WyiE1lPB+KgDbzZDghrPCJqYVT/LOO6LvrcBsRr7SJtfcc/4V5D/mj6LrA8iT5qfsPyecwsc9gbjvUhTaxxV9RQw13hwTxBbt3DxhASmjDI0adE2PpRfi1N6xvpKvjqAobgJgQ77n3uqSVOIH05kAOtMHfcUz3MKpu8ovdA6oGm9p+o4aQHEe2MRX5kBD/SauhLQdWq//4tqtW8U7jjJZi2q5OD++JJt4CMS9+2YnYN9egCrBaVRV2B0aF1Jk+mtpEvPWbQMQcc5cUsoDVnzSJhoTknI+eRCj1uRbxq4L6rgRUj2lMNCUk5wu0crNkQNefEANw01ICasQ0IpoSNizyVH8E62KfC4hLf29Ch5QGboTqMQ2JGsJ2i+9rteCCbOLEZz2K27nQIi9U0VyhCKz+/MuhenW3wu6A9tOzRVs4eNSbZBO9uyQRm+xtQFx0oJHUFvq2wCo81qjzDfHsIfmjWsIWpG6fUO6qPJ9rgTHZwnuoCqzCt6LNA7n67J8dDmLiOWNTRe8PxUJy/g4+9XiIjai4z4XDEXXpD6qqwCoUXWCEVV5XpYyWO4Po0TuSr7wlwhZ4pN8X8qY+SPJcy5/SLzX0oDKwCoQXGISwcxQs6EJi9yG7sJV8a88b3/igTvDqwF8m3rsZaQCrVZ9zMpwAlvsH0YgaEPsGhHV69KgFr3NPXbRlsgKmbaEdlH17mng1bLUEGsAq5F1g0MDKels12DyG2YQta8Z4M9HzTu/nswaAoL2cPz9l/faEBRT4EsAqaCsKO5tt1WBwrLADlgtb4Ib5+mxw7xL/xfrRU18LaFnCmGItLGPbKpU9voKwBW+13hAOa2RbekBLFNMy1sLXW+G5KWELTrWJQ6AJtEBwgYHPa0xg2dkCDx/in5BZiKY6xjumwpoBDV8IRDH96HSOzy7WdcZu4dFWeNZHoZULhXu+7Wy+VP7NCMHri8MUQAt+OHHKn7YdOu4wWljBWvjGKUdEoXAPm9VIFFmgPVYleqcW4Pr4QAvMTir9i+0wctFPAvGncNCJzBpCYdns172Ttbr3rTTAOKb4Y+YkOljGW9iJv2hIiJI6S07ryQaOZ5DvEwJRTDuVeMGCNREX9s8TLQyIpoRo6TmXRNUb3fqChIqBFlieVDpv8CZ2qHH0mNHCJDG9ED2NcH664iG91fgW6jWQAKKYlp1K/2zbxIM+ASx3DvAfw9NrTBgYZ4tR8jeRorXN6HIp7J8caAUXGB3sNP/wqEMAsWHm8Ngp84jZhCir0J/17kYr/K2Z0V1v6UPBFKEEDGNawZ81NKdjCtx+gbeQImYVIgLaTfjN5W3vfrF4fj+dLy0fQtEahu1LAC3gB5+sso1i9wxrYgfL72GZzC9BzCTc7oeszRteAN/Ks32KQBC+M0wMNq83RCKjZHwpYmphXV4cn0pCAyCIXm3Hp/3N8+bgt20HSSBGTCNUwOn5OEAAg5WaU8Zy2o3yWMGzSzyeSaKeUM0m8ukAo5gS97+H0aPYv2BGl0kkhc82nzCNKqWPC0TzbbhJJMbT8z65pSCGHxaRJ8xSXJ8mEBGjbTA+t6PVC3Gpz8nolmhcyOep+izsLYDo1XZiXDl8wE8u8OUam2hYqOsTA+OYolhiU0Z3gM+E530BMCSaFAp46YCoTqLVdv+cushfax0hMCAaEwp56j4K6L+NQ9g5YxHRplEiXBOzCsU8jk/eQBTTH0/iD1pmAYUP4ZqYXSjhafgSQADqsZBcxag9hDgxtVCm4/oUgcD/fj0ZEKNNCOTPhEliKqFcx/epArcxJRfbYSV2FAKirlAFp+tjAgFob4RlfA2OSj7KYERloSLNmI+IKfmesI5wswwv7YcfLZNL6tMDbmNKA1Wmim2RwuzF57F9fCAAwxM2MHgQNXJqVCjwaTYwjOnHIKaJkTRoovpYs34STQhFPP0GBjH9gJrYP2IuaQa6w2lmoZDH8UmAAMxOyn16otAmxnNiNqGYl9YXxJRad+ObpwNFYrywySCU8Hg+BSCK6QUBPDtPQYxXp2mFMl4WH6p//oIDB8QpjSoxvnxMI5Tq+D5FIIAHuBCBOvrElEIFXXYfEv4LexkzmAMrxG5RiagtVLIJfepAFNNvCWAwfx/gxIF86tcQKtuM+fCYrimVCkGUr27Wwib6VNldhn1BTClgsOcfEETZGhUXGio+TxsIwM/fRs8bxqiUuzpE00IRT98HQPBqOz2gOAQxuATPT2jah2L6U/fwzKFGTC2iQaGQl86H6udfLjqJKYG8lQpeKtq9UMxL7UP1mnWs5jyQXRQQTQglOsuyMwD9t8yBhCJ+4p+fZhZKeVn6B8ILDOYHp4lHvBPUTEK5LqsvKLaQHm4+MdOcQaiCM+JDMeWsPekRlXMOnkKoiDPjI06GJcSLPuvXQkuobjPmQ2XzhIg4IInJeQUTWqZgZnkAPxlOfvryAUFk7abWwjZI48jBJ4ppgviJ8XbGWrg0JzTKC6rNF6L9IrYlZg42a+EtfKI8sD4Z5hG3u372aLoWXpoQ7oIHxDENiPHZDWe6WAtf+E+UF9RQJCzHx1Oy+bB0k6WJWRaeCiWMaTl6X4N78b0RvkrdxN3qggovMITE15+4N/sbYekxTRN3rwtrJhGWO/K9BSpLb8LICReWL3iFLSr+WQ0mfOerEvPERcIPGpe+fGHpFZQRdzyicAsuZTFVE5ZeDNnDTVGwbfnqd75sYXn9x5E+96H8P1dA+T+kjmkE3AiRceb79P9e1XTpCzPENAJiQpTVu0VvpzX9W4rKIixTwt3X1Te6df0xQ0rL+Qv/rUt8+b3iq3pPRTi51gT+mn6yWFe+Qs2YvvxPdmDeQq2YXv9mAJi3UCem13+aAOYtLKkLr383Asxd+KdqTK/+MAPMXfhWsYlXn+nb0S9FqBjTq280XiR9YkK1mF7pvAz8xIRKMb3+mH4pU7iw9FIOfPmrOWABQnlMjQILEEpjamStVqRQFtPr/xoFFiH8XRhTQ2u1QoXfiWJ6ZWitVqjwhSCmV3+dGFrKFCkUxPTqc8U0sBChIKbmljKFCrkxNbmUKVRY+oMd0yzHTk9MyI6piWOnpyJkxtTwUqZYISumL40cOz0Z4f8SMTW9VitaOKJjaurY6ckIS3+RMTV27JQspyAhGdOrz6x3C81UvyDhOzymV9+kv+iVVq0gYenzNqZXBo+dnpAQi+lO1mqbKgpYGm9iavZUhq7CWriN6W6BxbVwE1O0VqukqaffwjimaCmzS2BRU0VUaJIIjp2+XmDpt+tgrfYVA1FMr/7qi//Ah0y+Qp/BqNBabYfA4n1oNH1g/KmHJoBOv4b5/g/pd7vzaoWduQAAAABJRU5ErkJggg==',
        'https://s.cafebazaar.ir/images/upload/screenshot/com.translateall.languagetranslator.voicetranslation.voicechat.speakandtranslate-2ccd4b70-1689-4d49-9da3-0ca615e99806.jpg?x-img=v1/resize,h_800/format,type_jpg',
        'https://www.funka.com/contentassets/2046d7f5a0664ec2a6e586accf265f6d/teknik-surfplatta-sol_1280.jpg?width=1120&quality=80&scale=both',
        'https://cdn-japantimes.com/wp-content/uploads/2021/03/np_file_77693.jpeg',
        'https://cdn.gsmarena.com/imgroot/news/16/05/google-translate-all-apps/-728/gsmarena_001.jpg',
        'https://lh3.googleusercontent.com/SpDw_3VS3I16IPJ6QNNkaVi1DKOSaQK19ttSon6WoOKnDGVNZ_R4RDClgXoCJBBppuzrK3Kl6HYP5K2Z_NZ8woSfPLGhhzlLuts-AAM=w0',
        'https://www.androidheadlines.com/wp-content/uploads/2018/11/Google-Translate-AH-new.jpg'
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