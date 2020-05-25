import React from 'react';
import Moment from 'react-moment';
import Bin from '../../../../assets/imgs/recycle-bin.png';

const Order = ({ order, setOrder, table }) => {
  const getAmount = () => {
    let result = 0;
    order.map((o) => {
      result += o.price * o.quantity;
    });

    return result;
  };
  return (
    <div className='order-container'>
      <div className='header-container'>
        <div className='header-title'>Payment for Table: {table}</div>
        <div className='header-text'>
          <Moment format='MMMM Do YYYY, h:mm:ss a'>{new Date()}</Moment>
        </div>
      </div>
      <div className='order-list-container'>
        {order.map((o) => (
          <div className='order-item'>
            <div className='order-name'>{o.name}</div>
            <div className='order-quantity'>Quantity: {o.quantity}</div>
            <div className='order-price'>${o.price} AUD</div>
            <div className='order-button'>
              <img src={Bin} alt='' />
            </div>
          </div>
        ))}
      </div>
      <div className='order-white-container'>
        <div className='subtotal-container'>
          <div className='title'>SubTotal: </div>
          <div className='value'>${getAmount().toFixed(2)}</div>
        </div>
        <div className='total-container'>
          <div className='title'>Total (+10% GST): </div>
          <div className='value'>${(getAmount() * 1.1).toFixed(2)}</div>
        </div>
        <div className='action-button' style={{ background: 'green' }}>
          Sucess
        </div>
      </div>
    </div>
  );
};

export default Order;
