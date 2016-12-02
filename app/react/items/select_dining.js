import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Dialog from 'material-ui/Dialog';
import Divider from 'material-ui/Divider';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';


const customContentStyle = {
  width: '46%',
  maxWidth: 'none',
};

const styles = {
  block: {
    maxWidth: '100%',
  },
  checkbox: {
    marginBottom: 16,
    float: 'right',
  },
};

class DiningSelect extends React.Component {
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
          float: 'left',
        }}
        label="Cancel"
        onClick={this.handleClose}/>,
      <FlatButton
          style={{
          border: '1px solid #2996cc',
          color: '#fff',
          overflow:'visible',
          fontSize:'14px',
          backgroundColor:'#2996cc',
          marginRight:'7px',
        }}
        label="Select Dining Options"
        onClick={this.handleClose}/>,
    ];
  return (
      <div>
        <div className="apply-set-btn apply-set"><FlatButton label="Select Dining Options" primary={true}  onClick={this.handleOpen}/></div>
        <Dialog
          title="Select Dining Option"
          actions={actions}
          modal={true}
          open={this.state.open}
          contentStyle={customContentStyle}> 
          <div><center>Select the dining option that will trigger this tax rule at checkout.</center></div>
          <div className="search-flat">
          <div className="search-field">
            <input type="text" placeholder = "Search Taxes"/>
          </div>
        </div>
        <div className = "select-dining-table">
        <div className="select-dining">
        <RadioButtonGroup name="notRight" labelPosition="left" style={styles.block}>
      <RadioButton
        value="reverse"
        label="Delivery"
        style={styles.radioButton}
      />
    </RadioButtonGroup>
    </div>
    <div className="select-dining">
    <RadioButtonGroup name="notRight" labelPosition="left" style={styles.block}>
      <RadioButton
        value="reverse"
        label="Pickup"
        style={styles.radioButton}
      />
    </RadioButtonGroup>
    </div>
    </div>
          <div className="border-bottom"><Divider/></div>
        </Dialog>
      </div>
    );
  }  
}

export default DiningSelect;