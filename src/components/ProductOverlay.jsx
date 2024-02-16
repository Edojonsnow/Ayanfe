/* eslint-disable react/prop-types */
import React from "react";
import { getImageURL } from "../utils/ImageUtils";

const ProductOverlay = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <img src={getImageURL(props.src)} alt="" />
    </div>
  );
};

export default ProductOverlay;
