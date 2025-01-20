import React from "react";
import { useState } from "react";

function Product(props) {
  let i = props.index;
  let p = props.product;

  const like = (e) => {
    e.stopPropagation();
    props.onLike(i);
  };

  return (
    <div onClick={props.onClick} style={{ cursor: "pointer" }}>
      <div className="house-content">
        <div className="houseTitle">
          <h4>{p[i].title}</h4>
          <span>월세: {p[i].price}원</span>

          <a href="#" onClick={like}>
            허위 매물 신고 {p[i].like} <span>🚨</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Product;
