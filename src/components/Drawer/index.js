import styles from './Drawer.module.scss';
import CartItem from './CartItem';

const arr = [
    {title: 'Мужские Кроссовки Nike Blazer Mid Suede', imageUrl: '/img/card/boots1.png', price: 12999},
    {title: 'Мужские Кроссовки Nike Air Max 270', imageUrl: '/img/card/boots2.png', price: 12999},
    {title: 'Мужские Кроссовки Nike Blazer Mid Suede', imageUrl: '/img/card/boots3.png', price: 8499},
    {title: 'Кроссовки Puma X Aka Boku Future Rider', imageUrl: '/img/card/boots4.png', price: 8999},
    
  ];

function Drawer () {
    return (
        <div className={styles.overlay} style={{display: 'none'}}>
            <div className={styles.drawer}>
                <h2 className="d-flex justify-between mb-30">Корзина<img src="/img/icons/btn-remove-hover.svg" className="removeBtn cu-p" alt="exit" /></h2>
                {arr.map((obj) => (<CartItem title={obj.title} imageUrl={obj.imageUrl} price={obj.price}></CartItem>))}
                <div className={styles.cartTotalBlock}>
                    <ul>
                        <li className="d-flex">
                            <span>Итого:</span>
                            <div></div>
                            <b>21 498 руб.</b>
                        </li>
                        <li className="d-flex">
                            <span>Налог 5%:</span>
                            <div></div>
                            <b>1074 руб.</b>
                        </li>
                    </ul>          
                    <button className={styles.greenButton}>Оформить заказ <img src="/img/icons/arrow.svg" alt="" /></button>
                </div>
            </div>
        </div>
    )
}

export default Drawer;