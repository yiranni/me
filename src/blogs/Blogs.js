import React, { useEffect, useState } from "react";
import "./Blogs.css";
import Tag from "./Tag";
export default function Blogs() {
  const [showBlogs, setShowBlogs] = useState(true);

  return (
    <div className="blogs" style={{ padding: "3rem 10rem" }}>
      {showBlogs && (
        <div className="blogs_content" style={{ opacity: 0 }}>
          <h1>Blogs</h1>
          <p
            style={{
              fontFamily: "var(--font-nanum)",
              fontSize: "26px",
              color: "#F86271 ",
            }}
          >
            I like to write stuff to record my ideas, experience, questions in design and coding. 
          </p>
        </div>
      )}
    </div>
  );
}
