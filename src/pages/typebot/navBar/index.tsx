
import styles from "./style.module.css"


const NavBar = ({ currentState, setCurrentState }: any) => {

    // const userDetails = JSON.parse(localStorage.getItem("userDetails") || "")



   
    console.log("currentState", currentState)


    return (
        <div className={styles.parent}>
           {currentState=="flow" ? <input type="text" placeholder="Enter Form Name" className={styles.formName} />:<div></div>}
            <div className={styles.popupContainer}>
                <button 
                onClick={() => setCurrentState("flow")}
                    className={currentState == "flow" ? styles.popupSelected : styles.popup}>Flow
                </button>

                <button
                 onClick={() => setCurrentState("theme")}
                 className={currentState == "theme" ? styles.popupSelected : styles.popup}>Theme
                </button>
                <button onClick={() => setCurrentState("response")}
                    className={currentState == "response" ? styles.popupSelected : styles.popup}>Response
                </button>

            </div>
            <div className={styles.buttonContainer}>
                <button className={styles.shareButton}>Share</button>
                <button className={styles.saveButton}>Save</button>
                <button className={styles.cancelButton}>X</button>
            </div>
        </div>
    )
}

export default NavBar