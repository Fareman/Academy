import React from "react"

import Styles from "./Label.module.scss"

function Label({forHtml, children, ...props}) {
  return (
    <label forHtml={forHtml} {...props} className={Styles.label}>
      {children}
    </label>
  )
}

export default Label
