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
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class DrawerExample extends React.Component {

  getChildContext() {
      return { muiTheme: getMuiTheme(lightBaseTheme) };
  }


  constructor(props) {
    super(props);
    this.state = {
      open: true,
      newClass: ""
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle(){         
    
    var setClass = (this.state.newClass.length===0) ? "new-main-content" : ""
    this.setState(
      {
        open: !this.state.open,
        newClass: setClass
      }
      );
    this
  }

  render() {
    return (
      <div >
       <div className="top-header">
          <div className="logo">
            <img src="../assets/logo-default.png"/>
          </div>
          <div className="notify-icons">
          <ul>
          <li>
            <IconMenu
            iconButtonElement={
              <IconButton touch={true}>
                <img src="../assets/bell.svg"/>
              </IconButton>
            }
          >
          <div className="menu-icon top-margin">
            <MenuItem primaryText="You have no new notification" />
          </div>
          </IconMenu>
          </li>
          <li>
             <IconMenu
            iconButtonElement={
              <IconButton touch={true}>
                <img src="../assets/account-circle.svg"/>
              </IconButton>
            }
          >
          <div className="menu-icon top-margin">
            <MenuItem primaryText="My profile" className="profile" />
            <MenuItem primaryText="logout" className="logout"/>
          </div>
          </IconMenu>
          
          </li>
          </ul>
          </div>
       </div>
        <div className="sidebar ">
          <StaticDrawer/>
          <RaisedButton label="nil" onClick={this.handleToggle}/>
          <Drawer open={this.state.open}>
            <MenuItem className="search-drawer">
            <select>
              <option>Tap 42</option>
              <option>Choose..</option> 
            </select>
            </MenuItem>
            <MenuItem className="menu"><img src="../assets/home.svg"/>Home</MenuItem>
            
            <MenuItem className="menu analytic-img" primaryText="Analytics"  rightIcon={<ArrowDropRight />}
              menuItems={[
                <MenuItem primaryText="Sales" />,
                <MenuItem primaryText="Brands" />,
                <MenuItem primaryText="Trends" />,
                <MenuItem primaryText="New vs. Old" />,
                <MenuItem primaryText="Customers" />,
              ]} />
            <MenuItem className="menu"><img src="../assets/settings.svg"/>Operations
            </MenuItem>
            <MenuItem className="menu"><img src="../assets/library-books.svg"/>Reports
            </MenuItem>
          </Drawer>
        </div>
        <div className = {'main-content ' + this.state.newClass}>         
          <div className = 'bodytag'>
            <div className="header">
              <h1>Tap 42 <span> One of Fort Lauderdale  best places to eat and hang out with friends!!
              </span> </h1>
                <nav>
                  <ul>
                    <li>
                      <HomeIcon style={iconStyles} />Home
                    </li>
                    <li>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/>
                        <path d="M0-.25h24v24H0z" fill="none"/>
                      </svg>
                    </li>
                    <li>
                      Operations
                    </li>
                    <li>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/>
                        <path d="M0-.25h24v24H0z" fill="none"/>
                      </svg>
                    </li>
                    <li>
                      Menu
                    </li>
                  </ul>
                </nav>
            </div>
            <div className="content-wrapper">
              <div className="content-leftwrapper">
                <div className="sub-header">
                  <div className="subheader-title">
                    <h3>
                      <svg  viewBox="0 0 24 24">
                        <path  d="M20,11H4V8H20M20,15H13V13H20M20,19H13V17H20M11,19H4V13H11M20.33,4.67L18.67,3L17,4.67L15.33,3L13.67,4.67L12,3L10.33,4.67L8.67,3L7,4.67L5.33,3L3.67,4.67L2,3V19A2,2 0 0,0 4,21H20A2,2 0 0,0 22,19V3L20.33,4.67Z" />
                      </svg>
                      Menu
                    </h3>
                  </div>
                  <div className="modal-icons">
                    <ul>
                      <li>
                        <svg  viewBox="0 0 24 24">
                          <path  d="M17.65,6.35C16.2,4.9 14.21,4 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20C15.73,20 18.84,17.45 19.73,14H17.65C16.83,16.33 14.61,18 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6C13.66,6 15.14,6.69 16.22,7.78L13,11H20V4L17.65,6.35Z" />
                        </svg>
                      </li>
                      <li>
                        <AddItemForm/> 
                      </li>
                      <li>                        
                        <EditItemForm/>
                      </li>
                      <li>
                        <DeleteItem/>
                      </li>
                      <li>
                        <svg  viewBox="0 0 24 24">
                          <path  d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
                        </svg>
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div className="main-content-left">
                    <div className="box">
                      <h5>cafe caliente — $4.00</h5>
                      <p>gg</p>
                    </div>
                    <div className="box">
                      <h5>cafe caliente — $4.00</h5>
                      <p>Has lots of addons for testing.</p>
                    </div>
                     <div className="box">
                      <h5>cafe caliente — $4.00</h5>
                      <p>Has lots of addons for testing.</p>
                    </div>
                  </div>
                  <div className="main-content-right modal-icons">
                    <h5>Categories</h5>
                    <ul className="text-left">
                      <li>
                        <AddCategoryForm/>
                      </li>
                      <li>
                        <EditCategoryForm/>
                      </li>
                      <li>
                        <Delete/>
                      </li>
                    </ul>
                    <div className="category-list">
                      <Paper >
                        <Menu>
                          <MenuItem primaryText="Cafe Caliente" rightIcon={<b >
                            <svg  viewBox="0 0 24 24">
                              <path  d="M3,15H21V13H3V15M3,19H21V17H3V19M3,11H21V9H3V11M3,5V7H21V5H3Z" />
                          </svg>
                          </b>} />
                          <MenuItem primaryText="Section" rightIcon={<b style={style.rightIcon}><svg  viewBox="0 0 24 24">
                              <path  d="M3,15H21V13H3V15M3,19H21V17H3V19M3,11H21V9H3V11M3,5V7H21V5H3Z" />
                          </svg></b>} />
                           <MenuItem primaryText="Cafe Caliente" rightIcon={<b style={style.rightIcon}>
                            <svg  viewBox="0 0 24 24">
                              <path  d="M3,15H21V13H3V15M3,19H21V17H3V19M3,11H21V9H3V11M3,5V7H21V5H3Z" />
                          </svg>
                          </b>} />
                          <MenuItem primaryText="Section" rightIcon={<b style={style.rightIcon}><svg  viewBox="0 0 24 24">
                              <path  d="M3,15H21V13H3V15M3,19H21V17H3V19M3,11H21V9H3V11M3,5V7H21V5H3Z" />
                          </svg></b>} />
                           <MenuItem primaryText="Cafe Caliente" rightIcon={<b style={style.rightIcon}>
                            <svg  viewBox="0 0 24 24">
                              <path  d="M3,15H21V13H3V15M3,19H21V17H3V19M3,11H21V9H3V11M3,5V7H21V5H3Z" />
                          </svg>
                          </b>} />
                          <MenuItem primaryText="Section" rightIcon={<b style={style.rightIcon}><svg  viewBox="0 0 24 24">
                              <path  d="M3,15H21V13H3V15M3,19H21V17H3V19M3,11H21V9H3V11M3,5V7H21V5H3Z" />
                          </svg></b>} />
                           <MenuItem primaryText="Cafe Caliente" rightIcon={<b style={style.rightIcon}>
                            <svg  viewBox="0 0 24 24">
                              <path  d="M3,15H21V13H3V15M3,19H21V17H3V19M3,11H21V9H3V11M3,5V7H21V5H3Z" />
                          </svg>
                          </b>} />
                          <MenuItem primaryText="Section" rightIcon={<b style={style.rightIcon}><svg  viewBox="0 0 24 24">
                              <path  d="M3,15H21V13H3V15M3,19H21V17H3V19M3,11H21V9H3V11M3,5V7H21V5H3Z" />
                          </svg></b>} />
                         
                         <MenuItem primaryText="Cafe Caliente" rightIcon={<b style={style.rightIcon}>
                            <svg  viewBox="0 0 24 24">
                              <path  d="M3,15H21V13H3V15M3,19H21V17H3V19M3,11H21V9H3V11M3,5V7H21V5H3Z" />
                          </svg>
                          </b>} />
                          <MenuItem primaryText="Section" rightIcon={<b style={style.rightIcon}><svg  viewBox="0 0 24 24">
                              <path  d="M3,15H21V13H3V15M3,19H21V17H3V19M3,11H21V9H3V11M3,5V7H21V5H3Z" />
                          </svg></b>} />
                          <MenuItem primaryText="Paragraph" rightIcon={<b style={style.rightIcon}>
                            <svg  viewBox="0 0 24 24">
                              <path  d="M3,15H21V13H3V15M3,19H21V17H3V19M3,11H21V9H3V11M3,5V7H21V5H3Z" />
                          </svg>
                          </b>} />
                          <MenuItem primaryText="Section" rightIcon={<b style={style.rightIcon}><svg  viewBox="0 0 24 24">
                              <path  d="M3,15H21V13H3V15M3,19H21V17H3V19M3,11H21V9H3V11M3,5V7H21V5H3Z" />
                          </svg></b>} />
                        </Menu>
                      </Paper>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-rightwrapper modal-icons">
                  <svg viewBox="0 0 24 24">
                    <path d="M20.5,11H19V7C19,5.89 18.1,5 17,5H13V3.5A2.5,2.5 0 0,0 10.5,1A2.5,2.5 0 0,0 8,3.5V5H4A2,2 0 0,0 2,7V10.8H3.5C5,10.8 6.2,12 6.2,13.5C6.2,15 5,16.2 3.5,16.2H2V20A2,2 0 0,0 4,22H7.8V20.5C7.8,19 9,17.8 10.5,17.8C12,17.8 13.2,19 13.2,20.5V22H17A2,2 0 0,0 19,20V16H20.5A2.5,2.5 0 0,0 23,13.5A2.5,2.5 0 0,0 20.5,11Z" />
                  </svg>
                  <h3>ADDONS</h3>
                <ul>
                  <li>
                    <svg viewBox="0 0 24 24">
                      <path  d="M17.65,6.35C16.2,4.9 14.21,4 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20C15.73,20 18.84,17.45 19.73,14H17.65C16.83,16.33 14.61,18 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6C13.66,6 15.14,6.69 16.22,7.78L13,11H20V4L17.65,6.35Z" />
                    </svg>
                  </li>
                  <li>
                    <AddonForm/> 
                  </li>
                </ul>
                <div className="addon-box">
                <div className="search-field">
                  <input type="text" placeholder="search..."/>
                </div>
                <div>
                  <h5>
                    Groups assigned to item...
                  </h5>
                  <p>
                    No groups for item
                  </p>
                </div>
                 <div>
                  <h5>
                    All groups
                  </h5>
                  <p>
                    Vodka Mixers Add-On Vodka Mixers Add-On
                    <svg  viewBox="0 0 24 24">
                        <path  d="M3,15H21V13H3V15M3,19H21V17H3V19M3,11H21V9H3V11M3,5V7H21V5H3Z" />
                    </svg>
                  </p>
                  <p>
                    Vodka Mixers Add-On Vodka Mixers Add-On
                    <svg  viewBox="0 0 24 24">
                        <path  d="M3,15H21V13H3V15M3,19H21V17H3V19M3,11H21V9H3V11M3,5V7H21V5H3Z" />
                    </svg>
                  </p>
                  <p>
                    Vodka Mixers Add-On Vodka Mixers Add-On
                    <svg  viewBox="0 0 24 24">
                        <path  d="M3,15H21V13H3V15M3,19H21V17H3V19M3,11H21V9H3V11M3,5V7H21V5H3Z" />
                    </svg>
                  </p>
                  <p>
                    Vodka Mixers Add-On Vodka Mixers Add-On
                    <svg  viewBox="0 0 24 24">
                        <path  d="M3,15H21V13H3V15M3,19H21V17H3V19M3,11H21V9H3V11M3,5V7H21V5H3Z" />
                    </svg>
                  </p>
                  <p>
                    Vodka Mixers Add-On Vodka Mixers Add-On
                    <svg  viewBox="0 0 24 24">
                        <path  d="M3,15H21V13H3V15M3,19H21V17H3V19M3,11H21V9H3V11M3,5V7H21V5H3Z" />
                    </svg>
                  </p>
                  <p>
                    Vodka Mixers Add-On Vodka Mixers Add-On
                    <svg  viewBox="0 0 24 24">
                        <path  d="M3,15H21V13H3V15M3,19H21V17H3V19M3,11H21V9H3V11M3,5V7H21V5H3Z" />
                    </svg>
                  </p>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

DrawerExample.childContextTypes = {
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


const customContentStyle = {
  width: '46%',
  maxWidth: 'none',
};

class AddItemForm extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
      open: false
    }; 
     this.handleClose = this.handleClose.bind(this);
     this.handleOpen = this.handleOpen.bind(this)
   }

  handleOpen (){
    this.setState({open: true});
  };

  handleClose () {
    this.setState({open: false});
  };
  render() {
    const actions = [
      <FlatButton
         style={{
          border: '1px solid #ccc',
          Color: '#333',
          overflow:'visible',
          fontSize:'14px',
          marginRight:'7px',
        }}
        label="Close"
        primary={false}
        onClick={this.handleClose}/>,
      <FlatButton
       style={{
          border: '1px solid #35aa47',
          color: '#fff',
          overflow:'visible',
          fontSize:'14px',
          backgroundColor:'#35aa47',
          marginRight:'7px',
        }}
        label="Save"
        onClick={this.handleClose}/>,
    ];
  return (
      <div >
        <FloatingActionButton mini={true} disabled={false} style={style} onClick={this.handleOpen} >
          <ContentAdd />
        </FloatingActionButton>

        <Dialog
          title="Add Item"
          actions={actions}
          modal={true}
          open={this.state.open}
          contentStyle={customContentStyle}
        > 
        <form className="add-form-category">
        <div className="form-group">
        <label>Name</label>
        <input type="text" placeholder="Name" className="input-name"/>
        </div>
        
        <div className="form-group">
        <label>Description</label>
        <input type="text" placeholder="Description" className="description-field"/>
        </div>
         <Divider />
        <div className="form-group">
        <label>Price</label>
        <input type="text" placeholder="Price" className="price-field"/>
        </div>
         <div className="form-group">
          <label>Happy hours</label>
          <input type="text" placeholder="Happy hours Price" className="happy-hours"/>
          </div>
           <div className="form-group">
          <label>Tax</label>
          <select className="tax-field">
          <option>Choose...</option>
          <option>Price before tax</option>
          <option>Price includes tax</option>
          <option>Price exempt</option>
          </select>
          </div>
           <Divider />
           <div className="form-group">
          <label>List</label>
          <input type="file" placeholder="Name" className="cover-field"/>
          </div>
           <div className="form-group">
          <label>Cover</label>
          <input type="file" placeholder="Name" className="cover-field"/>
          </div>
          <Divider />
        </form>
       
        </Dialog>

      </div>
    );
  }  
}

class EditItemForm extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
      open: false
    }; 
     this.handleClose = this.handleClose.bind(this);
     this.handleClone = this.handleClone.bind(this);
     this.handleOpen = this.handleOpen.bind(this)
   }

  handleOpen (){
    this.setState({open: true});
  };

  handleClone () {
    this.setState({open: false});
  };

  handleClose () {
    this.setState({open: false});
  };
  render() {
    const actions = [
      <FlatButton
         style={{
          border: '1px solid #ccc',
          Color: '#333',
          overflow:'visible',
          fontSize:'14px',
          marginRight:'7px',
        }}
        label="Close"
        primary={false}
        onClick={this.handleClose} />,
      <FlatButton
        style={{
          border: '1px solid #2977f7',
          color: '#fff',
          overflow:'visible',
          fontSize:'14px',
          backgroundColor:'#2977f7',
          marginRight:'7px',
        }}
        label="Clone"
        primary={false}
        onClick={this.handleClone} />,
      <FlatButton
       style={{
          border: '1px solid #35aa47',
          color: '#fff',
          overflow:'visible',
          fontSize:'14px',
          backgroundColor:'#35aa47',
          marginRight:'7px',
        }}
        label="Save"
        onClick={this.handleClose}  />,

    ];
  return (
      <div >
           <FloatingActionButton mini={true} disabled={false} 
            style={{
            marginRight:'3px',
          }}
         onClick={this.handleOpen} >
          <img src="../assets/pencil.svg" className="edit-icon"/>
        </FloatingActionButton>
         
          
        <Dialog
          title="Edit Item"
          actions={actions}
          modal={true}
          open={this.state.open}
          contentStyle={customContentStyle}
        > 
        <form className="add-form-category">
        <div className="form-group">
          <label>Name</label>
          <input type="text" placeholder="Name" className="input-name"/>
        </div>
        
        <div className="form-group">
          <label>Description</label>
          <input type="text" placeholder="Description" className="description-field"/>
        </div>
         <Divider />
        <div className="form-group">
          <label>Price</label>
          <input type="text" placeholder="Price" className="price-field"/>
        </div>
         <div className="form-group">
          <label>Happy hours</label>
          <input type="text" placeholder="Happy hours Price" className="happy-hours"/>
          </div>
           <div className="form-group">
          <label>Tax</label>
          <select className="tax-field">
          <option>Choose...</option>
          <option>Price before tax</option>
          <option>Price includes tax</option>
          <option>Price exempt</option>
          </select>
          </div>
           <Divider />
           <div className="form-group">
          <label>List</label>
          <input type="file" placeholder="Name" className="cover-field"/>
          </div>
           <div className="form-group">
          <label>Cover</label>
          <input type="file" placeholder="Name" className="cover-field"/>
          </div>
          <Divider />
        </form>
       
        </Dialog>

      </div>
    );
  }  
}

