import React from "react";
import "./Card.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Card = ({ id, author, title, content, removeCard }) => {
  // delete specific card from database
  // call the removeCard
  const onDelete = async () => {
    try {
      const deleteBlog = await axios.delete(
        `https://blog-backend-pgua.onrender.com/api/blogs/delete-blog/${id}`
      );
      if (deleteBlog.data.message === "deleted successfully") {
        // check the response to see if data was deleted successfuly
        removeCard(id);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="card-container">
      <div className="card-content">
        <div className="card-header">
          <h2>{title}</h2>
          <button onClick={() => onDelete()}>
            <FontAwesomeIcon
              icon={faTrash}
              style={{ color: "#ff0000", height: "20px" }}
            />{" "}
          </button>
        </div>
        <div>
          <h3>{author}</h3>
        </div>
        <div>{content}</div>
      </div>
    </div>
  );
};

export default Card;
