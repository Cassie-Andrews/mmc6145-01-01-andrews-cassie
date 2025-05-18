import styles from './styles/about.module.css'
import Interest from '../Interest'


export default function Interest({children}) {
    return (
        <h3 className={styles.interest}>{children}</h3>
    )
}