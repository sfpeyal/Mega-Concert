import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus, faDollarSign } from '@fortawesome/free-solid-svg-icons'
import './Cart'


const Cart = (props) => {
    console.log(props.cart);
    const { length } = props.cart
    const element = <FontAwesomeIcon icon={faUserPlus} />
    const element2 = <FontAwesomeIcon icon={faDollarSign} />
    const { cart } = props;
    let balance = 0;
    let showName = []
    for (const singer of cart) {
        balance = balance + parseInt(singer.bankBalance);
        showName.push(singer)
    }
    return (
        <div>
            <h3>{element} Singer added: {length}</h3>
            <p>{element2} Bank balance: ${balance}</p>

            {
                showName.map((item) => (
                    <div>
                        <h4 key={item.id}>{item.name}</h4>
                    </div>
                ))
            }


        </div>
    );
}
export default Cart;