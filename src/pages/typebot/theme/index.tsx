import  { useState } from 'react'
import SideBar from './sidebar'
import styles from "./style.module.css"

import ThemeContent from './themeContent'
const Theme = () => {

  const [theme,setTheme]=useState("light")
  return (
    <div className={styles.themeContainer}>
      <SideBar theme={theme} setTheme={setTheme} />
      <ThemeContent theme={theme}   />
      
    </div>
  )
}

export default Theme