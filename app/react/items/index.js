import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import DropDownMenu from 'material-ui/DropDownMenu';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import Drawer from 'material-ui/Drawer';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import SvgIcon from 'material-ui/SvgIcon'; 
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Dialog from 'material-ui/Dialog';
import Divider from 'material-ui/Divider';
import ReactTooltip from 'react-tooltip';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import CreateItem from './create_item';
import ImportItem from './import_item';
import SelectField from 'material-ui/SelectField';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Visibility from 'material-ui/svg-icons/action/visibility';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';
import AllCategory from './all_categories_dropdown';
import SetItems from './set_items';
import CreateModifier from './create_modifier';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import injectTapEventPlugin from 'react-tap-event-plugin';
// injectTapEventPlugin();



class ItemDetail extends React.Component {

  getChildContext() {
      return { muiTheme: getMuiTheme(lightBaseTheme) };
  }


  constructor(props) {
    super(props);
    this.state = {
      open: true,
      newClass: "",
      showCheckboxes: false,
      value: 10,
    };
    this.handleToggle = this.handleToggle.bind(this);
    
  }

  handleToggle(){         
    
    var setClass = (this.state.newClass.length===0) ? "new-main-content" : ""
    this.setState(
      {
        open: !this.state.open,
        newClass: setClass,
      }
    );
  }

  handleOpne(){
    this.setState({open: true});
  }
  
  

  render() {
    return (
      <div >
        <ReactTooltip />
        <div className="sidebar ">
          <StaticDrawer/>
          <RaisedButton label="nil" onClick={this.handleToggle}/>
          <Drawer open={this.state.open}>
            <MenuItem className="menu first-menu" primaryText="Sign out"  href="/users/sign_out" 
            data-method="delete"/>
            <MenuItem className="menu first-menu"><a href="/dashboard" className="link-tag">Home</a></MenuItem>
            <MenuItem className="menu">Sales</MenuItem>
            <MenuItem className="menu"><a href="/dashboard/items/library" className="link-tag">Items</a></MenuItem>
            <MenuItem className="menu">Customers</MenuItem>
            <MenuItem className="menu " primaryText="Analytics"  rightIcon={<ArrowDropRight />}
              menuItems={[
                <MenuItem primaryText="Sales" />,
                <MenuItem primaryText="Brands" />,
                <MenuItem primaryText="Trends" />,
                <MenuItem primaryText="New vs. Old" />,
                <MenuItem primaryText="Customers" />,
              ]} />
          </Drawer>
        </div>

        <div className = {'main-content ' + this.state.newClass}> 
          <div className="headline">Items</div>
          
          <Tabs className="item-tabs" > 
            <Tab label="Item Library  " className="active" style={{backgroundColor: '#fff',
                color:"#64696e", fontWeight:"bold", textTransform:"inherit", fontSize: "16px",
                border:"none",}}>
              <div className="inner-tabs" style={{ backgroundColor: '#fff', color:"#64696e",
                fontWeight:"bold", textTransform:"inherit", fontSize: "16px", border:"none",}}>
                <div>
                  <div className="category">
                    <AllCategory/>
                  </div>
                  <div className="searh-rightfield">
                    <div className="search-field">
                      <input type="text" />
                    </div>
                    <ImportItem/>
                    <RaisedButton label="Export" className="import-btn"/>
                    <CreateItem/>
                  </div>
                  <div className="clear"></div>
                  <Table>
                    <TableHeader adjustForCheckbox={this.state.showCheckboxes}>
                      <TableRow>
                        <TableHeaderColumn>Name</TableHeaderColumn>
                        <TableHeaderColumn>Category</TableHeaderColumn>
                        <TableHeaderColumn className="text-right">Price</TableHeaderColumn>
                      </TableRow>
                    </TableHeader>
                    <TableBody  displayRowCheckbox={this.state.showCheckboxes}>
                      <TableRow>
                        <TableRowColumn>Chocolate Cake</TableRowColumn>
                        <TableRowColumn>Breakfast before 4:30</TableRowColumn>
                        <TableRowColumn className="text-right">2 Price Points</TableRowColumn>
                      </TableRow>
                      <TableRow>
                        <TableRowColumn>Coffee</TableRowColumn>
                        <TableRowColumn>Uncategorized</TableRowColumn>
                        <TableRowColumn className="text-right">2 Price Points</TableRowColumn>
                      </TableRow>
                      <TableRow>
                        <TableRowColumn>Cupcake</TableRowColumn>
                        <TableRowColumn>Breakfast before 4:30</TableRowColumn>
                        <TableRowColumn className="text-right">2 Price Points</TableRowColumn>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>
            </Tab>

            <Tab label="Modifiers" 
              style={{
                backgroundColor: '#fff',
                color:"#64696e",
                fontWeight:"bold",
                textTransform:"inherit",
                fontSize: "16px",
              }}>
              <div className="inner-tabs" style={{ backgroundColor: '#fff', color:"#64696e",
                fontWeight:"bold", textTransform:"inherit", fontSize: "16px", border:"none",}}>
                <div>
                  <div className="searh-rightfield">
                    <CreateModifier/>
                  </div>
                  <div className="clear"></div>
                  <Table>
                    <TableHeader adjustForCheckbox={this.state.showCheckboxes}>
                      <TableRow>
                        <TableHeaderColumn>Set Name</TableHeaderColumn>
                        <TableHeaderColumn>Options</TableHeaderColumn>
                      </TableRow>
                    </TableHeader>
                    <TableBody  displayRowCheckbox={this.state.showCheckboxes}>
                      <TableRow>
                        <TableRowColumn>Coffee Modifiers</TableRowColumn>
                        <TableRowColumn>sugar,Cream, no sugar,No Cream</TableRowColumn>
                        <TableRowColumn><SetItems/></TableRowColumn>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>
            </Tab>

            <Tab label="Categories" 
              style={{
                backgroundColor: '#fff',
                color:"#64696e",
                fontWeight:"bold",
                textTransform:"inherit",
                fontSize: "16px",
              }}>
            </Tab>

            <Tab label="Promo Codes" 
              style={{
                backgroundColor: '#fff',
                color:"#64696e",
                fontWeight:"bold",
                textTransform:"inherit",
                fontSize: "16px",
              }}>
            </Tab>

            <Tab label="Taxes" 
              style={{
                backgroundColor: '#fff',
                color:"#64696e",
                fontWeight:"bold",
                textTransform:"inherit",
                fontSize: "16px",
              }}>
            </Tab>
            <Tab label="Gift Cards" 
              style={{
                backgroundColor: '#fff',
                color:"#64696e",
                fontWeight:"bold",
                textTransform:"inherit",
                fontSize: "16px",
              }}>
            </Tab>

            <Tab label="Settings" 
              style={{
                backgroundColor: '#fff',
                color:"#64696e",
                fontWeight:"bold",
                textTransform:"inherit",
                fontSize: "16px",
              }}>
            </Tab>
          </Tabs>
        </div>
      </div>
    );
  }
}

