import React from "react"

import Styles from "./Modal.module.scss"

export default function Modal({active, setActive, children}) {
  //const [active, setActive] = useState(active)

  return (
    <div
      className={active ? `${Styles.modal} ${Styles.active}` : Styles.modal}
      onClick={() => setActive(false)}>
      <div
        className={active ? `${Styles.modal__content} ${Styles.active}` : Styles.modal__content}
        onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}
