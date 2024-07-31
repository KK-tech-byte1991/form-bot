
import styles from "./styles.module.css"
import { backArrow, loginEclipseBottom, loginEclipseRight, loginGroup } from '../../assets'
import { Link } from 'react-router-dom'
import { useForm, SubmitHandler } from "react-hook-form"
import { BASE_URL } from "../../services/baseUrl"

import { useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthContext";
import axiosInstance from "../../services/axiosInstance"

type Inputs = {
  username: string
  email: string
  password: string
  confirmPassword: string
}
const SignUp = () => {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()

  const navigate = useNavigate()
  const { login } = useAuth();
  const onSubmit: SubmitHandler<Inputs> = (data) => {

    const payload = JSON.parse(JSON.stringify(data))
    delete payload.confirmPassword
   

    axiosInstance.post(BASE_URL + "auth/register", payload).then((res) => {

      console.log("res", res)     
      
      login(res.data)
      // navigate("/dashboard")
      setTimeout(()=>{navigate("/dashboard")},1000)


    })
  }



  const password = watch('password');

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
              <label
                htmlFor="username"
                className={errors.username && styles.errorlabel}>   Username </label>

              <input
                className={errors.username && styles.errorInput}
                type="text"
                id="username"
                placeholder='Enter a username'
                {...register("username", {
                  required: 'Username is required'
                })} />

              {errors.username ? <p className={styles.errorPara}>{errors.username.message}</p> : <p className={styles.errorPara}></p>}

              <label htmlFor="email" className={errors.email && styles.errorlabel}>    Email </label>
              <input
                // type="email"
                className={errors.email && styles.errorInput}
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
              {errors.email ? <p className={styles.errorPara}>{errors.email.message}</p> : <p className={styles.errorPara} ></p>}

              <label htmlFor="password" className={errors.password && styles.errorlabel}>    Password </label>
              <input
                type="password"
                className={errors.password && styles.errorInput}
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
              {errors.password ? <p className={styles.errorPara}>{errors.password.message}</p> : <p className={styles.errorPara}></p>}

              <label htmlFor="confirmPassword" className={errors.confirmPassword && styles.errorlabel}> Confirm   Password </label>
              <input
                type="password"
                id="confirmPassword"
                className={errors.confirmPassword && styles.errorInput}
                placeholder='********'
                {...register('confirmPassword', {
                  required: 'Please confirm your password',
                  validate: (value) =>
                    value === password || 'Passwords do not match',
                })}
              />
              {errors.confirmPassword ? <p className={styles.errorPara}>{errors.confirmPassword.message}</p> : <p className={styles.errorPara}></p>}

              <button className={styles.logInButton} type="submit" onClick={() => { handleSubmit(onSubmit) }}>Sign Up</button>
              {/* <input type="submit" /> */}
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