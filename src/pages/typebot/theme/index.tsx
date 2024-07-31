
import SideBar from './sidebar'
import styles from "./style.module.css"

import ThemeContent from './themeContent'
interface PropType {
  theme: string,
  // eslint-disable-next-line @typescript-eslint/ban-types
  setTheme: Function
}
const Theme = ({ theme, setTheme }: PropType) => {


  return (
    <div className={styles.themeContainer}>
      <SideBar theme={theme} setTheme={setTheme} />
      <ThemeContent theme={theme} />

    </div>
  )
}

export default Theme