
import NavBar from './navBar'
import { folderIcon } from '../../assets'
import styles from "./style.module.css"
const Dashboard = () => {
  return (
    <div><NavBar />
      <button className={styles.folderButton}><img src={folderIcon}/>Create a Folder</button>
    </div>
  )
}

export default Dashboard