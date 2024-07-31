
import styles from "./style.module.css"
import { buttonInput, dateInput, emailInput, gifBubble, imageBubble, numberInput, phoneInput, ratingInput, textBubble, textInput, videoBubble } from '../../../../assets'
const SideBar = ({ flow, setFlow }: any) => {

    const bubbles = [
        {
            name: "Text",
            img: textBubble,
            category: "textBubble"
        },
        {
            name: "Image",
            img: imageBubble,
            category: "imageBubble"
        }, {
            name: "Video",
            img: videoBubble,
            category: "videoBubble"
        }, {
            name: "GIF",
            img: gifBubble,
            category: "gifBubble"
        }]

    const inputs = [
        {
            name: "Text",
            img: textInput,
            category: "textInput"
        }, {
            name: "Number",
            img: numberInput,
            category: "numberInput"
        }, {
            name: "Email",
            img: emailInput,
            category: "emailInput"
        }, {
            name: "Phone",
            img: phoneInput,
            category: "phoneInput"
        }, {
            name: "Date",
            img: dateInput,
            category: "dateInput"
        }, {
            name: "Rating",
            img: ratingInput,
            category: "ratingInput"
        }, {
            name: "Buttons",
            img: buttonInput,
            category: "buttonInput"
        }]

    const handleAddElement = (type: string, category: string, name: string) => {
        let newElement = { type: type, category: category, name: name }
        setFlow([...flow, newElement])
    }

    return (
        <div className={styles.container}>

            <span className={styles.heading} style={{ marginTop: "20px" }}>Bubbles</span><span></span>

            {bubbles.map((bubble: any) => <button
            key={bubble.name}
                className={styles.button}
                onClick={() => { handleAddElement("bubble", bubble.category, bubble.name) }}

            >

                <img src={bubble.img} alt={bubble.name} />
                <span className={styles.bubbleText}>{bubble.name}</span>
            </button>)}

            <span className={styles.heading}>Buttons </span><span></span>
            {inputs.map((bubble: any) => <button
                className={styles.button}
                key={bubble.name}
                onClick={() => { handleAddElement("input", bubble.category, bubble.name) }}
            >
                <img src={bubble.img} alt={bubble.name} />
                <span className={styles.bubbleText}>{bubble.name}</span>
            </button>)}
        </div>
    )
}

export default SideBar