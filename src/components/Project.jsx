import styles from '../styles/home.module.css'

export default function Project({children}) {
    return (
        <h2 className={styles.project}>{children}</h2>
    )
}