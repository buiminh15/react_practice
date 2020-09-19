import React, { useEffect, useState } from 'react';

function ItemDetail({ match }) {
  useEffect(() => {
    fetchItem();
    console.log(match);
  }, []);

  const [item, setItem] = useState({});
  const fetchItem = async () => {
    const fetchItem = await fetch(
      `https://5e689f9dd426c00016b7e195.mockapi.io/api/v1/posts/${match.params.id}`
    );
    const item = await fetchItem.json();
    setItem(item);
  };

  return (
    <div>
      <h2>{item.name}</h2>
      <img src={item.avatar} />
      <p>{item.description}</p>
    </div>
  );
}

export default ItemDetail;
