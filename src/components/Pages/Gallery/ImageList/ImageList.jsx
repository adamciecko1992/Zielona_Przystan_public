import classes from "./ImageList.module.scss";
import React from "react";
import ImageCard from "./ImageCard";

const ImageList = (props) => {
  const images = props.images.map((image) => {
    return (
      <ImageCard
        key={image.id}
        url={image}
        handleClick={() => props.showModal(image)}
      />
    );
  });

  return <div className={classes.ImageList}>{images}</div>;
};

export default ImageList;
