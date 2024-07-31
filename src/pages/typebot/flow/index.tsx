

import { ElementInterface } from "../../interfaces"
import FlowDisplay from "./FlowDisplay"
import SideBar from "./sidebar"
import styles from "./styles.module.css"

interface Proptypes{
  flow: ElementInterface[],
  // eslint-disable-next-line @typescript-eslint/ban-types
  setFlow: Function
}
const Flow = ({ flow, setFlow }: Proptypes) => {

  console.log("Flow", flow)
  return (
    <div className={styles.container}>
      <SideBar flow={flow} setFlow={setFlow} />
      <FlowDisplay flow={flow} setFlow={setFlow} />
    </div>
  )
}

export default Flow