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


class CreateTax extends React.Component {

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
          label="Create Tax"
          onClick={this.handleToggle}
          className="import-btn"/>
        <Drawer width={560} openSecondary={true} open={this.state.open} >
          <form className="add-new-form">
            <label>TAX INFORMATION</label>
            <div className="two-form">
            <div className="form-group">
              <input type="text" placeholder="Name" className="input-60"/>
              <input type="text" placeholder="Name" className="input-40"/>
            </div>
            </div>
            <div className="form-group">
               <select id="" name="select a category" className="input-60">
                  <option value="1">None</option>
                  <option value="2">Breakfast before 4.30</option>
                  <option value="3">Dinner</option>
                  <option value="4">Happy Hour</option>
                  <option value="5">Lunch</option>
                  <option value="6">Special Menu</option>
                </select>
            </div>
            <div className="clearfix"></div>
            <fieldset></fieldset>
            <div className="form-group">
              <Toggle label="Enable Tax" labelPosition="right" style={styles.toggle}/>
            </div>
            <div className="clearfix"></div>
              <p>To control which items have this tax applied, visit the Item Library. Taxes will sync to all devices, and be calculated at purchase.</p>
            <div className="clearfix"></div>
            <p>Online sales shipped within your state will have taxes applied; sales shipped outside your state will not have taxes applied.<br/>
              <a href="#" className="learn-more-link">Learn more></a></p>
            <div className="footer-buttons buttons-bottom">
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

export default CreateTax;