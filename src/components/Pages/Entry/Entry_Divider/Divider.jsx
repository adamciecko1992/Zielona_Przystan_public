import React from 'react'
import classes from "./Divider.module.scss";

export default function Divider(props) {
    const style = {
        color: props.textColor
    }
    return (
        <div className={[classes.Entry__Grid_Divider, props.className].join('')} style={style}>
            {props.children}
        </div>
    )
}
