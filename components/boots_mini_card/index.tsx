import { Rate } from 'antd';
import { useEffect } from 'react';
import styles from "./card.module.css";


// export const ammount = {
//   'AMD': '֏',
//   'RUB': '₱',
//   'EUR': '€',
//   'USD': '$'
// }

export default function MiniBootsCard({ammountSymbole = '$', price = 150, title= 'Nike Air force'}) {

  if (title.length > 20)
    title = title.slice(0, 20) + '...';

  return (
    <div className={styles.productContainer}>
      <div className={ styles.container }>
        <div className={styles.productImageContainer}>
          <img
            className={ styles.productImage }
            src="https://i.ibb.co/cNWqxGx/red.png"
            alt="OFF-white Red Edition"
            draggable="false"
          />
        </div>
        <div className={styles.poductShortDescription}>
          <h4 className={styles.title}>{title}</h4>
          <Rate allowHalf defaultValue={3} style={{ color: '#0e2149' }}/>
          <h4 className={styles.title}>{`${ammountSymbole} ${price}`}</h4>
        </div>
      </div>
    </div>
  );
}