ItemDetail.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

const style = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  marginRight: 20,
  paper: {
    display: 'inline-block',
    float: 'left',
    margin: '16px 32px 16px 0',
  },
  rightIcon: {
    textAlign: 'center',
    lineHeight: '24px',
  },
};


const HomeIcon = (props) => (
  <SvgIcon {...props}>
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
  </SvgIcon>
);
const iconStyles = {
  marginRight: 24,
};


class StaticDrawer extends React.Component{
  constructor(props) {
      super(props);
      this.state = {open: true};
      this.handleToggle = this.handleToggle.bind(this);
    }

    handleToggle () { this.setState({open: !this.state.open});}

  render() {
    return (
      <div>
        <FlatButton label="D2" disabled={true} onClick={this.handleToggle.false} style={{
      display: 'none',
    }}/>
        <Drawer open={this.state.open}  width={60} >
          <MenuItem className="search-icon"><img src="/assets/magnify.svg"/></MenuItem>
          <ul className="smallmenu">
            <li><MenuItem><img src="/assets/home.svg"/></MenuItem>
                <ul>
            <li><a href="#">Home</a></li>
          </ul>
            </li>
            <li><MenuItem><img src="/assets/chart-line.svg"/></MenuItem>
              <ul>
            <li><a href="#">Sales</a></li>
            <li><a href="#">Brand</a></li>
            <li><a href="#">Trends</a></li>
            <li><a href="#">New vs.Old</a></li>
            <li><a href="#">Customers</a></li>
          </ul>
            </li>
            <li><MenuItem><img src="/assets/settings.svg"/></MenuItem>
              <ul>
                <li><a href="#">Settings</a></li>
                <li><a href="#">Chalkboard</a></li>
                <li><a href="#">Menu</a></li>
                <li><a href="#">Inventroy</a></li>
                <li><a href="#">Hours</a></li>
              </ul>
            </li>
            <li><MenuItem><img src="/assets/library-books.svg"/></MenuItem>
              <ul>
                <li><a href="#">Flash</a></li>
                <li><a href="#">Cash</a></li>
                <li><a href="#">Staff</a></li>
                <li><a href="#">Transactions</a></li>
              </ul>
            </li>
          </ul>
          
        </Drawer>
      </div>
    );
  }
}

function handleActive(tab) {
  alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
}

export default ItemDetail;