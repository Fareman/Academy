import React from "react"

import Styles from "./Input.module.scss"

function Input(props) {
  switch (props.type) {
    case "input":
      return (
        <div className={Styles.inputBlock}>
          {props.label ? <label className={Styles.label}>{props.text}</label> : ""}
          <input
            onChange={props.onChange}
            onBlur={props.onBlur}
            value={props.value}
            name={props.name}
            className={Styles.input}
            placeholder={props.placeholder}
          />

          {props.error ? (
            <div className={Styles.errorBlock}>
              <img src="/assets/icons/cross.svg" />
              <label className={Styles.error}>{props.errorText}</label>
            </div>
          ) : (
            ""
          )}
        </div>
      )
    case "textArea":
      return (
        <div className={Styles.textAreaBlock}>
          {props.label ? <label className={Styles.label}>{props.text}</label> : ""}
          <textarea
            onChange={props.onChange}
            onBlur={props.onBlur}
            value={props.value}
            name={props.name}
            className={Styles.textArea}
            placeholder={props.placeholder}
            maxLength={200}
          />
          {props.error ? (
            <div className={Styles.errorBlock}>
              <img src="/assets/icons/cross.svg" />
              <label className={Styles.error}>{props.errorText}</label>
            </div>
          ) : (
            ""
          )}
        </div>
      )
  }
}

export default Input
