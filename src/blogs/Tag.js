import React from "react";

export default function Tag() {
    
  const tagsData = [
    { tag: "D3", selected: false },
    { tag: "React", selected: false },
    { tag: "Mini Program", selected: false },
  ];

  
  return (
    <div className="tags">
      <h3
        style={{ color: "gray", fontSize: "14px", textTransform: "uppercase" }}
      >
        Discover what matters to you
      </h3>
      <div>
        {tagsData.map((d, i) => {
          return (
            <span
              className={`tag ${d.selected ? "selected" : ""}`}
              style={{
                color: `${d.selected ? "white" : "#F86271"}`,
                marginRight: "12px",
                border: "1px solid #F86271",
                padding: "6px 12px",
                fontSize: "12px",
                cursor: "pointer",
              }}
              key={d.tag}
            >
              {d.tag}
            </span>
          );
        })}
      </div>
    </div>
  );
}
