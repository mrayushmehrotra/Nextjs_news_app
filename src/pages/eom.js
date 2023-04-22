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
                <h3>Web2 & Web3 Developer</h3>
                <img style={{height: "300px", width: "300px;"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxaKNZTvrRu8Kx4pex2mLzx4xk07z0_5j3pg&usqp=CAU"/>
                </div>
            
        </div>
        </div>
    );
};




export default EOM;
