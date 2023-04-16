import MiniBootsCard from 'components/boots_mini_card'
import styles from './style.module.scss'

export default function FooterNavBar () {
    return (
        <div className={styles.RelativeContainer}>
            <div className={styles.Navbar}>
                <MiniBootsCard />
            </div>
        </div>
    )
}
