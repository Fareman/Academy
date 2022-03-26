import React from "react"
import {v4} from "uuid"

import Styles from "./Notification.module.scss"

function Notification(props) {
  const notification = {
    id: v4(),
    type: ["Успешно!", "Что-то не так..."],
    message: [
      "Спасибо за отзыв о нашей компании :)",
      "Не получилось отправить отзыв. Попробуйте еще раз!",
    ],
  }
  return (
    <div>
      <div className={Styles.norifWrapper}>
        {notification.map((note) => {
          return <Notification key={note.id} {...note} />
        })}
      </div>
      {props.children}
    </div>
  )
}

export default Notification
