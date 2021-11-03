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

const EditPost = ({history,match}) => {

  const posts = useSelector(state=>state.getDashboard)
  const post =  findPost(match.params.id,posts)
  
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("public");
  const [body, setBody] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const { setMessage, setMessageArr,setLoader,setMessaLoader } = useContext(ContextDash)
  const dispatch = useDispatch()

  const titleHadnler = (e) => {
    setTitle(e.target.value);
    if (e.target.value === "" || e.target.value === null) {
      e.currentTarget.dataset.value = "true";
    } else {
      e.currentTarget.dataset.value = "false";
    }
  };

  const reset = ()=>{
    setTitle('')
    setStatus('public')
    setBody("")
  }

  const submitHandler = async (e) => {
    setLoader(true)
    setMessaLoader("لطفا منتظر بمانید")
    setMessageArr([])
    e.preventDefault();
    const data = new FormData()
    data.append(
      "title",title
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
    
    try {
      const res = await editPost(match.params.id,data);
      if (res.status == 200) {
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
      
      setTitle(post[0].title)
      setStatus(post[0].status)
      setBody(post[0].body)
    }
  },[])
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
          onSubmit={(e) => submitHandler(e)}
        >
          <UploadImg
            name="thumbnale"
            uploadChange={(e) => setThumbnail(e.target.files[0])}
            title="انتخاب تصویر اصلی"
            defaultImg ={`thumbnails/${post[0].thumbnail}`}
          />
          <label className="fildinput">
            <input
              className="input-outlined"
              type="text"
              name="title"
              id="titlePost"
              data-value="false"
              value={title}
              onChange={(e) => titleHadnler(e)}
            />
            <span>عنوان پست</span>
          </label>
          <div className="">
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
  
          <div className="">
            <label htmlFor="body">متن اصلی</label>
            <CKEditor
              config={{ language: "fa" }}
              
              initData={body.length > 0?body:post[0].body}
              onChange={(e) => setBody(e.editor.getData())}
            />
          </div>
          <div className="row">
            <button type="reset" onClick={() => { reset(); history.replace('/dashboard')}} className="btn btn-denger">
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
