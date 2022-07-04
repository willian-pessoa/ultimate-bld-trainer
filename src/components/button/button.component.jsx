import React from 'react'

import "./button.styles.scss"

function Button({children, ...otherProps}) {
  return (
    <button className='btn-default' {...otherProps}>{children}</button>
  )
}

export default Button