class AddCategoryForm extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
      open: false
    }; 
     this.handleClose = this.handleClose.bind(this);
     this.handleOpen = this.handleOpen.bind(this)
   }

  handleOpen (){
    this.setState({open: true});
  };

  handleClose () {
    this.setState({open: false});
  };
  render() {
    const actions = [
      <FlatButton
         style={{
          border: '1px solid #ccc',
          color: '#333',
          overflow:'visible',
          fontSize:'14px',
          marginRight:'7px',
        }}
        label="Close"
        onClick={this.handleClose}/>,
      <FlatButton
          style={{
          border: '1px solid #35aa47',
          color: '#fff',
          overflow:'visible',
          fontSize:'14px',
          backgroundColor:'#35aa47',
          marginRight:'7px',
        }}
        label="Save"
        onClick={this.handleClose}/>,
    ];
  return (
      <div>
        <FloatingActionButton mini={true} onClick={this.handleOpen} >
          <ContentAdd />
        </FloatingActionButton>

        <Dialog
          title="Add Category"
          actions={actions}
          modal={true}
          open={this.state.open}
          contentStyle={customContentStyle}
        > 
          <form className="add-form-category">
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="Name" className="input-name"/>
            </div>
            <Divider />
            <div className="form-group">
              <label>List</label>
              <input type="file" placeholder="Name" className="cover-field"/>
            </div>
            <div className="form-group">
              <label>Cover</label>
              <input type="file" placeholder="Name" className="cover-field"/>
            </div>
            <Divider />
          </form>
        </Dialog>
      </div>
    );
  }  
}

