
import { dark, light, tailBlue } from '../../../../assets'
import styles from "./style.module.css"
interface PropType {
    theme: string,
    // eslint-disable-next-line @typescript-eslint/ban-types
    setTheme: Function
  }
const SideBar = ({ theme, setTheme }:PropType) => {
    return (
        <div className={styles.sideContainer}>
            <p className={styles.title}>Customize the theme</p>
            <img src={light} style={{border: theme=="light"?"2px solid blue":"none"}} alt="light" onClick={() => setTheme("light")} />
            <img src={dark} style={{border: theme=="dark" ?"2px solid blue":"none"}} alt="dark" onClick={() => setTheme("dark")} />
            <img src={tailBlue}style={{border: theme=="tailBlue" ?"2px solid blue":"none"}} alt="tailblue" onClick={() => setTheme("tailBlue")} />
        </div>
    )
}

export default SideBar