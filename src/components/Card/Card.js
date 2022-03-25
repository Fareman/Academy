import React from "react"
import Text from "../Atoms/Text"

import Styles from "./Card.module.scss"

function Card() {
  return (
    <div className={Styles.card}>
      <img src="/assets/images/1.jpg" alt="MyPhoto" className={Styles.photo} />
      <div className={Styles.info}>
        <div className={Styles.hat}>
          <Text type="h3">Харин Михаил</Text>
          <Text type="line">09.10.1999</Text>
        </div>
        <ul>
          <li>
            <Text type="b">Город: </Text>
            <Text type="line">Томск</Text>
          </li>
          <li>
            <Text type="b">Пол: </Text>
            <Text type="line">
              мужчина <img src="/assets/icons/male.svg" alt="Male" />
            </Text>
          </li>
          <li>
            <Text type="b">Возраст: </Text>
            <Text type="line">22</Text>
          </li>
        </ul>
        <div className={Styles.about}>
          <Text type="b">О себе: </Text>
          <Text type="line">
            Всем привет! Меня зовут Миша, мне 22 года, я студент. Учусь на программиста уже пятый
            год и подумал пора бы и поработать по специальности) По гороскопу весы, люблю закаты и
            знойных женщин :*
          </Text>
        </div>
        <div className={Styles.pet}>
          <img src="/assets/icons/pet_food.svg" alt="Food" />
          <Text type="b">Домашнее животное: </Text>
          <Text type="line">есть</Text>
        </div>
      </div>
    </div>
  )
}

export default Card
