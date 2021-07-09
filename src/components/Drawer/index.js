import React from 'react';
import axios from 'axios';

import Info from '../Info';
import AppContext from '../../context';

import styles from './Drawer.module.scss';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Drawer ({ items = [], onRemove, opened}) {
    const { setCartOpened, cartItems, setCartItems } = React.useContext(AppContext);
    const [orderId, setOrderId] = React.useState(null);
    const [isOrderComplete, setIsOrderCompete] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);
    const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);

    const onClickOrder = async () => {
        try {
            setIsLoading(true);
            const {data} = await axios.post('https://60d3a00561160900173c97b8.mockapi.io/orders', {items: cartItems});
            setOrderId(data.id);
            setIsOrderCompete(true);
            setCartItems([]);

            for (let i = 0; i < cartItems.length; i++) {
                const item = cartItems[i];
                await axios.delete('https://60d3a00561160900173c97b8.mockapi.io/cart/' + item.id);
                await delay(1000);
            }

        } catch (error) {
            alert('Не удалось создать заказ')
        }
        setIsLoading(false);
    }

    return (
        <div className={`${styles.overlay} ${opened ? styles.overlayVisible : ``}`}>
            <div className={styles.drawer}>
                <h2 className="d-flex justify-between mb-30">
                    Корзина<img onClick={() => {setCartOpened(false);  document.body.classList.remove('overflow-hidden')}} src="/img/icons/btn-remove-hover.svg" className="removeBtn cu-p" alt="exit" />
                </h2>

                {items.length > 0 ? (
                        <div className={styles.cartBlock}>
                            <div className={styles.items}>
                                {items.map((obj) => (
                                    <div key={obj.id} className={styles.cartItem + " d-flex align-center mb-20"}>
                                        <div style={{backgroundImage: `url(${obj.imageUrl})`}} className={styles.cartItemImg}></div>
                        
                                        <div className="mr-20 flex">
                                            <p className="mb-5">{obj.title}</p>
                                            <b>{obj.price} руб.</b>
                                        </div>
                                        <img src="/img/icons/btn-remove-hover.svg" className="removeBtn cu-p" alt="remove" 
                                        onClick={
                                            () => onRemove(obj.id)
                                            // () => console.log(obj.id)
                                        }/>
                                    </div>
                                ))}
                            </div>
                                        
                            <div className={styles.cartTotalBlock}>
                                <ul>
                                    <li className="d-flex">
                                        <span>Итого:</span>
                                        <div></div>
                                        <b>{totalPrice} руб.</b>
                                    </li>
                                    <li className="d-flex">
                                        <span>Налог 5%:</span>
                                        <div></div>
                                        <b>{(totalPrice / 100 * 5).toFixed(2)} руб.</b>
                                    </li>
                                </ul>          
                                <button disabled={isLoading} onClick={onClickOrder} className={styles.greenButton}>Оформить заказ <img src="/img/icons/arrow.svg" alt="" /></button>
                        </div>
                        </div>
                    ) : (
                        <Info  
                            title={isOrderComplete ? "Заказ оформлен" : "Корзина пустая"} 
                            description={isOrderComplete ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке` : 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'}
                            image={isOrderComplete ? "/img/full-cart.png" : "/img/empty-cart.png"}
                        />
                    )
                    }

            </div>
        </div>
    )
}

export default Drawer;