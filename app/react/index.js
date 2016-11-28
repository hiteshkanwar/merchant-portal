import RWR from 'react-webpack-rails';
RWR.run();


// import DrawerExample from './components/DrawerExample';
// RWR.registerComponent('DrawerExample', DrawerExample);

// import Item from './components/Item';
// RWR.registerComponent('Item', Item);

import ItemDetail from './items/index';
RWR.registerComponent('ItemDetail', ItemDetail);

import Dashboard from './dashboard/index';
RWR.registerComponent('Dashboard', Dashboard);
// import ItemDetail from './items/index';
// RWR.registerComponent('ItemDetail', ItemDetail);


// import Customer from './dashboard/customer';
// RWR.registerComponent('Customer', Customer);