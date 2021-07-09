import React from 'react';
import AppContext from '../context';
import Card from '../components/Card';


function Favorites ({
    onAddFavorite, 
    onAddToCart}) {

    const {favorites, isLoading, isItemAdded } = React.useContext(AppContext);
    const renderItems = () => {
        const filtredItems = favorites;

        return (isLoading ? [...Array(8)] : filtredItems)
            .map((item, index) => (
                <Card 
                    key={index}
                    {...item}
                    onFavorite={onAddFavorite}
                    onPlus={onAddToCart}
                    added={isItemAdded(item && item.id)}
                    favorited={favorites.some(obj => (obj.imageUrl) === (item.imageUrl))}
                >
                 </Card>))
    };

    
    return (
        
        <div className="content p-40">
            <div className=" mb-40 justify-between d-flex align-center">
                <h1>Мои закладки</h1>            
            </div>

        <div className="d-flex flex-wrap">

            {renderItems()}
            
        </div> 

        </div>
    )
}

export default Favorites;