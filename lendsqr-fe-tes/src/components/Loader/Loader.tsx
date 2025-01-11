import spinner from '../../assets/svg/Spinners.svg'
import styles from "./Loader.module.scss";

const Loader = () => {
  return (
    <div className={styles.loader}>
        <div>
            <img src={spinner} alt="loading..." />
        </div>
    </div>
  )
}

export default Loader