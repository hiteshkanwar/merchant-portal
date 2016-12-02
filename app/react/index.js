import RWR from 'react-webpack-rails';
RWR.run();

import ItemDetail from './items/index';
RWR.registerComponent('ItemDetail', ItemDetail);

import Dashboard from './dashboard/index';
RWR.registerComponent('Dashboard', Dashboard);


import Settings from './settings/index';
RWR.registerComponent('Settings', Settings);

import Sales from './dashboard/sales';
RWR.registerComponent('Sales', Sales);