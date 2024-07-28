
import { addFolderButton, deleteIcon, folderIcon } from '../../assets'
import styles from "./style.module.css"
import { useEffect, useState } from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import axiosInstance from '../../services/axiosInstance'
import CreateNewFolder from './createNewFolder/createNewFolder';
import NavBar from '../navBar';

interface Folder {
  folderName: string,
  id: string

}
const Dashboard = () => {
  const userDetails = JSON.parse(localStorage.getItem("userDetails") || "")
  const [folderList, setFolderList] = useState<Folder[]>([])
  const [createOpen, setCreateOpen] = useState(false)
  const [folderDeleteOpen, setFolderDeleteOpen] = useState(false)
  const [selectedFolder, setSelectedFolder] = useState<string | null>(null)
console.log(folderDeleteOpen,selectedFolder)
  const getFolderList = () => {
    axiosInstance.get("/folder/getByUserId/" + userDetails.userId).then((res) => {
      setFolderList(res.data)
    })
  }
  useEffect(() => {
    getFolderList()
  }, [])

  console.log("folderList", createOpen)
  return (
    <div>
      <NavBar />
      <div className={styles.folderContainer}>
        <button className={styles.folderButton}><img src={folderIcon} />Create a Folder</button>
        {folderList.map((folder: Folder) => <div
          className={styles.folderButton}
        >
          {folder.folderName}
          <img src={deleteIcon}
            alt="delete"
            onClick={() => { setSelectedFolder(folder.id); setFolderDeleteOpen(true) }}
            style={{ cursor: "pointer" }}
          /></div>)}

      </div>
      <div className={styles.formContainer}>

        <Popup
          open={createOpen}
          onOpen={() => setCreateOpen(true)}
          trigger={<button

            className={styles.addFolderButton}>
            <img src={addFolderButton}
              alt="addFolderButton" />
          </button>}
          modal
          nested
          position="right center"

        >

          <CreateNewFolder
            handleClose={setCreateOpen}
            getFolderList={getFolderList}
          />


        </Popup>


        <button
          className={styles.addFolderButton}>
          <img src={addFolderButton} alt="addFolderButton" />
        </button>
        <button
          className={styles.addFolderButton}>
          <img src={addFolderButton} alt="addFolderButton" />
        </button>
        <button
          className={styles.addFolderButton}>
          <img src={addFolderButton} alt="addFolderButton" />
        </button>


      </div>
    </div>
  )
}

export default Dashboard