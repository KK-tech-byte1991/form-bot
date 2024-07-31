
import { useParams } from "react-router-dom"
import styles from "./style.module.css"
import { BASE_URL } from "../../services/baseUrl"
import axios, { AxiosResponse } from "axios"
import { useEffect, useState } from "react"
import { getColor } from "../../services/themeColor"
import { ElementInterface, TypeBotInterface } from "../interfaces"
import DisplayElement from "./DisplayEelement"


const Public = () => {

    const [flowSchema, setFlowSchema] = useState<TypeBotInterface>()
    const [responseId, setResponseId] = useState(null)
    const params = useParams();

    const getTypebot = () => {
        axios.get(BASE_URL + "public/getById/" + params.id).then((res: AxiosResponse) => {
            setFlowSchema(res.data)

        })
    }
    console.log(flowSchema)
    useEffect(() => {
        getTypebot()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const [currentIndex, setCurrentIndex] = useState(0)
    const handleSubmit = (element: { name: string, value: string }) => {
        // const element = {
        //     name: name,
        //     value: value
        // }
        const payload = {
            formId: params.id,
            elementResponse: [element]
        }
        const uploadPayload = { element: element }
        !responseId ? axios.post(BASE_URL + "public/createResponse/", payload).then((res) => {
            setResponseId(res.data._id)
            setCurrentIndex(currentIndex + 1)
        })
            :
            axios.put(BASE_URL + "public/updateResponse/" + responseId, uploadPayload).then(() => {
                // toast.success("Added")
                setCurrentIndex(currentIndex + 1)
            })
    }
    return (
        <div className={styles.chatContainer} style={{ backgroundColor: flowSchema?.theme ? getColor(flowSchema?.theme) : "black" }}>

            {flowSchema?.flow.map((elem: ElementInterface, index: number) => (index <= currentIndex ? <DisplayElement
                index={index}
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
                handleSubmit={handleSubmit}
                element={elem} /> : null))}

        </div>
    )
}

export default Public