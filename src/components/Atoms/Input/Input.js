import React from "react"

import Styles from "./Input.module.scss"

function Input(props) {
  switch (props.type) {
    case "input":
      return (
        <div className={Styles.inputBlock}>
          {props.label ? <label className={Styles.label}>{props.text}</label> : ""}
          <input className={Styles.input} placeholder={props.placeholder} />
        </div>
      )
    case "textArea":
      return (
        <div className={Styles.textAreaBlock}>
          {props.label ? <label className={Styles.label}>{props.text}</label> : ""}
          <textarea className={Styles.textArea} placeholder={props.placeholder} />
        </div>
      )
  }
}

export default Input
