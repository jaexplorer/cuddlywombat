import React, { Fragment } from 'react';
import Chicken from '../../../assets/imgs/chicken-hand-drawn.png';
import Pasta from '../../../assets/imgs/spaghetti-dish.png';
import Pizza from '../../../assets/imgs/pizza-slice.png';
import Fish from '../../../assets/imgs/fish-hand-drawn-animal.png';
import Cocktail from '../../../assets/imgs/cocktail-glass.png';
import Coffee from '../../../assets/imgs/coffee-cup.png';
import Softdrink from '../../../assets/imgs/cola-can.png';
import Wine from '../../../assets/imgs/wine-glass-hand-drawn-drink.png';

const Subbar = ({ setSubRoute, subRoute, route }) => {
  const changeRoute = (name) => {
    setSubRoute(name);
  };

  return (
    <div className='subbar-container'>
      {route === 'Foods' ? (
        <Fragment>
          <div
            onClick={() => changeRoute('Chicken')}
            className={`subbar-link ${subRoute === 'Chicken' && 'active'}`}
          >
            <img src={Chicken} alt='' />
            <div className='link-text'>Chicken</div>
          </div>
          <div
            onClick={() => changeRoute('Seafood')}
            className={`subbar-link ${subRoute === 'Seafood' && 'active'}`}
          >
            <img src={Fish} alt='' />
            <div className='link-text'>Seafood</div>
          </div>
          <div
            onClick={() => changeRoute('Pizza')}
            className={`subbar-link ${subRoute === 'Pizza' && 'active'}`}
          >
            <img src={Pizza} alt='' />
            <div className='link-text'>Pizza</div>
          </div>
          <div
            onClick={() => changeRoute('Pasta')}
            className={`subbar-link ${subRoute === 'Pasta' && 'active'}`}
          >
            <img src={Pasta} alt='' />
            <div className='link-text'>Pasta</div>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <div
            onClick={() => changeRoute('Cocktail')}
            className={`subbar-link ${subRoute === 'Cocktail' && 'active'}`}
          >
            <img src={Cocktail} alt='' />
            <div className='link-text'>Cocktail</div>
          </div>
          <div
            onClick={() => changeRoute('Coffee')}
            className={`subbar-link ${subRoute === 'Coffee' && 'active'}`}
          >
            <img src={Coffee} alt='' />
            <div className='link-text'>Coffee</div>
          </div>
          <div
            onClick={() => changeRoute('Softdrink')}
            className={`subbar-link ${subRoute === 'Softdrink' && 'active'}`}
          >
            <img src={Softdrink} alt='' />
            <div className='link-text'>Softdrink</div>
          </div>
          <div
            onClick={() => changeRoute('Wine')}
            className={`subbar-link ${subRoute === 'Wine' && 'active'}`}
          >
            <img src={Wine} alt='' />
            <div className='link-text'>Wine</div>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default Subbar;
