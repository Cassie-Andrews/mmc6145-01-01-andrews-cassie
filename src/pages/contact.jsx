import styles from '../styles/contact.module.css'

export default function Contact() {
  return (
    <div className="contact__container">
        <h1 className={styles.contact}>Let's talk!</h1>
        <ul>
            <li><a href="mailto:candrews1@ufl.edu">Email</a></li>
            <li><a href="#">Phone</a></li>
            <li><a href="https://github.com/Cassie-Andrews">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/cassie-andrews/">LinkedIn</a></li>
        </ul>
    </div>
  )
}