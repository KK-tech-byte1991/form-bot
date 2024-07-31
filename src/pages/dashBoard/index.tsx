
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
import { TypeBotInterface } from '../interfaces';

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
  const [typeBotList, setTypeBotList] = useState([])

  console.log(folderDeleteOpen, selectedFolder, folderList, "selectedFolder")

  const getFolderList = () => {
    axiosInstance.get("/folder/getByUserId/" + userDetails.userId).then((res) => {
      setFolderList(res.data)
    })
  }

  const getTypebotByFolderId = () => {
    axiosInstance.get("/typebot/getByFolderId/" + selectedFolder).then((res) => {
      setTypeBotList(res.data)
    })
  }

  const getTypeBotByUserId = () => {
    axiosInstance.get("/typebot/getByUserId/" + userDetails.userId).then((res) => {
      setTypeBotList(res.data)
    })
  }
  useEffect(() => {
    getFolderList()
    getTypeBotByUserId()
  }, [])

  useEffect(() => {
    selectedFolder ? getTypebotByFolderId() : getTypeBotByUserId()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedFolder])

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
          <button onClick={() => {
            selectedFolder == folder._id ? setSelectedFolder(null) : setSelectedFolder(folder._id);

          }}> {folder.folderName} </button>

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
        <Link to={selectedFolder ? "/typebot/new/" + selectedFolder : "/typebot/new/userId"}>   <button

          className={styles.addFolderButton}>
          <img src={addFolderButton}
            alt="addFolderButton" />
        </button></Link>


        {typeBotList.map((typeBot: TypeBotInterface) => <Link to={"/typebot/" + typeBot?._id + "/formId"}>
          <button
            className={styles.typeFormButton}>
            {typeBot.formName}
            <img className={styles.deleteButton} src={deleteIcon} alt="delete" />
          </button>
        </Link>)}





      </div>
    </div >
  )
}

export default Dashboard