import styles from './Card.module.scss'
import React from 'react';
import ContentLoader from "react-content-loader";
import AppContext from '../../context';

function Card ({
    title, 
    imageUrl, 
    price, 
    onFavorite, 
    onPlus, 
    id, 
    loading = false}) {
    const {isItemAdded, isItemFavorit} = React.useContext(AppContext);
    const obj = { id, parentId: id, title, imageUrl, price };

    const onClickPlus = () => {
        onPlus(obj);
    }
    
    const onClickFavorite = () => {
        onFavorite(obj);
    }

    return (
        <div className={styles.card + " mb-20"}>

            {
                loading ?

                (<ContentLoader 
                    speed={2}
                    width={150}
                    height={210}
                    viewBox="0 0 150 210"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb">

                    <rect x="0" y="0" rx="10" ry="10" width="150" height="90" /> 
                    <rect x="0" y="112" rx="5" ry="5" width="150" height="15" /> 
                    <rect x="0" y="134" rx="5" ry="5" width="100" height="15" /> 
                    <rect x="0" y="184" rx="5" ry="5" width="80" height="25" /> 
                    <rect x="118" y="177" rx="10" ry="10" width="32" height="32" />
                </ContentLoader>)
                : 
                (<> 
                    {onFavorite && <div className={styles.favorite} onClick={onClickFavorite} >
                        <img src={isItemFavorit(imageUrl) ? "/img/icons/heart-liked.svg" : "/img/icons/heart-unliked.svg"} alt="heart-unliked"/>
                    </div>}

                        <img src={imageUrl} width="133" height="112" alt="bootsImage"/>

                        <h5>{title}</h5>

                        <div className="d-flex justify-between align-center"> 
                            <div className="d-flex flex-column">
                            <span>Цена:</span>
                            <b>{price} руб.</b>
                            </div>
                            {onPlus && <img className={styles.plus} onClick={onClickPlus} src={isItemAdded(id) ? "/img/icons/btn-checked.svg": "/img/icons/btn-plus.svg"} alt="Plus"/>}
                    </div>
                </>)
            }
            

        </div>        
    )
}

export default Card;