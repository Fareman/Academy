import React from "react"

import Styles from "./Message.module.scss"

import Text from "../Atoms/Text"
function Message(props) {
  return (
    <div className={Styles.message}>
      <div className={Styles.messageHat}>
        <img src={props.photo} alt="Image" />
        <Text type="b">{props.name}</Text>
        <Text type="line">{props.date}</Text>
      </div>
      <Text type="line">{props.comment}</Text>
    </div>
  )
}

export default Message
