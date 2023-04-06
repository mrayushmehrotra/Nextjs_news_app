import styles from "../styles/EOM.module.css";

export const EOM = ({}) =>{

    return(
        <div className="page-container">
          
                <div className={styles.employeeOfTheMonth}>
                <h1>Developer</h1>
                <h2>Ayush Mehrotra</h2>
                <h3>Web2 & Web3 Developer</h3>
                <img style={{height: "300px", width: "300px;"}} src="https://thumbs.dreamstime.com/b/cartoon-businessman-doodle-business-set-background-doodle-download-bar-coming-soon-loading-text-vector-illustration-132930832.jpg" />
                </div>
            
        </div>
    );
};




export default EOM;