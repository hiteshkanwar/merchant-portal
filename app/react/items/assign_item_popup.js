import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Dialog from 'material-ui/Dialog';
import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';


const customContentStyle = {
  width: '46%',
  maxWidth: 'none',
};

const styles = {
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
    float: 'right',
  },
};

class AssignItemPopup extends React.Component {
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
        label="Assign Items"
        onClick={this.handleClose}/>,
    ];
  return (
      <div>
        <div className="apply-set-btn apply-set"><FlatButton label="Select Items" primary={true}  onClick={this.handleOpen}/></div>
        <Dialog
          title="Select Items"
          actions={actions}
          modal={true}
          open={this.state.open}
          contentStyle={customContentStyle}> 
          <div><center>Select items to disable specified taxes at time of checkout. Some items may not be available based on your tax, location or dining option selection.
Tax Rule fgg will be applied to 0 items</center></div>
          <div className="search-flat">
          <div className="search-field">
            <input type="text" placeholder = "Search Items" />
          </div>
          </div>
          <div className="check-box-list">
            <div className="check-new">
            <span className="grey-box">ALL</span>
            <div className="main-check">
            <Checkbox
              label="All Items"
              labelPosition="left"
              style={styles.checkbox}
            />
            </div>
            </div>
            <div className="check-new">
            <span className="grey-box">CU</span>
            <div className="main-check">
            <Checkbox
              label="Custom Amounts"
              labelPosition="left"
              style={styles.checkbox}
            />
            </div>
            </div>
            <div className="check-new">
            <span className="grey-box">CH</span>
            <div className="main-check">
            <Checkbox
              label="Chocolate Cake"
              labelPosition="left"
              style={styles.checkbox}
            />
            </div>
            </div>
            <div className="check-new">
            <span className="grey-box">CU</span>
            <div className="main-check">
            <Checkbox
              label="Cupcake"
              labelPosition="left"
              style={styles.checkbox}
            />
            </div>
            </div>
            <div className="check-new">
            <span className="grey-box">lo</span>
            <div className="main-check">
            <Checkbox
              label="logs"
              labelPosition="left"
              style={styles.checkbox}
            />
            </div>
            </div>
          </div>
          <div className="border-bottom"><Divider/></div>
        </Dialog>
      </div>
    );
  }  
}

export default AssignItemPopup;