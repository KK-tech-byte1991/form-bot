import { useEffect, useRef, useState } from "react";
import styles from "./style.module.css"
import { useAuth } from "../../AuthContext";
import { Link } from "react-router-dom";

const NavBar = () => {

    const userDetails = JSON.parse(localStorage.getItem("userDetails") || "")
    const [isVisible, setIsVisible] = useState(false);
    const menuRef = useRef();

    const toggleMenu = () => {
        setIsVisible(!isVisible);
    };

    const handleClickOutside = (event: { target: any; }) => {
        //@ts-ignore
        if (menuRef.current && !menuRef.current?.contains(event.target)) {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    const { logout } = useAuth()
    return (
        <div className={styles.parent}>
            <div className={styles.popupContainer}>
                <button onClick={toggleMenu}
                    className={styles.popup}>{userDetails.username + "'s " + "workspace"} </button>
                {isVisible && (
                    //@ts-ignore
                    <div className={styles.popupMenu} ref={menuRef}>
                        <ul>
                            <li ><Link to="/settings">Settings</Link></li>
                            <li style={{
                                color: "#FFA54C"
                            }}
                                onClick={() => logout()}
                            >Logout</li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}

export default NavBar