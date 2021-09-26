import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Singer from '../Singer/Singer';
import './Body.css'
const Body = () => {
    const [singers, setSingers] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./singer.json')
            .then(res => res.json())
            .then(data => setSingers(data));
    }, [])

    const addToCart = (singer) => {
        const addCart = [...cart, singer];
        setCart(addCart);
    }

    return (
        <div className='body-container'>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
            <div className="singer-container">
                {/* <h3>singers: {singers.length}</h3> */}
                {
                    singers.map(singer => <Singer
                        key={singer.id}
                        singer={singer}
                        addToCart={addToCart}
                    ></Singer>)
                }

            </div>
        </div>
    );
};

export default Body;