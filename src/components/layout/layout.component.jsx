import React from 'react'

import Menu from './menu.component'

import "./layout.styles.scss"

function Layout({children}) {
  return (
    <div className='layout-container'>
      {children}
      <Menu />
    </div>
  )
}

export default Layout
