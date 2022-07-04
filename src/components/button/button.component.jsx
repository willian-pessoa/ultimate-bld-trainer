import React from 'react'

import "./button.styles.scss"

function Button({children}) {
  return (
    <button className='btn-default'>{children}</button>
  )
}

export default Button