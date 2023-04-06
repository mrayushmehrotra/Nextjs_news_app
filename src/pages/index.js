import { Toolbar } from "../../components/Toolbar"
import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <>
    <div className="page-container">
      <Toolbar />
      <div className={styles.main}>
        
        <h1> Next.js News App</h1>
        <h2>News are like drugs</h2>

      </div>
    </div>
      
    </>
  )
}