class EditCategoryForm extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
      open: false
    }; 
     this.handleClose = this.handleClose.bind(this);
     this.handleOpen = this.handleOpen.bind(this)
   }

  handleOpen (){
    this.setState({open: true});
  };

  handleClose () {
    this.setState({open: false});
  };
  render() {
    const actions = [
      <FlatButton
         style={{
          border: '1px solid #ccc',
          color: '#333',
          overflow:'visible',
          fontSize:'14px',
          marginRight:'7px',
        }}
        label="Close"
        onClick={this.handleClose}/>,
      <FlatButton
          style={{
          border: '1px solid #35aa47',
          color: '#fff',
          overflow:'visible',
          fontSize:'14px',
          backgroundColor:'#35aa47',
          marginRight:'7px',
        }}
        label="Save"
        onClick={this.handleClose}/>,
    ];
  return (
      <div>
        <FloatingActionButton mini={true} disabled={false} 
            style={{
            marginRight:'3px',
          }}
         onClick={this.handleOpen} >
          <img src="../assets/pencil.svg" className="edit-icon"/>
        </FloatingActionButton>
         
        <Dialog
          title="Edit Category"
          actions={actions}
          modal={true}
          open={this.state.open}
          contentStyle={customContentStyle}
        > 
        <form className="add-form-category">
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="Name" className="input-name"/>
            </div>
            <Divider />
            <div className="form-group">
              <label>List</label>
              <input type="file" placeholder="Name" className="cover-field"/>
            </div>
            <div className="form-group">
              <label>Cover</label>
              <input type="file" placeholder="Name" className="cover-field"/>
            </div>
            <Divider />
          </form>
        </Dialog>
      </div>
    );
  }  
}

