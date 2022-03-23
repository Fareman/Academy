import React, {useState} from "react"

import Styles from "./ReviewBlock.module.scss"

import Slider from "../Slider/Slider"
import Message from "../Message/Message"
import Modal from "../Modal/Modal"
import Form from "../Form/Form"
import Button from "../Atoms/Button/Button"

const arr = [
  {
    id: 1,
    photo: "/assets/images/3.svg",
    name: "Буба Бубенцов",
    date: "08.01.2022",
    comment:
      "Отличный коллектив, руководители понимают сам процесс работы каждого сотрудника и помогают всем без исключения. Система KPI позволяет реально хорошо зарабатывать по простому принципу - чем больше и лучше ты работаешь, тем больше денег получаешь. Соцпакет - отличная страховка ДМС, организовали курсы английского языка бесплатно, оплачивают тренажерный зал. Зарплату выплачивают всегда вовремя.",
  },
  {
    id: 2,
    photo: "/assets/icons/avatar.svg",
    name: "Илья Анташкевич",
    date: "08.01.2022",
    comment:
      "Год назад попытал счастье, откликнулся на вакансию, прошел собес и попал в компанию. Долго переживал что будет тяжело влиться, но тут прям классные ребята работают, все на одной волне. Всегда готовы помочь с любым вопросом. Для эффективной работы здесь нужно хорошо знать иностранные языки.",
  },
  {
    id: 3,
    photo: "/assets/images/2.svg",
    name: "Юрина Маргарита",
    date: "26.12.2021",
    comment:
      "Наша компания благодарна фирме ilink за сотрудничество. Хотелось бы отметить отличную работу сотрудников: все было выполнено качественно, со знанием дела, в установленные сроки. За время работы с компанией значительно увеличилась аудитория, сайт приносит стабильный доход, контент уникальный, грамотный и качественный. Будет продолжать работу и дальше. Мы довольны, что доверили создание сайта компании ilink.",
  },
  {
    id: 4,
    photo: "/assets/images/4.svg",
    name: "Дмитрий Иванов",
    date: "16.12.2021",
    comment:
      "Отвечала за найм и адаптацию сотрудников в компании, за поддержание на нужном уровне HR-бренда и трудового настроя коллектива. В компанию пришла без опыта работы HR-ом. Всему научилась здесь. Как теории, так и практике. Набрала опыт достаточно быстро. Есть программа обучения, поощряются различные курсы, и это большой плюс. В коллективе очень дружная атмосфера. Все дружелюбные, амбициозные.",
  },
]

function ReviewBlock() {
  const [modalActive, setModalActive] = useState(false)
  return (
    <div className={Styles.review}>
      <div className={Styles.comments}>
        <div className={Styles.commentsHat}>
          <span>Отзывы</span>
          <Button add onClick={() => setModalActive(true)}>
            Добавить отзыв
          </Button>
        </div>

        <Slider slides={arr} />
      </div>

      <div className={Styles.arrows}>
        <button className={Styles.left} onClick={Slider.navigation.prevEl}>
          <img src="/assets/icons/arrow.svg" alt="LeftArrow" />
        </button>
        <button className={Styles.right} onClick={Slider.navigation.nextEl}>
          <img src="/assets/icons/arrow.svg" alt="RightArrow" />
        </button>
      </div>

      <Modal active={modalActive} setActive={setModalActive}>
        <Form />
      </Modal>
    </div>
  )
}

export default ReviewBlock
