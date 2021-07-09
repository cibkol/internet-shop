import React from 'react';
import AppContext from '../context';
import styles from './Drawer/Drawer.module.scss';

export const Info = ({title, image, description}) => {
    const { setCartOpened } = React.useContext(AppContext);

    return (
        <div className={styles.cartEmpty + " align-center d-flex justify-content flex-column flex"}>
            <img className="mb-20" width="120" height="120" src={image} alt="empty" />
            <h2>{title}</h2>
            <p className="opacity-6">{description}</p>
            <button onClick={() => {setCartOpened(false);  document.body.classList.remove('overflow-hidden')}} className={styles.greenButton}>
                <img src="/img/icons/arrow.svg" alt="arrow" />
                Вернуться назад
            </button>
        </div>
    )
}

export default Info;

