import { useState } from "react"
import Flow from "./flow"
import NavBar from "./navBar"

import styles from "./styles.module.css"
import Theme from "./theme"
import Response from "./Response"

const TypeBot = () => {
    const [currentState, setCurrentState] = useState("flow")
    const getCurrentStateRender = (currentState: string) => {
        switch (currentState) {
            case "flow":
                return <Flow />
            case "theme":
                return <Theme />
            case "response":
                return <Response />
        }
    }
    return (
        <div className={styles.container}>
            <NavBar
                currentState={currentState}
                setCurrentState={setCurrentState} />
            {getCurrentStateRender(currentState)}
        </div>
    )
}

export default TypeBot