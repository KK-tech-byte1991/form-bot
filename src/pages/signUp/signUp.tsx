
import styles from "./styles.module.css"
import { backArrow, loginEclipseBottom, loginEclipseRight, loginGroup } from '../../assets'
import { Link } from 'react-router-dom'
const SignUp = () => {
  return (
    <div className={styles.parent}>
      <div className={styles.header}>
        <Link to="/"><img src={backArrow} alt="back" /></Link>
      </div>
      <div className={styles.container}>
        <div><img src={loginGroup} alt="loginGroup" /></div>
        <div className={styles.secondDiv}>
          <div className={styles.form}>
          <label>   Username </label>
          <input type="text" placeholder='Enter a username' />
          <br/>
            <label>    Email </label>
            <input type="text" placeholder='Enter your email' />
            <br />
            <label>    Password </label>
            <input type="password" placeholder='********' />
            <br />
            <label> Confirm   Password </label>
            <input type="password" placeholder='********' />
            <br />
            <button className={styles.logInButton}>Log In</button>
            <br />
            <p>Already have an account ? <Link to="/login"><span style={{ color: "blue" }}> Login</span></Link></p>
          </div>
          <img className={styles.bottomImage} src={loginEclipseBottom} alt="loginEclipseBottom" />
        </div>
        <div className={styles.thirdDiv}><img src={loginEclipseRight} alt="loginEclipseRight" /></div>

      </div>
    </div>
  )
}

export default SignUp