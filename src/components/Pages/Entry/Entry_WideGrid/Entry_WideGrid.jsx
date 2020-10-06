import React from "react";
import classes from "./Entry_WideGrid.module.scss";
import Card from "../../../UI/Card/Card";
import Divider from "../Entry_Divider/Divider";
import Arrow from "../../../UI/Arrow/Arrow";

export default function Entry_WideGrid({ content }) {
  return (
    <div className={classes.Entry__WideGrid}>
      <Card
        content={content.message.content}
        src={content.message.url}
        minHeight="26rem"
      />
      <Divider textColor="white">
        <Arrow right />
      </Divider>
      <Card
        content={content.yardEntry.content}
        src={content.yardEntry.url}
        minHeight="26rem"
      />
      <Divider textColor="white">
        <Arrow right />
      </Divider>
      <Card
        content={content.findDoors.content}
        src={content.findDoors.url}
        minHeight="26rem"
      />
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <Divider textColor="white">
        <Arrow down />
      </Divider>
      <Card
        content={content.welcome.content}
        src={content.welcome.url}
        minHeight="26rem"
      />
      <Divider textColor="white">
        <Arrow left />
      </Divider>
      <Card
        content={content.openTheDoor.content}
        src={content.openTheDoor.url}
        minHeight="26rem"
      />
      <Divider textColor="white">
        <Arrow left />
      </Divider>
      <Card
        content={content.takeOutKey.content}
        src={content.takeOutKey.url}
        minHeight="26rem"
      />
    </div>
  );
}