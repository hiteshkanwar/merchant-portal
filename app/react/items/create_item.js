import React from 'react';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Checkbox from 'material-ui/Checkbox';
import Toggle from 'material-ui/Toggle';
import Delete from 'material-ui/svg-icons/action/delete';
const styles = {
    customWidth: {
      width: 200,
    },
    block: {
      maxWidth: 250,
    },
    checkbox: {
      marginBottom: 16,
    },
  };


class CreateItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      value: 1
    };
    this.handleToggle=this.handleToggle.bind(this)
    this.handleClose=this.handleClose.bind(this)
    this.handleOpen=this.handleOpen.bind(this)
    this.handleChange=this.handleChange.bind(this)
  }

  handleToggle (){
    this.setState({open: !this.state.open});
  }

  handleOpen (){
    this.setState({open: true});
  };

  handleClose () {
    this.setState({open: false});
  };

  handleChange (event, index, value) {
    this.setState({value});
  }

  render() {
    return (
      <div>
        <RaisedButton
          label="CreateItem"
          onClick={this.handleToggle}
          className="import-btn"/>
        <Drawer width={560} openSecondary={true} open={this.state.open} >
          <form className="add-new-form">
          <div className="form-wrapper">
          <div className="add-new-top">
          <div className="add-new-left">
            <div className="form-group">
              <input type="file" placeholder="Name" />
            </div>
            </div>
            <div className="add-new-right">
            <div className="form-group">
              <input type="text" placeholder="Name"/>
            </div>
            <div className="form-group">
               <select id="" name="select a category" className="">
                  <option value="1">None</option>
                  <option value="2">Breakfast before 4.30</option>
                  <option value="3">Dinner</option>
                  <option value="4">Happy Hour</option>
                  <option value="5">Lunch</option>
                  <option value="6">Special Menu</option>
                </select>
            </div>
            </div>
            </div>
            <div className="multiple-box">
            <div className="form-group">
              <input type="text" placeholder="Name" className="input1"/>
              <input type="text" placeholder="price" className="input2"/>
              <input type="text" placeholder="SKU" className="input3"/>
              
            </div>
            </div>
            <div className="clearfix"></div>
            <p>Add prices, sizes or SKUs. Leave the price blank to enter at time of sale.</p>
            <fieldset></fieldset>

            <div className="form-group">
              <label className="inventory">INVENTORY 
              <a href="#" className="info-icon"><img src="/assets/help.png"/></a>
              </label><br/>
              <div className="traking-btn">
               <FlatButton label="Start Traking Time Inventory"/>
               </div>
            </div>
            <fieldset></fieldset>
            <label>MODIFIER SETS</label>
            <label>MODIFIER SETS</label>
            <div className="modifiers-box">
              <div className="form-group">
                 <div className="check-block"><Checkbox label="Coffee Modifiers" style={styles.checkbox}/><span className="right-link"><a href="#">customize</a><img src="/assets/info.png"/></span></div>
                <div className="check-block"> <Checkbox label="Size" style={styles.checkbox}/><span className="right-link"><a href="#">customize</a><img src="/assets/info.png"/></span></div>
              </div>
            </div>
            <div className="form-group">
              <Toggle label="Skip detail screen in Register" labelPosition="right" style={styles.toggle}/>
            </div>
            <div className="clearfix"></div>
            <p>When this item is added to the cart, we’ll skip modifier selection and use the settings based on the set configuration above. 
              Learn more</p>
            <fieldset></fieldset>
            <label>Taxes</label>
            <div className="modifiers-box">
              <div className="form-group">
                 <Checkbox label="Save Tax 7%" style={styles.checkbox}/>
              </div>
            </div>
            <fieldset></fieldset>
            <label>ONLINE STORE SETTINGS</label>
            <div className="clearfix"></div>
              <p>To sell this item online, or to manage images, see item URLs, and set fulfillment options, visit your Site Editor. Go to Editor </p>
            <fieldset></fieldset>
            <label>DESCRIPTION</label><br/>
              <div className="form-group">
                <input type="textarea" className="textarea-box" placeholder="Enter a description of this item. Describe details like features, options, and measurements."/>
              </div>
            </div>
            <div className="footer-buttons">
              <span className="delete-icon"><img src="/assets/delete.svg"/></span>
            <FlatButton
               style={{
                border: '1px solid #ccc',
                color: '#333',
                overflow:'visible',
                fontSize:'14px',
                marginRight:'7px',
              }}
              label="Cancel"
              onClick={this.handleClose}/>
            <FlatButton
                style={{
                border: '1px solid #2996cc',
                color: '#fff',
                overflow:'visible',
                fontSize:'14px',
                backgroundColor:'#2996cc',
                marginRight:'7px',
              }}
              label="Save"
              onClick={this.handleClose}/>
              </div>
          </form>
        </Drawer>
      </div>
    );
  }
}

export default CreateItem;