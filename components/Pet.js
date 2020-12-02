import styles from '../styles/Home.module.css'

const Pet = (props) => (
    <div className={styles.petCard}>
        <div className={styles.petCardImage}>
            <img
                onClick={props.onClick}
                style={{ width: '100%' }}
                src={props.src}
                alt={props.alt}
            />
        </div>
        <div className={styles.petCardText}>
            <h3>{props.subtitle}</h3>
            <p>{props.text}</p>            
        </div>
    </div>

)

export default Pet;