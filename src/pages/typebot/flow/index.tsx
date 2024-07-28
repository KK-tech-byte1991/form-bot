
import FlowDisplay from "./FlowDisplay"
import SideBar from "./sidebar"
import styles from "./styles.module.css"
const Flow = () => {
  return (
    <div className={styles.container}>
    <SideBar/>
    <FlowDisplay/>
    </div>
  )
}

export default Flow