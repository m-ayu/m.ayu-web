import styles from '../styles/Home.module.css'

const SocialNetworkLink = (props) => (
    <a
    href={props.link}
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      style={{ paddingRight: 5 }}
      src={props.logo}
      alt={props.alt}
      className={styles.logo} />
    {props.text}
  </a>
)


export default SocialNetworkLink;