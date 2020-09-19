import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom'

function Shop() {
    useEffect(() => {
        fetchItems();

    }, [])

    const [items, setItems] = useState([])
    const fetchItems = async () => {
        const data = await fetch(
          'https://5e689f9dd426c00016b7e195.mockapi.io/api/v1/posts'
        );
        const items = await data.json()
        console.log(data)
        console.log(items);
        setItems(items)
    }

  return (
    <div>
      {items.map((item) => (
        <h1 key={item.name}>
          <Link to={`/shop/${item.id}`}>{item.name}</Link>
        </h1>
      ))}
    </div>
  );
}

export default Shop;
