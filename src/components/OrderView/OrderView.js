import React, { useState } from 'react';
import Item from './components/Item';
import Payment from './components/Payment';
import Order from './components/Order';
import Reservations from './components/Reservations';

const OrderView = ({ route, subRoute, order, setOrder, panel, table, setTable, items }) => {
  const renderPanel = () => {
    switch (panel) {
      case 'Payment':
        return <Payment />;
      case 'Order':
        return <Order table={table} order={order} setOrder={setOrder} />;
      case 'Reservations':
        return <Reservations table={table} setTable={setTable} />;
      default:
        return <Payment />;
    }
  };

  return (
    <div className='orderview-container'>
      <div className='items-container'>
        {items
          .filter((i) => i.type === route && i.subtype === subRoute)
          .slice(0, 9)
          .map((item) => (
            <Item key={item._id} item={item} order={order} setOrder={setOrder} />
          ))}
      </div>
      <div className='order-panel'>{renderPanel()}</div>
    </div>
  );
};

export default OrderView;
