
import { startFlow } from "../../../../assets"
import styles from "./style.module.css"
import Element from "./Element"
import { ElementInterface } from "../../../interfaces"
interface Proptypes{
  flow: ElementInterface[],
  // eslint-disable-next-line @typescript-eslint/ban-types
  setFlow: Function
}
const Flow = ({ flow, setFlow }: Proptypes) => {
  return (
    <div className={styles.containerFlow}>
      <img style={{ width: "300px" }} src={startFlow} alt="startFlow" />
      {flow.map((element: ElementInterface, index: number) => <Element
        key={index}
        element={element}
        index={index}
        setFlow={setFlow}
        flow={flow}
      />)}
    </div>
  )
}

export default Flow