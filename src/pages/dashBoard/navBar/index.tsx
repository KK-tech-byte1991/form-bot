import { useEffect, useRef, useState } from "react";
import styles from "./style.module.css"

const NavBar = () => {


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
    return (
        <div className={styles.parent}>
            <div className={styles.popupContainer}>
                <button onClick={toggleMenu} className={styles.popup}>Dewank Rastogi's workspace</button>
                {isVisible && (
                    //@ts-ignore
                    <div className={styles.popupMenu} ref={menuRef}>
                        <ul>
                            <li>Settings</li>
                            <li style={{
                                color: "#FFA54C"
                            }}>Logout</li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}

export default NavBar