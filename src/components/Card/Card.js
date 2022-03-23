import React from "react"

import Styles from "./Card.module.scss"

function Card() {
  return (
    <div className={Styles.card}>
      <img src="/assets/images/1.svg" alt="MyPhoto" />
      <div className={Styles.info}>
        <div className={Styles.hat}>
          <h2>Харин Михаил</h2>
          <span>09.10.1999</span>
        </div>
        <ul>
          <li>
            <b>Город: </b>
            <span>Томск</span>
          </li>
          <li>
            <b>Пол: </b>
            <span>
              мужчина <img src="/assets/icons/male.svg" alt="Male" />
            </span>
          </li>
          <li>
            <b>Возраст: </b>
            <span>22</span>
          </li>
        </ul>
        <div className={Styles.about}>
          <b>О себе: </b>
          <span>
            Всем привет! Меня зовут Миша, мне 22 года, я студент. Учусь на программиста уже пятый
            год и подумал пора бы и поработать по специальности) По гороскопу весы, люблю закаты и
            знойных женщин :*
          </span>
        </div>
        <div className={Styles.pet}>
          <img src="/assets/icons/pet_food.svg" alt="Food" />
          <b>Домашнее животное: </b>
          <span>есть</span>
        </div>
      </div>
    </div>
  )
}

export default Card
