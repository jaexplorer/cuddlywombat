import React, { useState } from 'react';
import BackgroundIcon from '../../../../assets/imgs/fast-food-burger-drink-and-fries.png';
import Tick from '../../../../assets/imgs/checked.png';

const Item = ({ order, setOrder, item: { _id, name, type, subtype, price, quantity } }) => {
  const [selected, setSelected] = useState(!!order.find((o) => o._id === _id));
  const toggleItem = () => {
    if (selected) {
      const toRemove = order.filter((o) => o._id !== _id);
      setOrder(toRemove);
      setSelected(false);
    } else {
      setOrder([...order, { _id, name, type, subtype, price, quantity }]);
      setSelected(true);
    }
  };

  return (
    <div onClick={toggleItem} className={`order-item-container ${selected && 'active'}`}>
      <img src={BackgroundIcon} alt='' />
      <div className='price-container'>AUD ${price}</div>
      <div className='name-container'>{name}</div>
      {selected && (
        <div className='ticked'>
          <img src={Tick} alt='' />
        </div>
      )}
    </div>
  );
};

export default Item;
