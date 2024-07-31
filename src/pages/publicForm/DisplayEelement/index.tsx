
import YouTube from 'react-youtube'
import { ElementInterface } from '../../interfaces'
import send from "../send.svg"
interface PropTypes {
    element: ElementInterface,
    index: number,
    currentIndex: number,
    // eslint-disable-next-line @typescript-eslint/ban-types
    setCurrentIndex: Function,
    // eslint-disable-next-line @typescript-eslint/ban-types
    handleSubmit: Function
}
import styles from "./style.module.css"
import { useEffect, useState } from 'react'
import Rating from './rating'
const DisplayElement = ({ element, index, currentIndex, setCurrentIndex, handleSubmit }: PropTypes) => {
    console.log("eleelle", element)

    useEffect(() => {
        element.type == "bubble" && setTimeout(() => {
            setCurrentIndex(currentIndex + 1)
        }, 2000)
    }, [])
    console.log("index", index)
    const [value, setValue] = useState<unknown>()
    const clickSend = (name: string, code: string) => {
        const objectToSend = { name: name, value: value, code: code }
        console.log("code:stringonnn", objectToSend)
        handleSubmit(objectToSend)
    }
    return (

        element.type == "bubble" ?
            <div className={element.type == "bubble" ? styles.bubble : styles.input}>

                {element.category == "imageBubble" && <img src={element.link} alt="img" />}
                {element.category == "gifBubble" && <img src={element.link} alt="img" />}
                {/* {element.category == "videoBubble" && <video controls width="50%" height="200">
                    <source src={element.link} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>}
                {element.category == "videoBubble" && <iframe
                    src={"https://www.youtube.com/embed/$oQfZWO6XQhE"}
                    frameBorder="0"
                    allowFullScreen
                />} */}
                {element.category == "videoBubble" && <div style={{ overflow: "auto" }}><YouTube videoId={"oQfZWO6XQhE"} /></div>}

                {element.category == "textBubble" && <p>{element.link}</p>}

            </div> :
            <div className={styles.input}>
                {element.category == "buttonInput" && <button onClick={() => handleSubmit({ value: element.link, name: element.name, code: element.code })}>{element.link}</button>}
                {element.category == "textInput" &&
                    <div className={styles.inputTextDiv}>
                        <input type="text" placeholder='Enter Your text' disabled={currentIndex > index} onChange={(e) => setValue(e.target.value)}
                        />
                        <button className={styles.sendButton} disabled={currentIndex > index} onClick={() => { clickSend(element.name, element.code) }}><img src={send} alt="" />
                        </button>
                    </div>}
                {element.category == "emailInput" &&
                    <div className={styles.inputTextDiv}>
                        <input type="email" placeholder='Enter Your email'
                            onChange={(e) => setValue(e.target.value)}
                            disabled={currentIndex > index}
                        />
                        <button disabled={currentIndex > index} className={styles.sendButton} onClick={() => { clickSend(element.name, element.code) }}><img src={send} alt="" />
                        </button>
                    </div>}
                {element.category == "dateInput" &&
                    <div className={styles.inputTextDiv}>
                        <input type="date" placeholder='Select a date'
                            onChange={(e) => setValue(e.target.value)}
                            disabled={currentIndex > index}
                        />
                        <button disabled={currentIndex > index} className={styles.sendButton} onClick={() => { clickSend(element.name, element.code) }}><img src={send} alt="" />
                        </button>
                    </div>}
                {element.category == "phoneInput" &&
                    <div className={styles.inputTextDiv}>
                        <input type="number" maxLength={10} placeholder='Enter your Phone'
                            onChange={(e) => setValue(e.target.value)}
                            disabled={currentIndex > index}
                        />
                        <button disabled={currentIndex > index} className={styles.sendButton} onClick={() => { clickSend(element.name, element.code) }}><img src={send} alt="" />
                        </button>
                    </div>}
                {element.category == "numberInput" &&
                    <div className={styles.inputTextDiv}>

<input
                            type="number"
                            placeholder='Enter a Number'
                            onChange={(e) => setValue(e.target.value)}
                            disabled={currentIndex > index}
                        />
                        <button disabled={currentIndex > index} className={styles.sendButton} onClick={() => { clickSend(element.name, element.code) }}><img src={send} alt="" />
                        </button>
                    </div>}
                {element.category == "ratingInput" &&
                    <div className={styles.inputTextDiv}>
                        {/* <input type="number" placeholder='Rating'
                            onChange={(e) => setValue(e.target.value)}
                        /> */}
                       
                         <Rating
                          value={value} 
                         setValue={setValue}
                          disabled={currentIndex > index} />
                        <button disabled={currentIndex > index} className={styles.sendButton} onClick={() => { clickSend(element.name, element.code) }}><img src={send} alt="" />
                        </button>
                    </div>}

            </div>

    )
}

export default DisplayElement