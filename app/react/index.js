import RWR from 'react-webpack-rails';
RWR.run();


// import DrawerExample from './components/DrawerExample';
// RWR.registerComponent('DrawerExample', DrawerExample);

// import Item from './components/Item';
// RWR.registerComponent('Item', Item);

// import ItemDetail from './settings/index';
// RWR.registerComponent('ItemDetail', ItemDetail);

import HomePage from './dashboard/index';
RWR.registerComponent('HomePage', HomePage);

// import Customer from './dashboard/customer';
// RWR.registerComponent('Customer', Customer);