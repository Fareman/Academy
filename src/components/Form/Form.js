import React from "react"

import Styles from "./Form.module.scss"

import Input from "../Atoms/Input"
import Button from "../Atoms/Button/Button"

export default function Form() {
  return (
    <form className={Styles.form}>
      <h3>Отзыв</h3>
      <label htmlFor="1">Как вас зовут?</label>

      <div className={Styles.firstQ}>
        <input className={Styles.username} id="1" Placeholder="Имя Фамилия" />
        <Button add>Загрузить фото</Button>
      </div>

      <label htmlFor="2">Все ли вам понравилось?</label>
      <input
        className={Styles.description}
        id="2"
        Placeholder="Напишите пару слов о вашем опыте..."
      />

      <div className={Styles.formBottom}>
        <Button>Отправить отзыв</Button>
        <img src="assets/icons/info.svg" />
        <p>Все отзывы проходят модерацию в течение 2 часов</p>
      </div>
    </form>
  )
}
