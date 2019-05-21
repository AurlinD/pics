import React from "react";

//looking thru network tab, each list has a url in which it has a regular image size
//creating keys on every element we rendered in a LIST for better performance
// if wrapped in div, return key element in DIV
const ImageList = props => {
  const images = props.images.map(image => {
    return (
      <img alt={image.description} key={image.id} src={image.urls.regular} />
    );
  });
  return <div>{images}</div>;
};

export default ImageList;
