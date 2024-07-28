
import styles from "./style.module.css"
import { buttonInput, dateInput, emailInput, gifBubble, imageBubble, numberInput, phoneInput, ratingInput, textBubble, textInput, videoBubble } from '../../../../assets'
const SideBar = () => {
    let bubbles = [{ name: "Text", img: textBubble }, {
        name: "Image",
        img: imageBubble
    }, {
        name: "Video",
        img: videoBubble
    }, {
        name: "GIF",
        img: gifBubble
    }]

    let inputs = [{ name: "Text", img: textInput }, {
        name: "Number",
        img: numberInput
    }, {
        name: "Email",
        img: emailInput
    }, {
        name: "Phone",
        img: phoneInput
    }, {
        name: "Date",
        img: dateInput
    }, {
        name: "Rating",
        img: ratingInput
    }, {
        name: "Buttons",
        img: buttonInput
    }]
    return (
        <div className={styles.container}>

            <span className={styles.heading} style={{marginTop:"20px"}}>Bubbles</span><span></span>
            {bubbles.map((bubble: any) => <button className={styles.button}><img src={bubble.img} alt={bubble.name} /><span className={styles.bubbleText}>{bubble.name}</span></button>)}
            <span className={styles.heading}>Buttons </span><span></span>
            {inputs.map((bubble: any) => <button className={styles.button}><img src={bubble.img} alt={bubble.name} /><span className={styles.bubbleText}>{bubble.name}</span></button>)}
        </div>
    )
}

export default SideBar