import { Toolbar } from "../../components/Toolbar";
import styles from "../styles/Contact.module.css";

export const contact = () => {
    return(<>
    <Toolbar />
    <div className={styles.main}>
        
        <div className={styles.imgContainer} >
            <h1>Github</h1>
    <img className={styles.image} onClick={() =>{
        window.location.href="https://github.com/Ayushoopp"
    }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwqVSIB7OIv_wQReWskd5DGm7OzqmLkj-6f7oycxWyZw&s" />
    </div>
    <div className={styles.imgContainer}>
          <h1>Instagram</h1>
    <img className={styles.image} onClick={() =>{
        window.location.href="https://instagram.com/mein.ayush.hoon?igshid=YmMyMTA2M2Y="
    }} src="https://cdn-icons-png.flaticon.com/512/1077/1077042.png" />
   </div>
   <div  className={styles.imgContainer}>
      <h1>Twitter</h1>
   <img className={styles.image} onClick={() =>{
        window.location.href="https://twitter.com/AYUSH070707?t=8Vb47U-aeH2g90Bx-55RLg&s=09"
    }} src="https://static.vecteezy.com/system/resources/previews/002/534/045/original/social-media-twitter-logo-blue-isolated-free-vector.jpg" />
   </div>
   </div>
    </>)
}

export default contact;