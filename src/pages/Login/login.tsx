import React from 'react'
import styles from "./styles.module.css"
import { backArrow, loginEclipseBottom, loginEclipseRight, loginGroup } from '../../assets'
import { Link } from 'react-router-dom'
const Login = () => {
    return (
        <div className={styles.parent}>
            <div className={styles.header}>
                <Link to="/"><img src={backArrow} alt="back" /></Link>
            </div>
            <div className={styles.container}>
                <div><img src={loginGroup} alt="loginGroup" /></div>
                <div className={styles.secondDiv}>
                    <div className={styles.form}>
                        <label>    Email </label>
                        <input type="text" placeholder='Enter your email' />
                        <br />
                        <label>    Password </label>
                        <input type="password" placeholder='password' />
                        <br />
                        <button className={styles.logInButton}>Log In</button>
                        <br />
                        <p>Don’t have an account? <Link to="/signup"><span style={{ color: "blue" }}>Register now</span></Link></p>
                    </div>
                    <img className={styles.bottomImage} src={loginEclipseBottom} alt="loginEclipseBottom" />
                </div>
                <div className={styles.thirdDiv}><img src={loginEclipseRight} alt="loginEclipseRight" /></div>

            </div>
        </div>
    )
}

export default Login