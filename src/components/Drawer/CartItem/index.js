import styles from './CartItem.module.scss';

function CartItem (props) {
    return (
        <div className={styles.items}>
            <div className={styles.cartItem + " d-flex align-center mb-20"}>
                <div style={{backgroundImage: 'url(' + props.imageUrl + ')'}} className={styles.cartItemImg}></div>

                <div className="mr-20 flex">
                    <p className="mb-5">{props.title}</p>
                    <b>{props.price} руб.</b>
                </div>
                <img src="/img/icons/btn-remove-hover.svg" className="removeBtn" alt="remove" />
            </div>
        </div>
    );
};

export default CartItem;