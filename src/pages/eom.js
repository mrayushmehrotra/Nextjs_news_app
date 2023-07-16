import styles from "../styles/EOM.module.css";
import { Toolbar } from "../../components/Toolbar";

export const EOM = ({}) =>{

    return(
        <div class="col-sm-2">
        <div className="page-container">
            <Toolbar />
          
                <div className={styles.employeeOfTheMonth}>
                <h1>Developer</h1>
                <h2>Ayush Mehrotra</h2>
                <h3>Web Developer</h3>
                <img style={{height: "300px", width: "300px;"}} src='https://media.licdn.com/dms/image/D4D03AQHZkFHuDnlT1Q/profile-displayphoto-shrink_400_400/0/1689145787591?e=1695254400&v=beta&t=pG4Njk7efmCx9zK4fwEVuLSD0Jw_xZn5G8WS3ZO51_M'/>
                </div>
            
        </div>
        </div>
    );
};




export default EOM;
