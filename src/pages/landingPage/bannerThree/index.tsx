

import styles from "./style.module.css"
import { bannerThreeFirstImage, bannerThreeSecondImage, featureDemo, lastSection, sectionDemo, sectionIntegration, teamSection } from '../../../assets'
import { useNavigate } from "react-router-dom"
const BannerThree = () => {
  const navigate =useNavigate()
  return (
    <>
      <div className={styles.bannerOne}>
        <div></div>
        <div >
          <img src={bannerThreeFirstImage} className={styles.bannerThreeFirstImage} /></div>
        <div>
          <h2>Easy building experience</h2>
          <p>All you have to do is drag and drop blocks to create your app.
            Even if you have custom needs, you can always add custom code.</p>
        </div>
        <div></div>
      </div>
      <div className={styles.bannerTwo}>
        <div></div>
        <div><h2>Embed it in a click</h2>
          <p>Embedding your typebot in your applications is a walk in the park.
            Typebot gives you several step-by-step platform- specific instructions.
            Your typebot will always feel "native".</p></div>

        <div> <img src={bannerThreeSecondImage} />
        </div>
      </div>
      <div>
        <img style={{ width: "100vw" }} src={sectionIntegration} />
      </div>
      <div>
        <img style={{ width: "100vw" }} src={sectionDemo} />

      </div>
      <div>
        <img style={{ width: "100vw" }} src={featureDemo} />

      </div>
      <br />
      <div>
        <img style={{ width: "100vw" }} src={teamSection} />

      </div>
      <div style={{ position: "relative" }}>
        <img style={{ width: "100vw", marginLeft: "-50px" }} src={lastSection} />
        <button 
        className={styles.createFormButton}
         onClick={()=>navigate("/signup")}>Create a FormBot</button>
      </div>
    </>
  )
}

export default BannerThree