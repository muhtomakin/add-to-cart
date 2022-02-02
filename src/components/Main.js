import React, {useEffect, useState} from 'react';
import Data from './Data';
import Items from './Items';

const Main = () => {
    const [items, setItems] = useState(Data)
    const [id, setId] = useState()
    const [title, setTitle] = useState('')   
    const [text, setText] = useState('')
    const [amount, setAmount] = useState(1)


    {/*const incClick = (id) => {
            let tempItem = items.map((item) => {
                if (item.id === id) {
                    return {...item, amount: item.amount + 1}
                }
                return item;           
            });    
        return {...items, items: tempItem}
    }*/}

    const incClick = (id) => {
        let newItems = items.map((item) => {
            if (item.id === id) {
                return {...item, amount: item.amount+1}
            }
            return item
        })                               
        setItems(newItems);                     
    }
    
    const decClick = (id) => {
        let newItems = items.map((item) => {
            if (item.id === id) {
                return {...item, amount: item.amount-1}
            }
            return item
        }).filter((item) => item.amount !== 0)                               
        setItems(newItems);
    }

    const remove = (id) => {
        let newItems = items.filter((x) => x.id !== id)
        setItems(newItems);
    }

    {/*useEffect(() => {
        setItems();
    },[])*/}

    const handleSubmit = (e) => {
        e.preventDefault()
        const newItems = {id, title, text, amount};
        setItems([...items, newItems])
        setId();
        setTitle('')
        setText('')
        alert(`
          ____Your Details____\n
          Id: ${id}
          Title : ${title}
          Text : ${text}
          Amount : 1
        `)
      }

    return (
        <div>
            <label htmlFor='search'>Add Items :</label>
            <form onSubmit={handleSubmit}>
                <label htmlFor='id'>Id :</label>
                <input value={id} type='number' onChange={(e) => setId(e.target.value)} />
                <label htmlFor='title'>Title :</label>
                <input value={title} type='text' onChange={(e) => setTitle(e.target.value)} />
                <label htmlFor='text'>Text :</label>
                <input value={text} type='text' onChange={(e) => setText(e.target.value)} />
                <button type='submit'>Submit</button>
            </form>
            <hr />
            <Items items={items} incClick={incClick} decClick={decClick} remove={remove} />            
        </div>
    );
}

export default Main;
