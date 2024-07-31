

import { ElementInterface } from "../../interfaces"
import FlowDisplay from "./FlowDisplay"
import SideBar from "./sidebar"
import styles from "./styles.module.css"

interface Proptypes {
  flow: ElementInterface[],
  // eslint-disable-next-line @typescript-eslint/ban-types
  setFlow: Function,
  // eslint-disable-next-line @typescript-eslint/ban-types
  refreshTypeForm: Function,
  counter: unknown,
  // eslint-disable-next-line @typescript-eslint/ban-types
  setCounter: Function
}
const Flow = ({ flow, setFlow, refreshTypeForm, counter, setCounter }: Proptypes) => {

  console.log("Flow", flow)
  return (
    <div className={styles.container}>
      <SideBar flow={flow} setFlow={setFlow} counter={counter}
        setCounter={setCounter} />
      <FlowDisplay refreshTypeForm={refreshTypeForm} flow={flow} setFlow={setFlow} />
    </div>
  )
}

export default Flow