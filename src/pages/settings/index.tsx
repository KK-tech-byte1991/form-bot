
import { useState } from "react"
import styles from "./style.module.css"
import axiosInstance from "../../services/axiosInstance"
import { toast } from "sonner"
import { useNavigate } from "react-router-dom"
import { logoutIcon } from "../../assets"
import { useAuth } from "../../AuthContext"


const Settings = () => {
    let userDetails = JSON.parse(localStorage.getItem("userDetails") || "")
    const { logout } = useAuth()
    const navigate = useNavigate()
    const [name, setName] = useState(userDetails.username)
    const [password, setPassword] = useState("")
    const [oldPassword, setOldPassword] = useState("")
    const [email, setEmail] = useState(userDetails.email)

    const handleUpdate = () => {
        axiosInstance.post("/auth/update", { id: userDetails.userId, name, password, email, oldPassword })
            .then((res: any) => {
                toast.success("User Details Updated Successfully!!!")

                sessionStorage.setItem("userDetails", JSON.stringify(res.data))
                setPassword("")
                setOldPassword("")
                if (password || email !== userDetails.email) {
                    sessionStorage.clear();
                    navigate("/")
                }
            })

            // .catch((err) => toast.error(err.response.data))
    }
    return (
        <div className={styles.container}>
            <h3 className={styles.heading}>Settings</h3>
            <div className={styles.settingContainer}>
                <div className={styles.inputContainer}>
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}


                        onChange={(e) => setName(e.target.value)}
                    />

                </div>

                <div className={styles.inputContainerLock}>
                    <input type="text"
                        placeholder="Update email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                </div>

                <div className={styles.inputContainerLock}>
                    <input value={oldPassword}
                        type='password'
                        placeholder="Old Password"
                        onChange={(e) => setOldPassword(e.target.value)} />

                </div>

                <div className={styles.inputContainerLock}>
                    <input value={password}
                        type='password'
                        placeholder="New Password"
                        onChange={(e) => setPassword(e.target.value)} />

                </div>


                <button type="submit" className={styles.currentFunctionButton}
                    onClick={handleUpdate}
                >Update</button >

            </div>
            <button
                style={{
                    position: "absolute",
                    left: "40px",
                    bottom: "70px",
                    backgroundColor: "transparent",
                    border: "none"
                }}
                onClick={() => logout()}> <img src={logoutIcon} alt="logout" /></button>
        </div>
    )
}

export default Settings 