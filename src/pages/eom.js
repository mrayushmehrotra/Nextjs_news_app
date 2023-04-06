import styles from "../styles/EOM.module.css";
import { Toolbar } from "../../components/Toolbar";

export const EOM = ({}) =>{

    return(
        <div className="page-container">
            <Toolbar />
          
                <div className={styles.employeeOfTheMonth}>
                <h1>Developer</h1>
                <h2>Ayush Mehrotra</h2>
                <h3>Web2 & Web3 Developer</h3>
                <img style={{height: "300px", width: "300px;"}} src="https://pbs.twimg.com/profile_images/1576103656914817024/wWNNbpEM_400x400.jpg" />
                </div>
            
        </div>
    );
};




export default EOM;