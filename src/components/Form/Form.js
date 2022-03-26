import React, {useEffect, useState} from "react"
import {useForm} from "react-hook-form"

import Styles from "./Form.module.scss"

import Info from "../Atoms/Info"
import Text from "../Atoms/Text"
import Input from "../Atoms/Input"
import Button from "../Atoms/Button/Button"
import FileUploader from "../Atoms/FileUploader/FileUploader"

export default function Form() {
  //File upload
  const {register, handleSubmit} = useForm()
  //Validation
  const [username, setUsername] = useState("")
  const [description, setDescription] = useState("")
  const [usernameDirty, setUsernameDirty] = useState(false)
  const [descriptionDirty, setDescriptionDirty] = useState(false)
  const [usernameError, setUsernameError] = useState("Поле необходимо заполнить")
  const [descriptionError, setDescriptionError] = useState("Поле необходимо заполнить")
  const [formValid, setFormValid] = useState(false)

  useEffect(() => {
    if (usernameError || descriptionError) {
      setFormValid(false)
    } else {
      setFormValid(true)
    }
  }, [usernameError, descriptionError])

  const changeHandler = (e) => {
    switch (e.target.name) {
      case "username":
        setUsername(e.target.value)
        var Regex = /^(?=.{8,20}$)(?![_. ])(?!.*[_. ]{2})[a-zA-Zа-яА-Я._ ]+(?<![_.])$/
        if (!Regex.test(String(e.target.value).toLowerCase())) {
          setUsernameError("8-20 символов. ")
        } else {
          setUsernameError("")
        }
        break

      case "description":
        setDescription(e.target.value)
        var Regex = /^(?=.{50,200}$)(?![_. ])(?!.*[_. ]{2})[a-zA-Zа-яА-Я!?._ ]+(?<![_.])$/
        if (!Regex.test(String(e.target.value).toLowerCase())) {
          setDescriptionError("50-200 символов.")
        } else {
          setDescriptionError("")
        }
        break
    }
  }

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "username":
        setUsernameDirty(true)
        break
      case "description":
        setDescriptionDirty(true)
        break
    }
  }
  return (
    <form className={Styles.form} onSubmit={handleSubmit}>
      <Text type="h3">Отзыв</Text>

      <div className={Styles.firstQ}>
        <Input
          onChange={(e) => changeHandler(e)}
          onBlur={(e) => blurHandler(e)}
          value={username}
          error={usernameDirty && usernameError}
          errorText={usernameError}
          name="username"
          type="input"
          label
          text="Как вас зовут?"
          placeholder="Имя Фамилия"
        />
        <FileUploader ref={register} />
      </div>

      <Input
        onChange={(e) => changeHandler(e)}
        onBlur={(e) => blurHandler(e)}
        value={description}
        error={descriptionDirty && descriptionError}
        errorText={descriptionError}
        name="description"
        type="textArea"
        label
        text="Все ли вам понравилось?"
        placeholder="Напишите пару слов о вашем опыте..."
      />

      <div className={Styles.formBottom}>
        <Button disabled={!formValid}>
          <Text type="button">Отправить отзыв</Text>
        </Button>

        <Info />
      </div>
    </form>
  )
}
