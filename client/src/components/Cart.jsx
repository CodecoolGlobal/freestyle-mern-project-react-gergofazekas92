import React from 'react'

const Cart = ({items}) => {
  return (
    items.map((item, index)=> (
      <div key={index}> {item}</div>
    ))
  );
}

export default Cart