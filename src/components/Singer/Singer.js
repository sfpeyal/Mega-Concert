import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import './Singer.css'

const Singer = (props) => {
    //console.log(props);
    const { name, age, instruments, gender, country, bankBalance, picture } = props.singer;
    const element = <FontAwesomeIcon icon={faPlusSquare} />
    return (
        <div className='singer-container'>
            <div className='single-singer'>
                <img height={200} width={200} src={picture} alt="" />
                <h4>Name: {name}</h4>
                <p>Music: {instruments}</p>
                <p>Age: {age}</p>
                <p>Gender: {gender}</p>
                <p>From: {country}</p>
                <p>Bank Balance: ${bankBalance}</p>
                <button onClick={() => props.addToCart(props.singer)} className='btn-add'>{element}  Add To Cart</button>
            </div>
        </div>
    );
};

export default Singer;