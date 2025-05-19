import styles from '../styles/home.module.css'


export default function Project({ title, image, url }) {
    return (
        <div className={styles.project}>
            <a href={url}><img src={image} alt={title} width="400" /></a>
            <a href={url}><h2 className={styles.project}>{title}</h2></a>
        </div>    
    )
}