import styles from '../styles/Home.module.css'

const ArtCard = (props) => (
  <a href={props.link} className={styles.card}>
    <h3>{props.title}</h3>
    <img
      style={{ width: '100%' }}
      src={props.src}
      alt={props.alt}
    />
    <p>{props.text}</p>
  </a>
)

export default ArtCard;