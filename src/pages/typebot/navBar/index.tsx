
import { toast } from "sonner";
import styles from "./style.module.css"
import { useParams } from "react-router-dom";
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

const params=useParams()


    console.log("currentState", currentState)

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text)
          .then(() => {
            toast.success('Link Copied', {
              style: {
                borderRadius: '12px',
                border: '1px solid var(--Light-Sucess-border, #48C1B5)',
                background: 'var(--Light-Sucess-background, #F6FFF9)',
                boxShadow: '0px 4px 16px 0px rgba(16, 11, 39, 0.08)',
                width: "200px"
              }
    
            });
          })
          .catch(err => {
            console.error('Failed to copy text: ', err);
          });
        // closePopup()
      };
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
                <button className={styles.shareButton} onClick={()=>copyToClipboard(window.location.origin+"/flow/"+params.id)}>Share</button>
                <button className={styles.saveButton} onClick={() => handleSave()}>Save</button>
                <button className={styles.cancelButton}>X</button>
            </div>
        </div>
    )
}

export default NavBar