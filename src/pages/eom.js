import styles from "../styles/EOM.module.css";
import { Toolbar } from "../../components/Toolbar";

export const EOM = ({}) =>{

    return(
        <>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2227002292527901"
     crossorigin="anonymous"></script>
        <div class="col-sm-2">
        <div className="page-container">
            <Toolbar />
          
                <div className={styles.employeeOfTheMonth}>
                <h1>Developer</h1>
                <h2>Ayush Mehrotra</h2>
                <h3>Web Developer</h3>
                <img style={{height: "300px", width: "300px;"}} src='https://pbs.twimg.com/profile_images/1576103656914817024/wWNNbpEM_400x400.jpg'/>
                </div>
            
        </div>
        </div>
    </>
    );
};




export default EOM;
