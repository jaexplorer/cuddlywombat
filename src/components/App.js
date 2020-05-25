import React, { Fragment, useState } from 'react';
import Sidebar from './Sidebar/Sidebar';
import Subbar from './Subbar/Subbar';
import Header from './Header/Header';
import OrderView from './OrderView/OrderView';
import Subheader from './Subheader/Subheader';
import { items as i } from '../utils/items';

import { ipcRenderer } from 'electron';

const App = () => {
  const [route, setRoute] = useState('Foods');
  const [subRoute, setSubRoute] = useState('Chicken');
  const [panel, setPanel] = useState('Reservations');
  const [order, setOrder] = useState([]);
  const [table, setTable] = useState(1);
  const [items, setItems] = useState(i());

  return (
    <div className='main-container'>
      <Sidebar setSubRoute={setSubRoute} setRoute={setRoute} route={route} />
      <Subbar setSubRoute={setSubRoute} subRoute={subRoute} route={route} />
      <div className='main-view'>
        <Header route={route} table={table} />
        <Subheader subRoute={subRoute} route={route} panel={panel} setPanel={setPanel} />
        <OrderView
          items={items}
          order={order}
          route={route}
          subRoute={subRoute}
          setOrder={setOrder}
          panel={panel}
          table={table}
          setTable={setTable}
        />
      </div>
    </div>
  );
};

export default App;