class AddonForm extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
      open: false
    }; 
    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this)
  }

  handleOpen (){
    this.setState({open: true});
  };

  handleClose () {
    this.setState({open: false});
  };
  render() {
    const actions = [
      <FlatButton
       style={{
          border: '1px solid #ccc',
          Color: '#333',
          overflow:'visible',
          fontSize:'14px',
          marginRight:'7px',
        }}
        label="Close"
        onClick={this.handleClose}/>,
      <FlatButton
         style={{
          border: '1px solid #35aa47',
          color: '#fff',
          overflow:'visible',
          fontSize:'14px',
          backgroundColor:'#35aa47',
          marginRight:'7px',
        }}
        label="Save"
        onClick={this.handleClose}/>,
    ];
  return (
      <div>
        <FloatingActionButton mini={true} onClick={this.handleOpen} >
          <ContentAdd />
        </FloatingActionButton>

        <Dialog
          title="Add Addon Group"
          actions={actions}
          modal={true}
          open={this.state.open}
          contentStyle={customContentStyle}
        > 
        <form className="add-form-category">
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="Name" className="input-name"/>
            </div>
            <div className="form-group">
              <label>Display</label>
              <input type="text" placeholder="Display Name"  className="description-field"/>
            </div>
             <div className="form-group">
            <Checkbox label="Only allow 1 selection"
              style={{
                width: '75%',
                float:'right',
              }} />
            </div>

            <div className="clear"></div>
            <Divider />
            <div className="pull-right">
              <FlatButton
                label="nil"
               style={{
                border: '1px solid #ccc',
                backgroundColor:'#fff',
                width:'40px',
                height:'40px',
                borderRadius:'50%',
                minWidth: 'inherit',
                backgroundImage:"url('/assets/refresh.svg')",
                backgroundRepeat:'no-repeat',
                backgroundPosition:'center',
                verticalAlign: 'top',
                color:'transparent',
              }} />

              <FlatButton
                label="+ Add"
                secondary={true}
                style={{
                  border: '1px solid #ccc',
                  color: '#666',
                  fontSize:'14px',
                  backgroundColor:'#fff',
                  borderRadius:'20px',
                  verticalAlign: 'top',
                  marginLeft: '10px',
                  lineHeight:'normal',
                  minWidth:'inherit',
              }} /> 
                 
            </div>
          </form>
        </Dialog>
      </div>
    );
  }  
}

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
          <MenuItem className="search-icon"><img src="../assets/magnify.svg"/></MenuItem>
          <ul className="smallmenu">
            <li><MenuItem><img src="../assets/home.svg"/></MenuItem>
                <ul>
            <li><a href="#">Home</a></li>
          </ul>
            </li>
            <li><MenuItem><img src="../assets/chart-line.svg"/></MenuItem>
              <ul>
            <li><a href="#">Sales</a></li>
            <li><a href="#">Brand</a></li>
            <li><a href="#">Trends</a></li>
            <li><a href="#">New vs.Old</a></li>
            <li><a href="#">Customers</a></li>
          </ul>
            </li>
            <li><MenuItem><img src="../assets/settings.svg"/></MenuItem>
              <ul>
                <li><a href="#">Settings</a></li>
                <li><a href="#">Chalkboard</a></li>
                <li><a href="#">Menu</a></li>
                <li><a href="#">Inventroy</a></li>
                <li><a href="#">Hours</a></li>
              </ul>
            </li>
            <li><MenuItem><img src="../assets/library-books.svg"/></MenuItem>
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

