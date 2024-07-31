
import styles from "./style.module.css"
interface PropType {
    value: string | unknown,
    // eslint-disable-next-line @typescript-eslint/ban-types
    setValue: Function,
    disabled: boolean
}
const Rating = ({ value, setValue, disabled }: PropType) => {
    return (
        <div>{[1, 2, 3, 4, 5].map((num) => <button disabled={disabled}
            className={styles.ratingButton}
            onClick={() => setValue(value)}
        >{num}</button>)}</div>
    )
}

export default Rating