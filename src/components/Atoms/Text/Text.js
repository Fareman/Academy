import React from "react"

import Styles from "./Text.module.scss"

function Text(props) {
  switch (props.type) {
    case "h1":
      return <h1 className={Styles.h1}>{props.children}</h1>
    case "h2":
      return <h2 className={Styles.h2}>{props.children}</h2>
    case "h3":
      return <h3 className={Styles.h3}>{props.children}</h3>
    case "h4":
      return <h4 className={Styles.h4}>{props.children}</h4>
    case "button":
      return <span className={Styles.span}>{props.children}</span>
    case "line":
      return <span className={Styles.line}>{props.children}</span>
    case "b":
      return <b className={Styles.b}>{props.children}</b>
  }
}

export default Text
