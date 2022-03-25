import React from "react"
import Styles from "./Info.module.scss"

function Info() {
  return (
    <div className={Styles.infoBlock}>
      <img src="/assets/icons/info.svg" className={Styles.img} />
      <span className={Styles.info}>Все отзывы проходят модерацию в течение 2 часов</span>
    </div>
  )
}

export default Info
