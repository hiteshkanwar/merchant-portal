import React from 'react';
import ReactDOM from 'react-dom';
import DonutChart from 'react-donut-chart';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Drawer from 'material-ui/Drawer';
import RaisedButton from 'material-ui/RaisedButton';
import {Tabs, Tab} from 'material-ui/Tabs';
import DatePick from './date_picker';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Summary from './summary_radio';
import AllCustom from './all_day';
import ExportMenu from './export_menu';
import AdvanceOption from './advance_options';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import injectTapEventPlugin from 'react-tap-event-plugin';
// injectTapEventPlugin();



class Sales extends React.Component {

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
      <div>

<div id="chart-container"></div>
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
            <MenuItem className="menu first-menu" primaryText="Sign out"  href="/users/sign_out" 
            data-method="delete"/>
            <MenuItem className="menu first-menu"><a href="/dashboard" className="link-tag">Home</a></MenuItem>
            <MenuItem className="menu"><a href="/dashboard/sales" className="link-tag">Sales</a></MenuItem>
            <MenuItem className="menu"><a href="/dashboard/items/library" className="link-tag">Items</a></MenuItem>
            <MenuItem className="menu"><a href="/settings" className="link-tag">Settings</a></MenuItem>
            <MenuItem className="menu">Customers</MenuItem>
        </Drawer>
        </div>

        <div className = {'main-content ' + this.state.newClass}> 
          <div className="headline">Sales</div>
          
          <Tabs className="item-tabs" > 
            <Tab label="Reports" className="" style={{backgroundColor: '#fff',
                color:"#64696e", fontWeight:"bold", textTransform:"inherit", fontSize: "16px",
                border:"none",}}>
              <div className="inner-tabs" style={{ backgroundColor: '#fff', color:"#64696e",
                fontWeight:"bold", textTransform:"inherit", fontSize: "16px", border:"none",}}>
                <div>
                  <div className="category">
                   <DatePick/>
                  </div>

                  <div className="all-daycategory category">
                   <AllCustom/>
                  </div>
                  <div className="search-field">
                    <Summary/>
                    <AdvanceOption/>
                  </div>
                    <ExportMenu/>
                  <div className="clear"></div>
                  <DonutChart
                  data={[{
                      label: 'Give you up',
                      value: 60
                  },
                  {
                      label: '',
                      value: 20,
                      isEmpty: true
                  },
                  {
                      label: 'Coffee',
                      value: 20
                     
                  }
                  ]} />
                  <div className="table-border">
                  <Table>
                    <TableHeader adjustForCheckbox={this.state.showCheckboxes}>
                      <TableRow>
                        <TableHeaderColumn>Category</TableHeaderColumn>
                        <TableHeaderColumn>Units</TableHeaderColumn>
                        <TableHeaderColumn>Revenue</TableHeaderColumn>
                        <TableHeaderColumn>Avg.Price</TableHeaderColumn>
                        <TableHeaderColumn className="text-right">% of Sales</TableHeaderColumn>
                      </TableRow>
                    </TableHeader>
                    <TableBody  displayRowCheckbox={this.state.showCheckboxes}>
                      <TableRow>
                        <TableRowColumn>High School Menu</TableRowColumn>
                        <TableRowColumn>46</TableRowColumn>
                        <TableRowColumn>$272.19</TableRowColumn>
                        <TableRowColumn>$5.05</TableRowColumn>
                        <TableRowColumn className="text-right">80.26%</TableRowColumn>
                      </TableRow>
                      <TableRow>
                        <TableRowColumn>Drinks</TableRowColumn>
                        <TableRowColumn>4</TableRowColumn>
                        <TableRowColumn>$2.99</TableRowColumn>
                        <TableRowColumn>$2.25</TableRowColumn>
                        <TableRowColumn className="text-right">2.66%</TableRowColumn>
                      </TableRow>
                      <TableRow>
                        <TableRowColumn>Sales</TableRowColumn>
                        <TableRowColumn>1</TableRowColumn>
                        <TableRowColumn>$2.99</TableRowColumn>
                        <TableRowColumn>$2.99</TableRowColumn>
                        <TableRowColumn className="text-right">0.88%</TableRowColumn>
                      </TableRow>
                      <TableRow>
                        <TableRowColumn>Build Your Own</TableRowColumn>
                        <TableRowColumn>5</TableRowColumn>
                        <TableRowColumn>$54.95</TableRowColumn>
                        <TableRowColumn>$10.99</TableRowColumn>
                        <TableRowColumn className="text-right">16.20%</TableRowColumn>
                      </TableRow>
                    </TableBody>
                  </Table>
                  </div>
                </div>
              </div>
            </Tab>
         </Tabs>
        </div>
      </div>
    );
  }
}

Sales.childContextTypes = {
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
              </ul>
            </li>
            <li><MenuItem><img src="/assets/settings.svg"/></MenuItem>
              <ul>
                <li><a href="#">Settings</a></li>
              </ul>
            </li>
            <li><MenuItem><img src="/assets/library-books.svg"/></MenuItem>
              <ul>
                <li><a href="#">Items</a></li>
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

export default Sales;