import React, { useState } from "react";
import "./CreateBlogModal.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { faUser, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

const CreateBlogModal = () => {
  const [formdata, setFormData] = useState({
    author: "",
    title: "",
    content: "",
  });

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const postBlog = async () => {
    try {
      const newBlog = await axios.post(
        "https://blog-backend-pgua.onrender.com/api/blogs/create-blog",
        formdata
      );
      if (newBlog.data.message === "success") {
        notify("Blog create succesfully");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const notify = (message) => {
    // Calling toast method by passing string
    toast(message);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (
      formdata.author !== "" &&
      formdata.title !== "" &&
      formdata.content !== ""
    ) {
      postBlog();
      setFormData({
        author: "",
        title: "",
        content: "",
      });
    } else {
      notify("Please fill all entries");
    }
  };

  return (
    <div className="form-holder">
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
      />
      <form className="form-container">
        <div className="form-group">
          <label>
            Blog Title <span className="required-asterisk">*</span>
          </label>
          <div tabIndex={0} className="input-container">
            <FontAwesomeIcon icon={faPenToSquare} className="icon" />{" "}
            <input
              className="input-field"
              type="text"
              id="title"
              name="title"
              title="Please fill out this field"
              value={formdata.title}
              onChange={(e) => handleFormChange(e)}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label>
            Author Name <span className="required-asterisk">*</span>
          </label>
          <div tabIndex={0} className="input-container">
            <FontAwesomeIcon icon={faUser} className="icon" />{" "}
            <input
              className="input-field"
              type="text"
              id="author"
              name="author"
              title="Please fill out this field"
              value={formdata.author}
              onChange={(e) => handleFormChange(e)}
              required
            />
          </div>
        </div>

        <div tabIndex={0} className="form-group">
          <label>
            Blog Content <span className="required-asterisk">*</span>
          </label>

          <textarea
            id="content"
            name="content"
            rows="4"
            title="Please fill out this field"
            value={formdata.content}
            onChange={(e) => handleFormChange(e)}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="form-button"
          onClick={(e) => onSubmitForm(e)}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateBlogModal;
