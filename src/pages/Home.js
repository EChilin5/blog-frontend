import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Components/Card";
import "./Home.css";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // fetch blogs from database
    const getBlog = async () => {
      try {
        const response = await axios.get(
          "https://blog-backend-pgua.onrender.com/api/blogs"
        );
        setData(response.data.payload);
      } catch (error) {
        console.error("Failed to fetch blog post:", error);
      }
    };
    getBlog();
  }, []);

  const removeFunction = (id) => {
    // remove the content by filter out the blog._id that was deleted
    setData((data) => data.filter((blog) => id !== blog._id));
  };

  return (
    <div className="card-container">
      <div className="card-grid">
        {data.map((data) => {
          return (
            <div key={data._id} className="card-grid-item">
              <Card
                id={data._id}
                author={data.author}
                title={data.title}
                content={data.content}
                removeCard={removeFunction}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
