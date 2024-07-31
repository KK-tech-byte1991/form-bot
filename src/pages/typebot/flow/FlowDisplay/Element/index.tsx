
import { useEffect, useState } from "react"
import styles from "./style.module.css"
import { ElementInterface } from "../../../../interfaces"
import { deleteIcon } from "../../../../../assets"
import axiosInstance from "../../../../../services/axiosInstance"
import { toast } from "sonner"
interface PropTypes {
    element: ElementInterface,
    index: number,
    // eslint-disable-next-line @typescript-eslint/ban-types
    setFlow: Function,
    flow: ElementInterface[],
    // eslint-disable-next-line @typescript-eslint/ban-types
    refreshTypeForm:Function
}
const Element = ({ element, index, setFlow, flow ,refreshTypeForm}: PropTypes) => {

    const [textValue, setTextValue] = useState<string | null>(null)
    const [error, setError] = useState<string | null>(null);

    const handleEdit = (value: string) => {
        setTextValue(value)
        const updatedValue = JSON.parse(JSON.stringify(element))
        updatedValue.link = value
        const updatingFlow = JSON.parse(JSON.stringify(flow))
        updatingFlow[index] = updatedValue
        setFlow(updatingFlow)
    }
    useEffect(() => {
        textValue?.length == 0 ? setError("Field Required") : setError(null)
    }, [textValue])
    console.log(textValue, textValue?.length, "textValue")
    const handleDelete = () => {
        axiosInstance.delete("/typebot/deleteElement/" + element._id).then(() => {toast.success("Deleted SuccessFully");refreshTypeForm()})


    }
    return (
        <div className={styles.container}>
            <img
                src={deleteIcon}
                onClick={() => handleDelete()}
                className={styles.deleteButton}
                alt="delete" />
            <p className={styles.heading}>{element.name}</p>

            {element.type == "bubble" && <><input
                type="text"
                required
                value={element.link}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => { handleEdit(e.target.value) }}
                placeholder={element.category != "textBubble" ? "Click to add link" : "Click here to edit"} />

                {error && <p className={styles.note}>Required Field</p>}</>}
            {element.type == "input" && (element.category == "buttonInput" ? <><input
                type="text"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    handleEdit(e.target.value)
                }} />{error && <p className={styles.note}>Required Field</p>}</> : <p className={styles.note}>Hint : User will input a text on his form</p>)}

        </div>
    )
}

export default Element