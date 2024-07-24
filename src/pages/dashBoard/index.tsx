
import NavBar from './navBar'
import { addFolderButton, folderIcon } from '../../assets'
import styles from "./style.module.css"
import { useEffect, useState } from 'react'

import axiosInstance from '../../services/axiosInstance'
interface Folder {
  folderName: string,
  id: string

}
const Dashboard = () => {
  const userDetails = JSON.parse(localStorage.getItem("userDetails") || "")
  const [folderList, setFolderList] = useState<Folder[]>([])
  useEffect(() => {
    axiosInstance.get("/folder/getByUserId/" + userDetails.userId).then((res) => {
      setFolderList(res.data)
    })
  }, [])

  console.log("folderList", folderList)
  return (
    <div>
      <NavBar />
      <div className={styles.folderContainer}>
        <button className={styles.folderButton}><img src={folderIcon} />Create a Folder</button>
        {folderList.map((folder: Folder) => <button className={styles.folderButton}><img src={folderIcon} />{folder.folderName}</button>)}

        {folderList.map((folder: Folder) => <button className={styles.folderButton}><img src={folderIcon} />{folder.folderName}</button>)}

        {folderList.map((folder: Folder) => <button className={styles.folderButton}><img src={folderIcon} />{folder.folderName}</button>)}
        {folderList.map((folder: Folder) => <button className={styles.folderButton}><img src={folderIcon} />{folder.folderName}</button>)}
        {folderList.map((folder: Folder) => <button className={styles.folderButton}><img src={folderIcon} />{folder.folderName}</button>)}
        {folderList.map((folder: Folder) => <button className={styles.folderButton}><img src={folderIcon} />{folder.folderName}</button>)}

      </div>
      <button 
      className={styles.addFolderButton}>
         <img src={addFolderButton} alt="addFolderButton" />
      </button>

    </div>
  )
}

export default Dashboard