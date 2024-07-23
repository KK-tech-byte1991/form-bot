
import styles from "./styles.module.css"
import { bannerOneDashBoard, bannerOneFirstImage, bannerOneSecondImage } from '../../../assets'
const BannerOne = () => {
    return (
        <div className={styles.parent}>
            <div className={styles.headerContainer}>
                <div>
                    <img src={bannerOneFirstImage} />
                </div>
                <div>
                    <h2 className={styles.heading}>Build advanced chatbots visually</h2>
                    <p className={styles.description}>Typebot gives you powerful blocks to create unique chat experiences.
                        Embed them anywhere on your web/mobile apps and start collecting results like magic.</p>
                    <button className={styles.button}>Create a FormBot for free</button>
                </div>
                <div className={styles.secondImage}>
                    <img src={bannerOneSecondImage} />
                </div>
            </div>

            <div className={styles.containerFirst}>
                <div className={styles.shadowDiv}>
                <div className={styles.orangeShadow}></div>
                    <div className={styles.blueShadow}></div>
                    
                </div>

                <img src={bannerOneDashBoard} className={styles.bannerOneDashBoard} />
            </div>


        </div>
    )
}

export default BannerOne