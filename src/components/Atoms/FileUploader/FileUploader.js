import React from "react"
import Button from "../Button/Button"
import Text from "../Text/Text"

function FileUploader(ref, props) {
  const hiddenFileInput = React.useRef(ref)

  const handleClick = (event) => {
    hiddenFileInput.current.click()
    event.preventDefault()
  }
  const handleChange = (event) => {
    const fileUploaded = event.target.files[0]
    props.handleFile(fileUploaded)
  }
  return (
    <div>
      <Button add onClick={handleClick}>
        <Text type="button">Загрузить фото</Text>
      </Button>
      <input type="file" ref={hiddenFileInput} onChange={handleChange} style={{display: "none"}} />
    </div>
  )
}

export default FileUploader
