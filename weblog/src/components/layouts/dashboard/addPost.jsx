import React from "react";
import { CKEditor } from "ckeditor4-react";
import UploadImg from "../../utils/uploadimage";

const AddPost = () => {
  const titleHadnler = (e) => {
    if (e.target.value === "" || e.target.value === null) {
      e.currentTarget.dataset.value = "true";
    } else {
      e.currentTarget.dataset.value = "false";
    }
  };
  return (
    <>
      <h2 className="contentTitle">افزودن پست جدید</h2>

      <form className="add-post" method="POST">
        <UploadImg name="thumbnale" uploadChange={e=>console.log(e)}title="انتخاب تصویر اصلی"/>
        <label className="fildinput">
          <input
            className="input-outlined"
            type="text"
            name="title"
            id="titlePost"
            data-value="true"
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
            >
              <option value="public">عمومی</option>
              <option value="private">خصوصی</option>
            </select>
            <span>وضعیت پست</span>
          </label>
        </div>
        
        {/* <div className="">
          <div className="progress">
            <div className="progressBar"></div>
          </div>
          <div className="row hideTop">
            <input readonly id="copyBox" value="سلام" />
            <button id="copyURL" className="btn" type="button">
              کپی
            </button>
          </div>
        </div> */}

        <div className="">
          <label htmlFor="body">متن اصلی</label>
          <CKEditor
            config={{ language: "fa" }}
            // initData={}
          />
        </div>
        <div className="row">
          <button type="reset" className="btn btn-denger">
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
