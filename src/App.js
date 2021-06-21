import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

const arr = [
  {title: 'Мужские Кроссовки Nike Blazer Mid Suede', imageUrl: '/img/card/boots1.png', price: 12999},
  {title: 'Мужские Кроссовки Nike Air Max 270', imageUrl: '/img/card/boots2.png', price: 12999},
  {title: 'Мужские Кроссовки Nike Blazer Mid Suede', imageUrl: '/img/card/boots3.png', price: 8499},
  {title: 'Кроссовки Puma X Aka Boku Future Rider', imageUrl: '/img/card/boots4.png', price: 8999},
  
];

function App() {
  return (
    <div className="wrapper clear">
      <Drawer></Drawer>
      <Header></Header>
      <div className="content p-40">

        <div className=" mb-40 justify-between d-flex align-center">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img src="/img/icons/search.svg" alt="Search" />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex">
          {arr.map((obj) => (<Card title={obj.title} imageUrl={obj.imageUrl} price={obj.price}></Card>))}
        </div> 

      </div>
    </div>
  );
}

export default App;
