import styles from '../styles/contact.module.css'

export default function Contact() {
  return (
    <>
        <h1 className={styles.contact}>Let's talk!</h1>
        <ul>
            <li>Email:</li>
            <li>Phone:</li>
            <li>GitHub:</li>
            <li>LinkedIn:</li>
        </ul>
    </>
  )
}