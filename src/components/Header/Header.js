import React from 'react';
import SettingsIcon from '../../../assets/imgs/settings.png';
const Header = ({ table, route }) => {
  return (
    <div className='header-container'>
      <div className='header-title-container'>
        <div className='header-title'>{route}</div>
        <div className='header-subtitle'>Cuddly Wombat Food & Beverages</div>
      </div>
      <div className='table-container'>
        <div className='table-title'>{table ? `Table ${table}` : ''}</div>
        <div className='table-subtitle'>
          {table ? 'Currently Selected' : 'No Tables Currently Selected'}
        </div>
      </div>
      <img src={SettingsIcon} alt='' />
    </div>
  );
};

export default Header;
