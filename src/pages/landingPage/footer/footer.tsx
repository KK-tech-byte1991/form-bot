
import styles from "./style.module.css"
import { goTo } from '../../../assets'
const Footer = () => {
    return (
        <div className={styles.container}>
            <div></div>
            <ul>
                <li>Made with ❤️ by</li>
                <li>@cuvette</li>
            </ul>
            <ul>
                <li>Status <img src={goTo} alt="goto" /></li>
                <li>Documentation  <img src={goTo} alt="goto" /></li>
                <li>RoadMap  <img src={goTo} alt="goto" /></li>
                <li>Pricing </li>
            </ul>
            <ul>
                <li>Discord <img src={goTo} alt="goto" /></li>
                <li>Github repository <img src={goTo} alt="goto" /></li>
                <li>Twiiter  <img src={goTo} alt="goto" /></li>
                <li>Linkedin<img src={goTo} alt="goto" /> </li>
                <li>OSS friends</li>
            </ul>
            <ul>

                <li>About </li>
                <li>Contact </li>
                <li>Terms Of Service  </li>
                <li>Privacy Policy </li>

            </ul>
        </div>
    )
}

export default Footer