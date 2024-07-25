
import NavBar from './navBar/navBar'
import styles from "./styles.module.css"
import BannerOne from './bannerOne'
import BannerTwo from './bannerTwo'
import BannerThree from './bannerThree'
import Footer from './footer/footer'
const Landing = () => {
    return (<div className={styles.container}>
        <NavBar />
        <BannerOne/>
        <BannerTwo/>
        <BannerThree/>
        <Footer/>
        </div>
    )
}

export default Landing