class DeleteItem extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
      open: false
    }; 
    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this)
  }

  handleOpen (){
    this.setState({open: true});
  };

  handleClose () {
    this.setState({open: false});
  };
  render() {
    const actions = [
      <FlatButton
         style={{
          border: '1px solid #357ebd',
          color: '#fff',
          overflow:'visible',
          fontSize:'14px',
          backgroundColor:'#428bca',
          marginRight:'7px',
        }}
        label="No"
        onClick={this.handleClose}/>,
      <FlatButton
       style={{
          border: '1px solid #ccc',
          color: '#333',
          overflow:'visible',
          fontSize:'14px',
          marginRight:'7px',
        }}
        label="Yes"
        onClick={this.handleClose}/>
    ];
  return (
      <div>
        <FloatingActionButton mini={true} onClick={this.handleOpen} >
          <img src="../assets/delete.svg" className="delete-icon-item"/>
        </FloatingActionButton>

        <Dialog
          title="Confirm Delete"
          actions={actions}
          modal={true}
          open={this.state.open}
          contentStyle={customContentStyle}
        > 
        <form className="delete-ietm">
            <div className="form-group">
             <h3>Are you sure you wish to delete this item?</h3>
            </div>
            <div className="form-group">
              
            </div>
            <div className="form-group">
              <p>Financial data will NOT be deleted</p>
            </div>

            <div className="clear"></div>
            <Divider />
          </form>
        </Dialog>
      </div>
    );
  }  
}

