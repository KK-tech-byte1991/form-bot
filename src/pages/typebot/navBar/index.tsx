
import styles from "./style.module.css"
interface PropTypes {
    currentState: string,
    // eslint-disable-next-line @typescript-eslint/ban-types
    setCurrentState: Function,
    // eslint-disable-next-line @typescript-eslint/ban-types
    handleSave: Function,
    formName: string,
    // eslint-disable-next-line @typescript-eslint/ban-types
    setFormName: Function
}

const NavBar = ({ currentState, setCurrentState, handleSave, formName, setFormName }: PropTypes) => {

    // const userDetails = JSON.parse(localStorage.getItem("userDetails") || "")




    console.log("currentState", currentState)


    return (
        <div className={styles.parent}>
            {currentState == "flow" ? <input
                type="text"
                placeholder="Enter Form Name"
                className={styles.formName}
                value={formName}
                onChange={(e) => setFormName(e.target.value)} /> : <div></div>}
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
                <button className={styles.saveButton} onClick={() => handleSave()}>Save</button>
                <button className={styles.cancelButton}>X</button>
            </div>
        </div>
    )
}

export default NavBar