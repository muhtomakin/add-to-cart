import React from 'react';

function Items({items, incClick, decClick, remove}) {
    return (
        <div>
            {items.map((item) => (
                <div key={item.id}>               
                    <button type='button' onClick={() => incClick(item.id)}>+</button>
                    <button type='button' onClick={() => decClick(item.id)}>-</button>
                    <div key={item.title}>Item {item.id} amount: {item.amount}</div>                   
                    <button type='button' onClick={() => remove(item.id)}>remove</button>
                </div>
            ))}
        </div>
    );
}

export default Items;
