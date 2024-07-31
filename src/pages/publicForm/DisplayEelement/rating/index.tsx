
import styles from "./style.module.css"
interface PropType {
    value: string | unknown,
    // eslint-disable-next-line @typescript-eslint/ban-types
    setValue: Function,
    disabled: boolean
}
const Rating = ({ value, setValue, disabled }: PropType) => {
    return (
        <div style={{display:"flex",justifyContent:"space-between" ,width:"200px",alignItems:"center"}}>
            {[1, 2, 3, 4, 5]?.map((num) => <button disabled={disabled}
                className={value == num ? styles.selectedButton : styles.ratingButton}
                onClick={() => setValue(num)}
            >{num}</button>)}</div>
    )
}

export default Rating