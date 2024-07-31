import { useEffect, useState } from "react"
import Flow from "./flow"
import NavBar from "./navBar"

import styles from "./styles.module.css"
import Theme from "./theme"
import Response from "./Response"
import { useNavigate, useParams } from "react-router-dom"
import axiosInstance from "../../services/axiosInstance"
import { ElementInterface, TypeBotInterface } from "../interfaces"
import { toast } from 'sonner';

const TypeBot = () => {
    const [currentState, setCurrentState] = useState("flow")
    const [flow, setFlow] = useState<ElementInterface[]>([])
    const [theme, setTheme] = useState("light")
    const [formName, setFormName] = useState("")
    const params = useParams();
    const navigate = useNavigate()
    const userDetails = JSON.parse(localStorage.getItem("userDetails") || "")
    const [formData, setFormData] = useState<TypeBotInterface | null>(null)
    const [counter,setCounter]=useState({})

    const getTypeBoatById = () => {
        axiosInstance.get(("/typebot/getById/" + params.id)).then((res) => { setFlow(res.data.flow); setFormData(res.data); setFormName(res.data.formName); setTheme(res.data.theme) })
    }
    useEffect(() => {
        params.id !== "new" && getTypeBoatById()
    }, [])

    const getCurrentStateRender = (currentState: string) => {
        switch (currentState) {
            case "flow":
                return <Flow refreshTypeForm={getTypeBoatById} flow={flow} setFlow={setFlow}  counter={counter}
                setCounter={setCounter} />
            case "theme":
                return <Theme theme={theme} setTheme={setTheme} />
            case "response":
                return <Response flow={flow}/>
        }
    }

    console.log("props.params.id", params)
    const handleSave = () => {

        const userId = userDetails.userId
        const folderId = params.folderId
        const payloadwithUserid = { userId, flow, theme, formName }
        const pyloadwithFolderId = { folderId, flow, theme, formName }
        const payLoadForCreate = params.folderId == "userId" ? payloadwithUserid : pyloadwithFolderId
        const payLoadForUpdate = Object.assign(payLoadForCreate, { id: formData?._id })

        params.id == "new" ? axiosInstance.post("/typebot/create", payLoadForCreate)
            .then((res) => {navigate("/typebot/" + res.data._id + "/formId");toast.success("Type Form Created Successfully..")})
            : axiosInstance.put("/typebot/update", payLoadForUpdate)
                .then(() => { toast.success("Type Form Updated Successfully.."); getTypeBoatById() })



    }
    return (
        <div className={styles.container}>
            <NavBar
                currentState={currentState}
                setCurrentState={setCurrentState}
                handleSave={handleSave}
                formName={formName}
                setFormName={setFormName}
                counter={counter}
                setCounter={setCounter}
            />
            {getCurrentStateRender(currentState)}
        </div>
    )
}

export default TypeBot