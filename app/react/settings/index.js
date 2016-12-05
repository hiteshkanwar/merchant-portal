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
import ImageUpload from './upload_image';
import SelectState from './select_state';
import SelectCountry from './select_country';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import injectTapEventPlugin from 'react-tap-event-plugin';

class Setting extends React.Component{
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
            <MenuItem className="menu"><a href="/dashboard" className="link-tag">Home</a></MenuItem>            
            <MenuItem className="menu"><a href="/dashboard/sales" className="link-tag">Sales</a></MenuItem>
            <MenuItem className="menu"><a href="/dashboard/items/library" className="link-tag">Items</a></MenuItem>
            <MenuItem className="menu"><a href="/settings" className="link-tag">Settings</a></MenuItem>
            <MenuItem className="menu">Customers</MenuItem>
          </Drawer>
        </div>
        <div className = {'main-content ' + this.state.newClass}> 
            <div className="first-section-box">
              <h1 className="heading-text">
                <img src="/assets/picture.png" className="icon-image1"/>VENUE PICTURES
              </h1>
              <form>
                <div className="image-box">
                  <div className="form-group">
                    <label></label>
                    <ImageUpload/>
                  </div>
                </div>
                <div className="image-box-new">
                  <div className="form-group">
                    <label></label>
                    <ImageUpload/>
                  </div>
                </div>
                <div className="clearfix"></div>
                <div className="submit-box">
                  <input type="button" name="submit" value="Submit"/> 
                </div>
              </form>
            </div>
          <div className="first-section-box">
            <h1 className="heading-text">
              <img src="/assets/equalizer.png" className="icon-image"/>VENUE DETAILS
            </h1>
            <div className="form-fields">
              <form>
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" name="name"/>
                </div><br/>
                <div className="form-group">
                  <label>Description</label>
                  <input type="text" name="list-image"/>
                </div>
                <div className="form-group">
                  <label>Pickup Instructions</label>
                  <input type="text" name="name"/>
                </div><br/>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="text" name="list-image"/>
                </div>
                <div className="form-group">
                  <label>Tax Rate</label>
                  <input type="text" name="name"/>
                </div><br/>
                <div className="form-group">
                  <label>Address Line 1</label>
                  <input type="text" name="list-image"/>
                </div>
                <div className="form-group">
                  <label>Address Line 2</label>
                  <input type="text" name="name"/>
                </div><br/>
                <div className="form-group">
                  <label>City</label>
                  <input type="text" name="list-image"/>
                </div>
                <div className="form-group">
                  <label>state</label>
                  <SelectState/>
                </div>
                <div className="form-group">
                  <label>Zip Code</label>
                  <input type="text" name="list-image"/>
                </div>
                <div className="form-group">
                  <label>Country</label>
                  <SelectCountry/>
                </div>
                <div className="submit-box">
                  <input type="button" name="submit" value="Submit"/> 
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Setting.childContextTypes = {
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
          <MenuItem className="search-icon"><img src="/assets/magnify.svg"/>
          </MenuItem>
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

export default Setting;