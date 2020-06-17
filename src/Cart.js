import React from 'react';
import CartItem from './CartItem';
var arr=[
    {
        price: 999,
        title: 'Phone',
        qty: 1,
        img: ''
    },
    {
        price: 999,
        title: 'Mobile Phone',
        qty: 8,
        img: ''
    }
];
class Cart extends React.Component {
    render(){
        return(
        <div>
            {arr.map((i)=>{
                return <CartItem val={i}/>;
            })}
            
        </div>
        );

    }
}
export default Cart;