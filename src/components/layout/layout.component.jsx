import React from 'react'

import Menu from './menu.component'

import "./layout.styles.scss"

//This component wrap the entire app to fix the Menu component at bottom.
function Layout({children}) {
  return (
    <div className='layout-container'>
      {children}
      <Menu />
    </div>
  )
}

export default Layout
