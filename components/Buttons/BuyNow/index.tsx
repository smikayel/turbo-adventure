import styles from "./buynow.module.css"

export default function BuyNow({ productId }) {
    return <a href={ productId } className={styles.btn_buy_now}> GET IT NOW </a>
}