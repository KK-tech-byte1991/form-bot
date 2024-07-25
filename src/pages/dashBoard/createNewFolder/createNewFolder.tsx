
import { SubmitHandler, useForm } from "react-hook-form"
import styles from "./style.module.css"
import axiosInstance from "../../../services/axiosInstance"

type Inputs = {
    folderName: string

}
const CreateNewFolder = ({ handleClose, getFolderList }: any) => {
    const userDetails = JSON.parse(localStorage.getItem("userDetails") || "")

    const onSubmit: SubmitHandler<Inputs> = (data) => {

        let payload = JSON.parse(JSON.stringify(data))
        payload.userId = userDetails.userId
        axiosInstance.post( "folder/create", payload).then((res) => {
            console.log("res", res)
            getFolderList()
            handleClose(false)
        })
    }

    const {
        register,
        handleSubmit,

        formState: { errors },
    } = useForm<Inputs>()
    return (
        <div className={styles.container}>

            <h1 className={styles.heading}>Create New Folder</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="text"
                    className={styles.folderInputName}
                    placeholder='Enter folder name'
                    {...register("folderName", {
                        required: 'FolderName is required'
                    })}
                />
                {errors.folderName ? <p className={styles.errorPara}>{errors.folderName.message}</p> : <p className={styles.errorPara}></p>}

                <div className={styles.buttonContainer}>
                    <button className={styles.button} type="submit" onClick={() => { handleSubmit(onSubmit) }} >Done</button>

                    <button
                        className={styles.button}
                        onClick={() => handleClose(false)}>Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default CreateNewFolder