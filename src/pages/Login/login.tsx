
import styles from "./styles.module.css"
import { backArrow, loginEclipseBottom, loginEclipseRight, loginGroup } from '../../assets'
import { Link, useNavigate } from 'react-router-dom'
import { SubmitHandler, useForm } from "react-hook-form"
import { useAuth } from "../../AuthContext"
import axiosInstance from "../../services/axiosInstance"
type Inputs = {
    username: string
    password: string
}
const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>()
    const { login } = useAuth();
    const navigate = useNavigate();
    const onSubmit: SubmitHandler<Inputs> = (data) => {

        let payload = JSON.parse(JSON.stringify(data))

        axiosInstance.post("auth/login", payload).then((res) => {
            console.log("res", res)
            login(res.data)
            navigate("/dashboard")
        })
    }
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



                            <label htmlFor="password" className={errors.password && styles.errorlabel}>    Password </label>
                            <input
                                type="password"
                                className={errors.password && styles.errorInput}
                                id="password"
                                placeholder='********'
                                {...register('password', {
                                    required: 'Password is required',
                                })}
                            />
                            {errors.password ? <p className={styles.errorPara}>{errors.password.message}</p> : <p className={styles.errorPara}></p>}


                            <button className={styles.logInButton} type="submit" onClick={() => { handleSubmit(onSubmit) }}>Log In</button>
                            {/* <input type="submit" /> */}
                            <br />
                            <p>Don’t have an account? <Link to="/signup"><span style={{ color: "blue" }}>Register now</span></Link></p>

                        </form></div>

                    <img className={styles.bottomImage} src={loginEclipseBottom} alt="loginEclipseBottom" />
                </div>
                <div className={styles.thirdDiv}><img src={loginEclipseRight} alt="loginEclipseRight" /></div>

            </div>
        </div>
    )
}

export default Login