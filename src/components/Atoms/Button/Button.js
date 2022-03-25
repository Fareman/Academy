import React from "react"

import Styles from "./Button.module.scss"

const Button = ({children, type, onClick, add, disabled, ...props}) => {
  return (
    <button onClick={onClick} className={Styles.btn} {...props}>
      {add ? <img className={Styles.add} src="/assets/icons/btn-add.svg" alt="AddIcon" /> : ""}
      <span>{children}</span>
    </button>
  )
}

export default Button
