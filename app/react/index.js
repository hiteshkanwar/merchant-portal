import RWR from 'react-webpack-rails';
RWR.run();

import ItemDetail from './items/index';
RWR.registerComponent('ItemDetail', ItemDetail);

import Dashboard from './dashboard/index';
RWR.registerComponent('Dashboard', Dashboard);
