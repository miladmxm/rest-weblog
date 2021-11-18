import React, { useContext, useState } from "react";
import { CKEditor } from "ckeditor4-react";
import UploadImg from "../../ui/uploadimage";
import { Helmet } from "react-helmet";
import { addPost } from "../../../services/dashServises";
import isEmpty from "../../utils/isEmpty";
import { ContextDash } from "../../context/context";
import { useDispatch } from "react-redux";
import { getBlog } from "../../../action/blog";
import { useForm } from "react-hook-form";
import { truncateAll } from "../../utils/truncate";

const AddPost = ({history}) => {

  const [status, setStatus] = useState("public");
  const [category, setCategory] = useState("دیگر");
  const [bodyValid,setBodyValid]=useState(true)
  const [thumbnailValid,setThumbnailValid]=useState(true)
  const [body, setBody] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const { setMessage, setMessageArr,setLoader,setMessaLoader } = useContext(ContextDash)
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

  const dispatch = useDispatch()

  const titleHadnler = (e) => {
    if (e.target.value === "" || e.target.value === null) {
      e.currentTarget.dataset.value = "true";
    } else {
      e.currentTarget.dataset.value = "false";
    }
  };

  const reset = ()=>{
    
    setValue("title",'')
    setStatus('public')
    setBody("")
  }

  const onSubmit = async input => {
    if(thumbnail === null || thumbnail === ""){
      return setThumbnailValid(false)
    }else if(truncateAll(body) === ""|| truncateAll(body)===null||truncateAll(body).length <= 3){
      return setBodyValid(false)
    }
    
    setLoader(true)
    setMessaLoader("لطفا منتظر بمانید")
    setMessageArr([])
    
    const data = new FormData()
    data.append(
      "title",input.title
    )
    data.append(
      "status",status
    )
    data.append(
      "body",body
    )
    data.append(
      "thumbnail",thumbnail
    )
    data.append(
      "category",category
    )
    try {
      const res = await addPost(data);
      if (res.status === 201) {
        dispatch(getBlog())
        reset();
        history.replace('/dashboard')
      }
    } catch (ex) {
      let err = [];
      if (ex.response) {  
        if (isEmpty(ex.response.data.data)) {
          ex.response.data.data.forEach((message) => {
            err.push(message.message);
          });
        } else {
          err.push(ex.response.data.message);
        }
      }
      
      setMessage(err, "error");
    }
    
    setLoader(false)
    setMessaLoader("اتصال اینترنت خود را بررسی کنید")
  };

  return (
    <>
      <h2 className="contentTitle">افزودن پست جدید</h2>
      <Helmet>
        <title>داشبورد | افزودن پست</title>
      </Helmet>
      <form
        className="add-post"
        encType="multipart/form-data"
        onSubmit={handleSubmit(onSubmit)}
      >
        <UploadImg
          name="thumbnale"
          classN={thumbnailValid?"":"red"}
          uploadChange={(e) => {setThumbnailValid(true);setThumbnail(e.target.files[0]);}}
          title="انتخاب تصویر اصلی"
        />
        <label className={errors.title?"fildinput red":"fildinput"}>
          <input
            className="input-outlined"
            type="text"
            id="titlePost"
            data-value="true"
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
        <div>
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
        </div>

        <div>
          <label className={bodyValid?"":"red"} htmlFor="body">متن اصلی</label>
          <CKEditor
            config={{ language: "fa" }}
            Data={body}
            onChange={(e) => setBody(e.editor.getData())}
          />
        </div>
        <div className="row">
          <button type="reset" onClick={() => { reset(); history.replace('/dashboard')}}  className="btn btn-denger">
            انصراف
          </button>
          <button className="btn btn-success" type="submit">
            ساخت پست
          </button>
        </div>
      </form>
    </>
  );


};

export default AddPost;
