import React from "react";
import { CKEditor } from "ckeditor4-react";

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
        <div className="row uploadFile">
          <label className="fileUploadD" for="thumbnail">
            {" "}
            <img id="preW" src="" alt="" />{" "}
            <span id="thumbnailStatus">انتخاب عکس</span>
            <input
              type="file"
              name="thumbnail"
              id="thumbnail"
              accept="image/*"
            />
          </label>
        </div>
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
        <div className="row">
          <label className="fildinput" for="status">
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
        <div className="row uploadFile">
          <label className="fileUploadD" for="selectImage">
            <span id="statusFile">انتخاب عکس</span>
            <input
              type="file"
              name="selectImage"
              id="selectImage"
              accept="image/*"
            />
          </label>
          <button type="button" id="sendFile" className="sendFile btn">
            ارسال فایل
          </button>
        </div>
        <div className="column">
          <div className="progress">
            <div className="progressBar"></div>
          </div>
          <div className="row hideTop">
            <input readonly id="copyBox" value="سلام" />
            <button id="copyURL" className="btn" type="button">
              کپی
            </button>
          </div>
        </div>

        <div className="column">
          <label for="body">متن اصلی</label>
          {/* <textarea
            name="body"
            id="body"
            cols="80"
            rows="10"
            placeholder="متن اصلی"
          ></textarea> */}
          <CKEditor
            config={{ language: "fa" }}
            initData={
              <p>
                This is a CKEditor 4 WYSIWYG editor instance created by ️⚛️
                React.
              </p>
            }
          />
        </div>
        <div className="row">
          <a className="btn btn-denger" href="/dashboard">
            انصراف
          </a>
          <button className="btn" type="submit">
            ساخت پست
          </button>
        </div>
      </form>
    </>
  );
};

export default AddPost;
