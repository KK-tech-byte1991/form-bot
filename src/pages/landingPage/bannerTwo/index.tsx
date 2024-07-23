
import styles from "./style.module.css"
import { cross, rightImageSecondBanner } from '../../../assets'
const BannerTwo
    = () => {
        return (
            <div className={styles.center}>
                <h1 className={styles.heading}>Replace your old school forms<br /> with<br /> chatbots</h1>
                <p className={styles.para}>Typebot is a better way to ask for information. It leads to an increase in customer satisfaction and retention and multiply by<br /> 3<br /> your conversion rate compared to classical forms.</p>
                <div className={styles.images}>
                    <div className={styles.formDiv}>
                        <img src={cross} style={{ width: "40px" }} alt="cross" />
                        <br />
                        <div className={styles.form}>
                            <label>    Full name <span role='alert' style={{ color: "red" }}>*</span></label>
                            <input type="text" disabled placeholder='Full name' />
                            <br />
                            <label>    Email <span role='alert' style={{ color: "red" }}>*</span></label>
                            <input type="text" disabled placeholder='Email' />
                            <br />
                            <label>What services are you interested in?</label>
                            <div className={styles.checkBoxInput}>
                                <input type="checkbox" disabled /><label>Website Dev</label></div>
                            <div className={styles.checkBoxInput}>
                                <input type="checkbox" disabled /><label>Content Marketing</label></div>
                            <div className={styles.checkBoxInput}>
                                <input type="checkbox" disabled /><label>Social Media</label></div>
                            <div className={styles.checkBoxInput}>
                                <input type="checkbox" disabled /><label>UX/UI Design</label></div>
                            <br />
                            <label>Additional Information <span role='alert' style={{ color: "red" }}>*</span></label>
                            <textarea
                                disabled
                                style={{ resize: "none" }}
                                placeholder="Additional Information"
                                draggable="false"></textarea>
                           <br/>
                            <button className={styles.button} disabled>Submit</button>
                            <br/>

                        </div>

                    </div>
                    <div>
                        <img style={{  width: "520px",bottom:"0px"}} src={rightImageSecondBanner} />
                    </div>
                </div>
            </div>
        )
    }

export default BannerTwo
