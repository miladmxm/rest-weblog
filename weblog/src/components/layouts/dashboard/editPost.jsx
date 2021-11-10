import React, { useContext, useEffect, useState } from "react";
import { CKEditor } from "ckeditor4-react";
import UploadImg from "../../ui/uploadimage";
import { Helmet } from "react-helmet";
import { editPost } from "../../../services/dashServises";
import isEmpty from "../../utils/isEmpty";
import { ContextDash } from "../../context/context";
import { useDispatch, useSelector } from "react-redux";
import { getBlog } from "../../../action/blog";
import { findPost } from "../../utils/findPost";
import { useForm } from "react-hook-form";
import { truncateAll } from "../../utils/truncate";

const EditPost = ({ history, match }) => {

  const posts = useSelector(state => state.getDashboard)
  const post = findPost(match.params.id, posts)

  const [status, setStatus] = useState("public");
  const [category, setCategory] = useState("دیگر");
  const [body, setBody] = useState("");
  const [bodyValid,setBodyValid]=useState(true)
  const [thumbnail, setThumbnail] = useState(null);
  const { setMessage, setMessageArr, setLoader, setMessaLoader } = useContext(ContextDash)
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const dispatch = useDispatch()

  const titleHadnler = (e) => {

    if (e.target.value === "" || e.target.value === null) {
      e.currentTarget.dataset.value = "true";
    } else {
      e.currentTarget.dataset.value = "false";
    }
  };

  const reset = () => {
    setValue("title",'')
    setStatus('public')
    setBody("")
  }

  const onSubmit = async input => {
console.log(truncateAll(body))
console.log(truncateAll(body).length)
    if(truncateAll(body) === ""|| truncateAll(body)===null||truncateAll(body).length <= 3){
      return setBodyValid(false)
    }

    setLoader(true)
    setMessaLoader("لطفا منتظر بمانید")
    setMessageArr([])
    
    const data = new FormData()
    data.append(
      "title", input.title
    )
    data.append(
      "status", status
    )
    data.append(
      "body", body
    )
    data.append(
      "thumbnail", thumbnail
    )
    data.append(
      "category", category
    )

    try {
      const res = await editPost(match.params.id, data);
      if (res.status === 200) {
        dispatch(getBlog())
        reset();
        history.replace('/dashboard')
      }
    } catch (ex) {
      console.log(ex);
      let err = [];
      if (isEmpty(ex.response.data.data)) {
        ex.response.data.data.forEach((message) => {
          err.push(message.message);
        });
      } else {
        err.push(ex.response.data.message);
      }

      setMessage(err, "error");
    }

    setLoader(false)
    setMessaLoader("اتصال اینترنت خود را بررسی کنید")
  };
  useEffect(() => {
    if (post.length > 0) {      
      setStatus(post[0].status)
      setBody(post[0].body)
      setCategory(post[0].category)
    }
  }, [])
  if (post.length <= 0) {
    history.replace('/dashboard')
    return null
  } else {

    return (
      <>
        <h2 className="contentTitle">ویرایش پست</h2>
        <Helmet>
          <title>داشبورد | ویرایش</title>
        </Helmet>
        <form
          className="add-post"
          encType="multipart/form-data"
          onSubmit={handleSubmit(onSubmit)}
        >
          <UploadImg
            name="thumbnale"
            uploadChange={(e) => setThumbnail(e.target.files[0])}
            title="انتخاب تصویر اصلی"
            defaultImg={`thumbnails/${post[0].thumbnail}`}
          />
          <label className={errors.title?"fildinput red":"fildinput"}>
            <input
              className="input-outlined"
              type="text"
              name="title"
              id="titlePost"
              data-value="false"
              defaultValue={post[0]?post[0].title:null}
              onInput={e=>titleHadnler(e)}
              {...register("title", { required: true, minLength: 4})}
            />
            <span>عنوان پست</span>
            {errors.title &&<small className="subTitle">برای پست خود حتماً یک عنوان بنویسید</small>}
          </label>
          <div>
            <label className="fildinput" htmlFor="status">
              <select
                className="input-outlined"
                data-value="true"
                name="status"
                id="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="public">عمومی</option>
                <option value="private">خصوصی</option>
              </select>
              <span>وضعیت پست</span>
            </label>
          </div>


          <divs>
            <label className="fildinput" htmlFor="category">
              <select
                className="input-outlined"
                data-value="true"
                name="category"
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="دیگر">دیگر</option>
                <option value="سرگرمی">سرگرمی</option>
                <option value="آموزشی">آموزشی</option>
                <option value="علمی">علمی</option>
                <option value="خبری">خبری</option>
                <option value="پزشکی">پزرشکی</option>
                <option value="شخصی">شخصی</option>
              </select>
              <span>دسته بندی</span>
            </label>
          </divs>

          <div>
            <label className={bodyValid?"":"red"} htmlFor="body">متن اصلی</label>
            <CKEditor
              config={{ language: "fa" }}

              initData={body.length > 0 ? body : post[0].body}
              onChange={(e) => setBody(e.editor.getData())}
            />
          </div>
          <div className="row">
            <button type="reset" onClick={() => { reset(); history.replace('/dashboard') }} className="btn btn-denger">
              انصراف
            </button>
            <button className="btn btn-success" type="submit">
              ویرایش پست
            </button>
          </div>
        </form>
      </>
    );
  }
};

export default EditPost;
