import React from "react";
import { Modal } from "react-bootstrap";
import classes from "./GalleryModal.module.scss";

export default function GalleryModal(props) {
  return (
    <Modal
      show={props.show}
      onHide={props.handleClose}
      dialogClassName={classes.GalleryModal}
      centered
    >
      <img src={props.fullImg} alt={props.alt} />
    </Modal>
  );
}
