
import { addFolderButton, deleteIcon, folderIcon } from '../../assets'
import styles from "./style.module.css"
import { useEffect, useState } from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import axiosInstance from '../../services/axiosInstance'
import CreateNewFolder from './createNewFolder/createNewFolder';
import NavBar from '../navBar';
import DeleteModal from './deleteModal';
import { Link } from 'react-router-dom';

interface Folder {
  folderName: string,
  _id: string

}
const Dashboard = () => {
  const userDetails = JSON.parse(localStorage.getItem("userDetails") || "")
  const [folderList, setFolderList] = useState<Folder[]>([])
  const [createOpen, setCreateOpen] = useState(false)
  const [folderDeleteOpen, setFolderDeleteOpen] = useState(false)
  const [selectedFolder, setSelectedFolder] = useState<string | null>(null)

  console.log(folderDeleteOpen, selectedFolder, folderList, "selectedFolder")

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
        <Popup
          open={createOpen}
          onOpen={() => setCreateOpen(true)}
          trigger={<button className={styles.folderButton}><img src={folderIcon} />Create a Folder</button>}
          modal
          nested
          position="center center"

        >

          <CreateNewFolder
            handleClose={setCreateOpen}
            getFolderList={getFolderList}
          />


        </Popup>



        {folderList.map((folder: Folder) => <div
          className={selectedFolder == folder._id ? styles.selectedFolder : styles.folderButton}
        >
          <button onClick={() => { setSelectedFolder(folder._id); }}> {folder.folderName} </button>

          <img src={deleteIcon}
            alt="delete"
            onClick={() => { setSelectedFolder(folder._id); setFolderDeleteOpen(true) }}
            style={{ cursor: "pointer" }}

          />

          <Popup
            open={folderDeleteOpen}
            modal

          >

            <DeleteModal
              handleClose={setFolderDeleteOpen}
              getFolderList={getFolderList}
              selectedFolder={selectedFolder}
            />
          </Popup>

        </div>)}

      </div>
      <div className={styles.formContainer}>
      <Link to={"/typebot/new"}>   <button

          className={styles.addFolderButton}>
          <img src={addFolderButton}
            alt="addFolderButton" />
        </button></Link>



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