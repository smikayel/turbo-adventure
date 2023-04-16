import BuyNow from 'components/Buttons/BuyNow'
import styles from './previewInfo.module.scss'

export default function PreviewInfo ({product, brend}) {
    return (
        <div className={styles.PreviewInfo}>
            <p className={styles.InfoTitle}>{brend.name} {product.model}</p>
            <p className={styles.Price}>  {"$"} {product.price} </p>
            <BuyNow productId={product.uuid}/>
        </div>
    )
}
