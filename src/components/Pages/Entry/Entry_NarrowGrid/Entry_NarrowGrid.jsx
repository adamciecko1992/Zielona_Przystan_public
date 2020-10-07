import React from "react";
import classes from "./Entry_NarrowGrid.module.scss";
import Card from "../../../UI/Card/Card";
import Divider from "../Entry_Divider/Divider";
import Arrow from "../../../UI/Arrow/Arrow";

export default function Entry_NarrowGrid({ content }) {
  return (
    <div className={classes.Entry__NarrowGrid}>
      <Card
        content="NARRRRRRROW"
        src={content.message.url}
        entry
      />
      <Divider textColor="white">
        <Arrow right />
      </Divider>
      <Card
        content={content.yardEntry.content}
        src={content.yardEntry.url}
        entry
      />
      <Divider textColor="white">
        <Arrow right />
      </Divider>
      <Card
        content={content.findDoors.content}
        src={content.findDoors.url}
        entry
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
        entry
      />
      <Divider textColor="white">
        <Arrow left />
      </Divider>
      <Card
        content={content.openTheDoor.content}
        src={content.openTheDoor.url}
        entry
      />
      <Divider textColor="white">
        <Arrow left />
      </Divider>
      <Card
        content={content.takeOutKey.content}
        src={content.takeOutKey.url}
        entry
      />
    </div>
  );
}
