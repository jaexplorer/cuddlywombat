import React from 'react';
import RightArrow from '../../../assets/imgs/right-arrow.png';
import Payment from '../../../assets/imgs/pay.png';
import Order from '../../../assets/imgs/brochure.png';
import Reservations from '../../../assets/imgs/terrace.png';

const Subheader = ({ route, subRoute, panel, setPanel }) => {
  const changePanel = (name) => {
    setPanel(name);
  };
  return (
    <div className='subheader-container'>
      <div className='routes-container'>
        <div className='route-wrapper'>
          <div className='route-title'>Choose Category</div>
          <div className='route-text'>{route}</div>
        </div>
        <img src={RightArrow} alt='' />
        <div className='route-wrapper'>
          <div className='route-title'>Choose Sub Category</div>
          <div className='route-text'>{subRoute}</div>
        </div>
      </div>
      <div className='sub-links'>
        <div
          onClick={() => changePanel('Payment')}
          className={`link-container ${panel === 'Payment' && 'active'}`}
        >
          <img src={Payment} alt='' />
          <div className='link-text'>Payment</div>
        </div>
        <div
          onClick={() => changePanel('Order')}
          className={`link-container ${panel === 'Order' && 'active'}`}
        >
          <img src={Order} alt='' />
          <div className='link-text'>Place Order</div>
        </div>
        <div
          onClick={() => changePanel('Reservations')}
          className={`link-container ${panel === 'Reservations' && 'active'}`}
        >
          <img src={Reservations} alt='' />
          <div className='link-text'>Reservations</div>
        </div>
      </div>
    </div>
  );
};

export default Subheader;
