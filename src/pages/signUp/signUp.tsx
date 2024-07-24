
import styles from "./styles.module.css"
import { backArrow, loginEclipseBottom, loginEclipseRight, loginGroup } from '../../assets'
import { Link } from 'react-router-dom'
import { useForm, SubmitHandler } from "react-hook-form"
type Inputs = {
  username: string
  email: string
  password: string
}
const SignUp = () => {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)
  return (
    <div className={styles.parent}>
      <div className={styles.header}>
        <Link to="/"><img src={backArrow} alt="back" /></Link>
      </div>
      <div className={styles.container}>
        <div><img src={loginGroup} alt="loginGroup" /></div>
        <div className={styles.secondDiv}>

          <div className={styles.form}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor="username">   Username </label>
              <input
                type="text"
                id="username"
                placeholder='Enter a username'
                {...register("username", {
                  required: 'Username is required'
                })} />
              {errors.username ? <p>{errors.username.message}</p> : <p></p>}
              <label htmlFor="email">    Email </label>
              <input
                // type="email"
                id="email"
                placeholder='Enter your email'
                {...register("email", {
                  required: 'Email is required.',
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: 'Enter a valid email address.'
                  }

                })}
              />
              {errors.email ? <p>{errors.email.message}</p> : <p ></p>}

              <label htmlFor="password">    Password </label>
              <input
                type="password"
                id="password"
                placeholder='********'
                {...register('password', {
                  required: 'Password is required',
                  minLength: {
                    value: 6,
                    message: 'Password must be at least 6 characters long'
                  }
                })}
              />
              <br />
              <label htmlFor="confirmPassword"> Confirm   Password </label>
              <input type="password" id="confirmPassword" placeholder='********' />
              <br />
              <button className={styles.logInButton}>Log In</button>
              <br />
              <p>Already have an account ? <Link to="/login"><span style={{ color: "blue" }}> Login</span></Link></p>
            </form>

          </div>
          <img className={styles.bottomImage} src={loginEclipseBottom} alt="loginEclipseBottom" />
        </div>
        <div className={styles.thirdDiv}><img src={loginEclipseRight} alt="loginEclipseRight" /></div>

      </div>
    </div>
  )
}

export default SignUp