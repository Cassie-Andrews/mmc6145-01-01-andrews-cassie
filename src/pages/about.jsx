import styles from '../styles/about.module.css'

export default function About() {
  return (
    <div className={styles.about__container}>
        <div>
            <h1 className={styles.about__header}>About Me</h1>
            <p className={styles.about}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse totam at in accusantium tempora non nostrum possimus nihil consectetur, quos assumenda consequatur quibusdam inventore necessitatibus temporibus nisi? Accusantium, nesciunt hic.</p>
        </div>

        <div>
            <h2 className={styles.about__header}>Interests</h2>
            <ul>
                <li>Book binding</li>
                <li>Illustration</li>
                <li>Reading</li>
            </ul>
        </div>    
    </div>
  )
}