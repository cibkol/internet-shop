function Drawer () {
    return (
        <div className="overlay" style={{display: 'none'}}>
            <div className="drawer">
                <h2 className="d-flex justify-between mb-30">Корзина<img src="/img/icons/btn-remove-hover.svg" className="removeBtn cu-p" alt="exit" /></h2>
                <div className="items">
                    <div className="cartItem d-flex align-center mb-20">
                        <div style={{backgroundImage: 'url(/img/card/boots1.png)'}} className="cartItemImg"></div>

                        <div className="mr-20 flex">
                            <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                            <b>12 999 руб.</b>
                        </div>
                        <img src="/img/icons/btn-remove-hover.svg" className="removeBtn" alt="remove" />
                    </div>
                    <div className="cartItem d-flex align-center mb-20">
                        <div style={{backgroundImage: 'url(/img/card/boots1.png)'}} className="cartItemImg"></div>
                        <div className="mr-20 flex">
                            <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                            <b>12 999 руб.</b>
                        </div>
                        <img src="/img/icons/btn-remove-hover.svg" className="removeBtn" alt="remove" />
                    </div>
                </div>
                <div className="cartTotalBlock">
                    <ul>
                        <li className="d-flex">
                            <span>Итого:</span>
                            <div></div>
                            <b>21 498 руб.</b>
                        </li>
                        <li className="d-flex">
                            <span>Налог 5%:</span>
                            <div></div>
                            <b>1074 руб.</b>
                        </li>
                    </ul>          
                    <button className="greenButton">Оформить заказ <img src="/img/icons/arrow.svg" alt="" /></button>
                </div>
            </div>
        </div>
    )
}

export default Drawer;