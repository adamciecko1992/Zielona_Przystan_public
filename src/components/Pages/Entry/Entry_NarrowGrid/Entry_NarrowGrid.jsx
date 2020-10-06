import React from "react";
import classes from "./Entry_NarrowGrid.module.scss";
import Card from "../../../UI/Card/Card";
import Divider from "../Entry_Divider/Divider";
import Arrow from "../../../UI/Arrow/Arrow";

export default function Entry_NarrowGrid() {
  return (
    <div className={classes.Entry__NarrowGrid}>
      <Card title="example" text="lorem" className="" />
      <Divider textColor="white">
        <Arrow right />
      </Divider>
      <Card title="example" text="lorem" />
      <Divider textColor="black">
        <Arrow right />
      </Divider>
      <Card title="example" text="lorem" />
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <Divider>
        <Arrow down />
      </Divider>
      <Card title="example" text="lorem" />
      <Divider textColor="white">
        <Arrow left />
      </Divider>
      <Card title="example" text="lorem" />
      <Divider textColor="rgba(0,0,0,1)">
        <Arrow left />
      </Divider>
      <Card title="example" text="lorem" />
    </div>
  );
}