class Delete extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
      open: false
    }; 
    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this)
  }

  handleOpen (){
    this.setState({open: true});
  };

  handleClose () {
    this.setState({open: false});
  };
  render() {
    const actions = [
      <FlatButton
         style={{
          border: '1px solid #357ebd',
          color: '#fff',
          overflow:'visible',
          fontSize:'14px',
          backgroundColor:'#428bca',
          marginRight:'7px',
        }}
        label="No"
        onClick={this.handleClose}/>,
      <FlatButton
       style={{
          border: '1px solid #ccc',
          color: '#333',
          overflow:'visible',
          fontSize:'14px',
          marginRight:'7px',
        }}
        label="Yes"
        onClick={this.handleClose}/>
    ];
  return (
      <div>
        <FloatingActionButton mini={true} onClick={this.handleOpen} >
          <img src="../assets/delete.svg" className="delete-icon"/>
        </FloatingActionButton>

        <Dialog
          title="Confirm Delete"
          actions={actions}
          modal={true}
          open={this.state.open}
          contentStyle={customContentStyle}
        > 
        <form className="delete-category">
            <div className="form-group">
             <h3>Are you sure you wish to delete this category?</h3>
            </div>
            <div className="form-group">
              
            </div>
            <div className="form-group">
              <p>Financial data will NOT be deleted</p>
            </div>

            <div className="clear"></div>
            <Divider />
          </form>
        </Dialog>
      </div>
    );
  }  
}

export default DrawerExample;