import {Route} from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Drawer from './components/Drawer';
import React from 'react';
import AppContext from './context';

import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Orders from './pages/Orders';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);


  
  React.useEffect(() => {
    async function fetchData() {
      
      try {
        setIsLoading(true);
        const [cartResponse, favoritResponse, itemsResponse] = await Promise.all([
          axios.get('https://60d3a00561160900173c97b8.mockapi.io/cart'), 
          axios.get('https://60d3a00561160900173c97b8.mockapi.io/favorites'), 
          axios.get('https://60d3a00561160900173c97b8.mockapi.io/items')
        ]);
  
        setIsLoading(false);
        setCartItems(cartResponse.data);
        setFavorites(favoritResponse.data);
        setItems(itemsResponse.data);
      } catch (error) {
        alert('ошибка при запросе данных');
        console.error(error);
      }

    }

    fetchData();

  }, []);
  
  const onRemoveItem = (id) => {
    try {
      axios.delete(`https://60d3a00561160900173c97b8.mockapi.io/cart/${id}`);
      setCartItems((prev) => prev.filter(item => Number(item.id) !== Number(id)));
    } catch (error) {
      alert ('Ошибка при удалении из корзины')
      console.error(error);
    }
  }
  
  const onAddToCart = async (obj) => {

    try {
      if (cartItems.find((item) => Number(item.parentId) === Number(obj.id))) {
        const id = (cartItems.filter(setCartItems => Number(setCartItems.parentId) === Number(obj.id)))[0].id;
        axios.delete(`${'https://60d3a00561160900173c97b8.mockapi.io/cart/'}${id}`);
          setCartItems(cartItems.filter(setArr => Number(setArr.parentId) !== Number(obj.id)))
      } else {  
        const { data } = await axios.post('https://60d3a00561160900173c97b8.mockapi.io/cart', obj);
        setCartItems(prev => [...prev, data]);
      } 
    } catch (error){
      alert('Не удалось добавить в корзину')
      console.error(error);
    }
  };
  
  const onAddFavorite = async (obj) => {
    
    try { 
      if (favorites.find((favObj) => (favObj.imageUrl) === (obj.imageUrl))) {
        const id = (favorites.filter(setArr => (setArr.imageUrl) === (obj.imageUrl)))[0].id;
        axios.delete(`https://60d3a00561160900173c97b8.mockapi.io/favorites/${id}`);
        setFavorites((prev) => prev.filter((item) => (item.imageUrl) !== (obj.imageUrl)));
      } else {  
        const { data } = await axios.post('https://60d3a00561160900173c97b8.mockapi.io/favorites', obj);
        setFavorites((prev) => [...prev, data])
      }
    } catch (error){
      alert('Не удалось добавить/удалить в/из фавориты')
      console.error(error);
    }

  };

  const onChangeSearchItem = (event) => {
    setSearchValue(event.target.value);
  };

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.parentId) === Number(id));
  };

  const isItemFavorit = (imageUrl) => {
    return favorites.some((obj) => obj.imageUrl === imageUrl);
  };

  return (
    <AppContext.Provider value={{items, cartItems, setCartItems, favorites, isLoading, isItemAdded, isItemFavorit, setCartOpened, onAddFavorite, onAddToCart}}>
      <div className={`wrapper clear`}>
          <Drawer 
            items={cartItems} 
            onRemove={onRemoveItem}
            opened={cartOpened}>
          </Drawer>

          <Header onClickCart={() => {setCartOpened(true); document.body.classList.add('overflow-hidden')}} />
          
          <Route path="/" exact>
            <Home 
              searchValue={searchValue} 
              setSearchValue={setSearchValue} 
              onChangeSearchItem={onChangeSearchItem} 
              onAddFavorite={onAddFavorite} 
              onAddToCart={onAddToCart} 
              />
          </Route>

          <Route path="/favorites" exact>
            <Favorites 
                onAddFavorite={onAddFavorite} 
                onAddToCart={onAddToCart}/>
          </Route>

          <Route path="/orders" exact>
            <Orders 
                onAddFavorite={onAddFavorite} 
                onAddToCart={onAddToCart}/>
          </Route>

      </div>
    </AppContext.Provider>
  );
}

export default App;
