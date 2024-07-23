
import styles from "./styles.module.css"
import favicon from "../../../assets/favicon.svg"
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <div className={styles.parent}>
            <div className={styles.brandContainer}>
                <img src={favicon} alt="brand" />
                <p className={styles.brandName}>FormBot</p>
            </div>

            <div className={styles.rightContainer}>

                <Link to="login"><button className={styles.signInButton} >Sign In</button></Link>
                <button className={styles.createFormButton}>Create a FormBot</button>
            </div>
        </div>
    )
}

export default NavBar