import React, { useState } from "react";
import { galleryPhotos } from "../../../assets/photosUrls";
import GalleryModal from "./GalleryModal/GalleryModal";
import ImageList from "./ImageList/ImageList";
import classes from "./Gallery.module.scss";

const imagesArr = Object.values(galleryPhotos);

function Gallery(props) {
  const [show, setShow] = useState(false);
  const [fullImg, setFullImg] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = (image) => {
    setShow(true);
    setFullImg(image);
  };

  return (
    <>
      <GalleryModal show={show} handleClose={handleClose} fullImg={fullImg} />
      <div className={classes.Gallery}>
        <h1 className={classes.Gallery__Header}>{props.content.header}</h1>
        <h3 className={classes.Gallery__Subheader}>{props.content.subheader}</h3>
        <div className={classes.Gallery__ImageList}>
          <ImageList images={imagesArr} showModal={handleShow} />
        </div>
      </div>
    </>
  );
}

export default Gallery;
