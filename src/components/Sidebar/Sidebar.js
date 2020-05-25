import React from 'react';
import Logo from '../../../assets/imgs/logo-01.png';
import FoodIcon from '../../../assets/imgs/cooking-pot-outline-with-cover.png';
import DessertIcon from '../../../assets/imgs/melting-hand-drawn-ice-cream-cone.png';
import DrinkIcon from '../../../assets/imgs/plastic-glass-with-straw.png';
import SidesIcon from '../../../assets/imgs/salad-bowl-hand-drawn-food.png';

const Sidebar = ({ route, setRoute, setSubRoute }) => {
  const changeRoute = (name) => {
    setRoute(name);
    setSubRoute(`${name === 'Foods' ? 'Chicken' : 'Cocktail'}`);
  };

  return (
    <div className='sidebar-container'>
      <div className='sidebar-logo'>
        <img src={Logo} alt='' />
      </div>
      <div
        onClick={() => changeRoute('Foods')}
        className={`sidebar-link ${route === 'Foods' && 'active'}`}
      >
        <img src={FoodIcon} alt='' />
        <div className='link-text'>Foods</div>
      </div>
      <div
        onClick={() => changeRoute('Drinks')}
        className={`sidebar-link ${route === 'Drinks' && 'active'}`}
      >
        <img src={DrinkIcon} alt='' />
        <div className='link-text'>Drinks</div>
      </div>
      <div
        onClick={() => changeRoute('Sides')}
        className={`sidebar-link ${route === 'Sides' && 'active'}`}
      >
        <img src={SidesIcon} alt='' />
        <div className='link-text'>Sides</div>
      </div>
      <div
        onClick={() => changeRoute('Desserts')}
        className={`sidebar-link ${route === 'Desserts' && 'active'}`}
      >
        <img src={DessertIcon} alt='' />
        <div className='link-text'>Desserts</div>
      </div>
    </div>
  );
};

export default Sidebar;
