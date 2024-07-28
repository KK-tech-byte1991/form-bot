
import styles from "./style.module.css"
import hi from "./Hi.svg"
import earth from "./earth.svg"
import hello from "./hello.svg"
const ThemeContent = ({ theme }: any) => {
    const getColor = (theme: string) => {

        switch (theme) {
            case "light":
                return "white"
            case "dark":
                return "black"
            case "tailBlue":
                return "#508C9B"

        }
    }
    return (
        <div className={styles.container} style={{ background: getColor(theme) }}>
            <div className={styles.firstDiv}>
                <img src={earth} alt="earth" />
                <img src={hi} alt="hi" />
            </div>
            <div className={styles.secondDiv}><img src={hello} alt="hello" /></div>
        </div>
    )
}

export default ThemeContent