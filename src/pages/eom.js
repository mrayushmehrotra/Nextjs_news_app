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
                <img style={{height: "300px", width: "300px;"}} src="https://media.licdn.com/dms/image/D4D03AQHEUuuz67Tyng/profile-displayphoto-shrink_400_400/0/1686627712381?e=1692230400&v=beta&t=evF2a0LW7F8WcjyWtFK0NkcVXixP29g3VduKeVuleOs"/>
                </div>
            
        </div>
        </div>
    );
};




export default EOM;
