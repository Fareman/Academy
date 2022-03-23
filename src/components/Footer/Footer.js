import React from "react"

import styles from "./Footer.module.scss"

function Footer() {
  return (
    <div className={styles.footer}>
      <span>© iLINK ACADEMY. ALL RIGHTS RESERVED. 2022</span>
      <div className="links">
        <img src="/assets/icons/vk.svg" alt="VK" />
        <img src="/assets/icons/redit.svg" alt="Redit" />
        <img src="/assets/icons/telegram.svg" alt="Telegram" />
      </div>
    </div>
  )
}

export default Footer
