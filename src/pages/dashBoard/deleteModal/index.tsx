

import styles from "./style.module.css"
import axiosInstance from "../../../services/axiosInstance"


const DeleteFolder = ({ handleClose, getFolderList, selectedFolder }: any) => {
    // const userDetails = JSON.parse(localStorage.getItem("userDetails") || "")

    const onSubmit = () => {



        axiosInstance.delete("folder/" + selectedFolder,).then((res) => {
            console.log("res", res)
            getFolderList()
            handleClose(false)
        })
    }

 
    return (
        <div className={styles.container}>

            <h1 className={styles.heading}>Are you sure you want to delete this folder ?</h1>
            


            <div className={styles.buttonContainer}>
                <button className={styles.button}
                    type="submit"
                    onClick={onSubmit} >Confirm</button>

                <button
                    className={styles.button}
                    onClick={() => handleClose(false)}>Cancel</button>
            </div>
         
        </div>
    )
}

export default DeleteFolder