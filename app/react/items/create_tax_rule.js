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


class CreateTaxRule extends React.Component {

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
            <label><b>RULE NAME</b></label>
            <div className="two-form">
            <div className="form-group">
              <input type="text" placeholder="Name"/>
            </div>
            </div>
            <fieldset></fieldset>
            <div className="tax-form">
              <p> 
                Select which tax should NOT be applied based on your customer’s dining option (e.g. For Here, To Go) and item choice at checkout.
              </p>
              </div>
            <div className="clearfix"></div>
              <label><b>DO NOT APPLY TAX:</b></label>
              <div className="form-group"  >
                <div className = "select-tax">
                <input type="text" placeholder="Select tax" disabled="true"/>
                </div>
              </div>

            <label><b>WHEN DINING OPTION IS:</b></label>
            <div className="form-group">
              <input type="text" placeholder="Select Dining Option" disabled="true"/>
            </div>

            <label><b>FOR ITEMS:</b></label>
            <div className="form-group">
              <input type="text" placeholder="Assign Items" disabled="true"/>
            </div>

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

export default CreateTaxRule;