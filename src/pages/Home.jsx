import React from 'react';
import Card from '../components/Card';
import AppContext from '../context';

function Home ({
    searchValue, 
    setSearchValue, 
    onChangeSearchItem, 
    onAddFavorite,
    onAddToCart, }) {

    const {isLoading, items, isItemAdded } = React.useContext(AppContext);

        
    const renderItems = () => {
        const filtredItems = items
        .filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()));

        return (isLoading ? [...Array(10)] : filtredItems)
            .map((item, index) => (
                <Card 
                    key={index}
                    {...item}
                    onFavorite={(obj) => onAddFavorite(obj)}
                    onPlus={onAddToCart}
                    loading={isLoading}
                    added={isItemAdded(item && item.imageUrl)}>
                </Card>))
    };

    return (
        <div className="content p-40">

        <div className=" mb-40 justify-between d-flex align-center">
            <h1>
                {searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}
            </h1>

            <div className="search-block">
                <img src="/img/icons/search.svg" alt="Search" />

                {searchValue && 
                <img onClick={() => setSearchValue('')} 
                src="/img/icons/btn-remove-hover.svg" 
                className="clear cu-p" alt="clear" />
                }

                <input onChange={onChangeSearchItem} value={searchValue} type="text" placeholder="Поиск..." />
            </div>
        </div>

            <div className="d-flex flex-wrap">
                {renderItems()}
            
            </div> 
        </div>
    )
}

export default Home;