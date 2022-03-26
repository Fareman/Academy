import React from "react"

import PropTypes from "prop-types"

import Styles from "./ProgressBar.module.scss"

function ProgressBar(props) {
  return (
    <div>
      <progress value={props.value} max={props.max} />
    </div>
  )
}

ProgressBar.PropTypes = {
  value: PropTypes.number.isRequired,
  max: PropTypes.number,
}
ProgressBar.defaultProps = {max: 100}

export default ProgressBar
