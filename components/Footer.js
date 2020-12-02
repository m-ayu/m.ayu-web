import styles from '../styles/Home.module.css'
import SocialNetworkLink from '../components/SocialNetworkLink'

const Footer = (props) => (
    <footer className={styles.footer}>
        <SocialNetworkLink
            logo="/instagram.svg"
            text="Instagram"
            alt="Logo Instagram m.ayu"
            link="https://www.instagram.com/mm.a.yu/" />
        <SocialNetworkLink
            logo="/youtube.svg"
            text="YouTube"
            alt="Logo YouTube m.ayu"
            link="https://www.youtube.com/channel/UCA7lu2Bat3MK9ficXdM46ww" />
        <a style={{ paddingLeft: 20 }} href="/attr"><small>Atribuciones</small></a>
    </footer>
)

export default Footer;