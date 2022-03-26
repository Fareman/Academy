import React from "react"

import Styles from "./Button.module.scss"

const Button = ({children, type, onClick, add, disabled, upload, ref, onChange, ...props}) => {
  return (
    <div>
      {upload ? (
        <input ref={ref} type="file" name="picture" onChange={onChange} style={{display: "none"}} />
      ) : (
        ""
      )}
      <button disabled={disabled} onClick={onClick} className={Styles.btn} {...props}>
        {add ? <img className={Styles.add} src="/assets/icons/btn-add.svg" alt="AddIcon" /> : ""}
        <span>{children}</span>
      </button>
    </div>
  )
}

export default Button
