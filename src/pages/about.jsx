import styles from '../styles/about.module.css'

export default function about() {
  const interests = [
    "Web design",
    "Illustration",
    "Bookbinding",
    "Reading"
  ]
  return (
    <main>
      <h1 className={styles.about}>About Me</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse totam at in accusantium tempora non nostrum possimus nihil consectetur, quos assumenda consequatur quibusdam inventore necessitatibus temporibus nisi? Accusantium, nesciunt hic.</p>
      <h2>My Interests</h2>
      <>
        {interests.map((interests, i) => <Interest key={i}>{interests}</Interest> )}
      </>
    </main>
  )
}