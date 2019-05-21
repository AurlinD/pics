import "./ImageList.css";
import React from "react";
import ImageCard from "./ImageCard";

//looking thru network tab, each list has a url in which it has a regular image size
//creating keys on every element we rendered in a LIST for better performance
// if wrapped in div, return key element in DIV
const ImageList = props => {
  const images = props.images.map(image => {
    return <ImageCard key={image.id} image={image} />;
  });
  return <div className="image-list"> {images}</div>;
};

export default ImageList;
