import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus, faDollarSign } from '@fortawesome/free-solid-svg-icons'
import './Cart'
import Name from '../Name/Name';

const Cart = (props) => {
    const { length } = props.cart
    const element = <FontAwesomeIcon icon={faUserPlus} />
    const element2 = <FontAwesomeIcon icon={faDollarSign} />
    const { cart } = props;
    let balance = 0;
    for (const singer of cart) {
        balance = balance + parseInt(singer.bankBalance);
    }
    let newSinger = '';
    for (const singer of cart) {
        newSinger = singer.name;


    }
    return (
        <div>
            <h3>{element} Singer added: {length}</h3>
            <p>{element2} Bank balance: ${balance}</p>
            <Name name={newSinger}></Name>
        </div>
    );
};

export default Cart;