import React from "react"

import Styles from "./Input.module.scss"

const Input = ({placeholder, type, label, text, disabled, error, ...props}) => {
  return (
    <div className={Styles.inputBlock}>
      {label ? <label className={Styles.label}>{text}</label> : ""}
      <input
        placeholder={placeholder}
        className={error ? `${Styles.input} ${Styles.error}` : Styles.input}
        {...props}
      />
    </div>
  )
}

export default Input
