import React, {Component} from "react"

import Styles from "./Header.module.scss"

import Button from "../Atoms/Button/Button"
import Text from "../Atoms/Text"

function Header() {
  return (
    <div className={Styles.header_wrapper}>
      <div className={Styles.header_items}>
        <div className={Styles.user}>
          <img className={Styles.avatar} src="/assets/images/1.jpg" />
          <Text type="b">Харин Михаил</Text>
        </div>
        <img className={Styles.logo} src="/assets/icons/logo.svg" />
        <Button>Панель управления</Button>
      </div>
    </div>
  )
}

export default Header
