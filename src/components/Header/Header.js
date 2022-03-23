import React, {Component} from "react"
import Button from "../Atoms/Button/Button"

import Styles from "./Header.module.scss"

function Header() {
  return (
    <div className={Styles.header_wrapper}>
      <div className={Styles.header_items}>
        <div className={Styles.user}>
          <img className={Styles.avatar} src="/assets/icons/avatar.svg" />
          <span>Харин Михаил</span>
        </div>
        <img className={Styles.logo} src="/assets/icons/logo.svg" />
        <Button>Панель управления</Button>
      </div>
    </div>
  )
}

export default Header
