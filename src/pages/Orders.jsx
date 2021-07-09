import React from 'react';
import axios from 'axios';
import AppContext from '../context';
import Card from '../components/Card';

function Orders () {
    const [orders, setOrders] = React.useState([]);
    const {isItemAdded} = React.useContext(AppContext);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get('https://60d3a00561160900173c97b8.mockapi.io/orders');
                setOrders(data.map((obj) => obj.items).flat());
                setIsLoading(false);
            } catch (error) {
                console.log('Ошибка при загрузке заказов');
            }
        })();
    }, []);
        
    const renderItems = () => {
        const filtredItems = orders;

        return (isLoading ? [...Array(8)] : filtredItems)
            .map((item, index) => (
                <Card 
                    key={index}
                    {...item}
                    added={isItemAdded(item && item.imageUrl)}
                >
                 </Card>))
    };

    
    return (
        
        <div className="content p-40">
            <div className=" mb-40 justify-between d-flex align-center">
                <h1>Мои заказы</h1>            
            </div>

        <div className="d-flex flex-wrap">

            {renderItems()}
            
        </div> 

        </div>
    )
}

export default Orders;