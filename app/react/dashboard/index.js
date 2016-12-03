import React from 'react';
import ReactDOM from 'react-dom';
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
import Checkbox from 'material-ui/Checkbox';
import ReactTooltip from 'react-tooltip';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class Dashboard extends React.Component {

  getChildContext() {
      return { muiTheme: getMuiTheme(lightBaseTheme) };
  }


  constructor(props) {
    super(props);
    this.state = {
      open: true,
      newClass: "",
      showCheckboxes: false,
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleOpen= this.handleOpen.bind(this);
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
  
  handleOpen(){
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
            <div className="user-profile-box">
            <div className="user-pic-circle">
            <span className="pic">
            <img src="/assets/dario.jpeg"/>
            </span>
            </div>
            <span className="user-first">Dario</span>
            <span className="user-last">Matias</span>
            </div>
            <MenuItem  className="menu first-menu" primaryText="Sign out" href="/users/sign_out" data-method="delete"/>
            <MenuItem className="menu first-menu"><a href="/dashboard" className="link-tag">Home</a></MenuItem>            
            <MenuItem className="menu"><a href="/dashboard/sales" className="link-tag">Sales</a></MenuItem>
            <MenuItem className="menu"><a href="/dashboard/items/library" className="link-tag">Items</a></MenuItem>
            <MenuItem className="menu">Employees</MenuItem>
            <MenuItem className="menu">Customers</MenuItem>
            <MenuItem className="menu first-menu"><a href="/settings" className="link-tag">Settings</a></MenuItem>
            
          </Drawer>
        </div>
        <div className = {'main-content ' + this.state.newClass}> 
         <div className="dashboard">
            <div className="index-header">
              <div className="index-header-item">
                Welcome to SpeedEtab Dashboard!
             </div>
             <div className="index-grid">
                <ul className="list-inline">
                  <li><img src="/assets/grid.png" onClick={this.handleOpen}/>
                  </li>
                  <li><a href="#"><img src="/assets/help.png"/>Help
                    </a>
                  </li>
                </ul>
             </div>
             </div>
           <div className="payment-box">
              <p><b>Next step to take payments</b></p>
              <div>
                <div className="bank-con">
                  <img src="/assets/bank.png"/>
                </div>
                <div className="bank-content">
                    <h5>Connect to stripe</h5>
                    <p>Register with SpeedEtab Stripe managed accounts to receive deposits from your payments within one to two business days. Customers can order and you can continue to accept payments before your bank account is verified.</p>
                </div>
              </div>
           </div>
           <div>
            <div className="dashboard-box">
              <div className="widget-heading">
                  <a id="ember2548"> Deposits
                  </a>    
              </div>
              <div className="widget-text widget-text-deposit ">
                  <div className="widget-text-body ">
                      <div className="widget-text--header">
                        $91.52
                      </div>
                      <div className="widget-text--subtext">
                        Upcoming Deposits <br></br>
                      </div>
                  </div>
                  </div>
              </div>
            </div>
            <div className="dashboard-box">
              <div className="widget-heading">
                  <a id="ember2548"> Gross Sales
                  </a>    
              </div>
              <div className="dashboard-content">
                <div className="dashboard-image"></div>
                <h5>No sales yet today</h5>
              </div>
            </div>
            <div className="dashboard-box">
              <div className="widget-heading">
                  <a id="ember2548"> Top items by Sales
                  </a>    
              </div>
              <div className="dashboard-content">
                <div className="dashboard-image">
                </div>
                <h5>No sales yet today</h5>
              </div>
            </div>
            <div className="dashboard-box">
              <div className="widget-heading">
                  <a id="ember2548"> Top Categories by Sales
                  </a>    
              </div>
              <div className="dashboard-content">
                <div className="dashboard-image"></div>
                <h5>No category sales today</h5>
              </div>
            </div>
            <div className="dashboard-box">
              <div className="widget-heading">
                  <a id="ember2548"> Your Customers
                  </a>    
              </div>
              <div className="dashboard-content">
                <div className="user-image"></div>
                <h5>No customer information</h5>
              </div>
            </div>
            <div className="dashboard-box">
              <div className="widget-heading">
                  <a id="ember2548"> Customer Pending
                  </a>    
              </div>
              <div className="dashboard-content">
                <div className="user-image"></div>
                <h5>No customer information</h5>
              </div>
            </div>
            <div className="dashboard-box">
              <div className="widget-heading">
                  <a id="ember2548"> Customers Visits
                  </a>    
              </div>
              <div className="dashboard-content">
                <div className="user-image"></div>
                <h5>No customer information</h5>
              </div>
            </div>
            <div className="dashboard-box">
              <div className="widget-heading">
                  <a id="ember2548"> Customer Frequency
                  </a>    
              </div>
              <div className="dashboard-content">
                <div className="user-image"></div>
                <h5>No customer information</h5>
              </div>
            </div>
             <div className="dashboard-box">
              <div className="widget-heading">
                  <a id="ember2548"> Customers Recency
                  </a>    
              </div>
              <div className="dashboard-content">
                 <table>
                  <tr>
                    <td width="80%"><b>Today</b></td>
                    <td width="10%">0</td>
                    <td width="10%">0%</td>
                  </tr>
                   <tr>
                    <td width="80%"><b>Last 7 Days</b></td>
                    <td width="10%">0</td>
                    <td width="10%">0%</td>
                  </tr>
                   <tr>
                    <td width="80%"><b>Last 30 Days</b></td>
                    <td width="10%">0</td>
                    <td width="10%">0%</td>
                  </tr>
                   <tr>
                    <td width="80%"><b>Last Year</b></td>
                    <td width="10%">0</td>
                    <td width="10%">0%</td>
                  </tr>
                   <tr>
                    <td width="80%"><b>More Than a year</b></td>
                    <td width="10%">0</td>
                    <td width="10%">0%</td>
                  </tr>

                </table>
              </div>
            </div>
           
           </div>
        </div>
      </div>
    );
  }
}

Dashboard.childContextTypes = {
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


export default Dashboard;