import React from "react"

import Styles from "./Form.module.scss"

import Info from "../Atoms/Info"
import Text from "../Atoms/Text"
import Input from "../Atoms/Input"
import Button from "../Atoms/Button/Button"

export default function Form() {
  return (
    <form className={Styles.form}>
      <Text type="h3">Отзыв</Text>

      <div className={Styles.firstQ}>
        <Input type="input" label text="Как вас зовут?" placeholder="Имя Фамилия" />
        <Button add>
          <Text type="button">Загрузить фото</Text>
        </Button>
      </div>

      <Input
        type="textArea"
        label
        text="Все ли вам понравилось?"
        placeholder="Напишите пару слов о вашем опыте..."
      />

      <div className={Styles.formBottom}>
        <Button>
          <Text type="button">Отправить отзыв</Text>
        </Button>

        <Info />
      </div>
    </form>
  )
}
