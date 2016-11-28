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

class SetItems extends React.Component {
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
        label="Close"
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
        label="Apply to Items"
        onClick={this.handleClose}/>,
    ];
  return (
      <div>
        <FlatButton label="Apply Set to Items" primary={true}  onClick={this.handleOpen}/>
        <Dialog
          title="Apply Set to Items"
          actions={actions}
          modal={true}
          open={this.state.open}
          contentStyle={customContentStyle}> 
          <div>The ‘Coffee Modifiers’ modifier set will be applied to 1 items.</div>
          <Divider />
          <div className="search-field">
            <input type="text" />
          </div>
          <div>
            <Checkbox
              label="All Items"
              labelPosition="left"
              style={styles.checkbox}
            />
            <Checkbox
              label="Coffee"
              labelPosition="left"
              style={styles.checkbox}
            />
          </div>
        </Dialog>
      </div>
    );
  }  
}

export default SetItems;