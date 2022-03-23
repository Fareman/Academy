import React from "react"

import Styles from "./Message.module.scss"

function Message(props) {
  return (
    <div className={Styles.message}>
      <div className={Styles.messageHat}>
        <img src={props.photo} alt="Image" />
        <span>{props.name}</span>
        <p>{props.date}</p>
      </div>
      <span>{props.comment}</span>
    </div>
  )
}

export default Message
