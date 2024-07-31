

import { ElementInterface } from "../../interfaces"
import FlowDisplay from "./FlowDisplay"
import SideBar from "./sidebar"
import styles from "./styles.module.css"

interface Proptypes{
  flow: ElementInterface[],
  // eslint-disable-next-line @typescript-eslint/ban-types
  setFlow: Function,
  // eslint-disable-next-line @typescript-eslint/ban-types
  refreshTypeForm:Function
}
const Flow = ({ flow, setFlow ,refreshTypeForm}: Proptypes) => {

  console.log("Flow", flow)
  return (
    <div className={styles.container}>
      <SideBar flow={flow} setFlow={setFlow} />
      <FlowDisplay refreshTypeForm={refreshTypeForm} flow={flow} setFlow={setFlow} />
    </div>
  )
}

export default Flow