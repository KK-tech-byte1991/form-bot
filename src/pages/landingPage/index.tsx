import React from 'react'
import NavBar from './navBar/navBar'
import styles from "./styles.module.css"
import BannerOne from './bannerOne'
import BannerTwo from './bannerTwo'
import BannerThree from './bannerThree'
const Landing = () => {
    return (<div className={styles.container}>
        <NavBar />
        <BannerOne/>
        <BannerTwo/>
        <BannerThree/>
        </div>
    )
}

export default Landing
