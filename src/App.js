import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

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
          <Card></Card>
        </div>

      </div>
    </div>
  );
}

export default App;
