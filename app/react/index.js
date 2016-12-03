import RWR from 'react-webpack-rails';
RWR.run();

import ItemDetail from './items/index';
RWR.registerComponent('ItemDetail', ItemDetail);

import Dashboard from './dashboard/index';
RWR.registerComponent('Dashboard', Dashboard);


import Setting from './settings/index';
RWR.registerComponent('Setting', Setting);

// import Sales from './dashboard/sales';
// RWR.registerComponent('Sales', Sales);