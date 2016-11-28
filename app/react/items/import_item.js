import React from 'react';
import ReactDOM from 'react-dom';
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Dialog from 'material-ui/Dialog';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';


const customContentStyle = {
  width: '46%',
  maxWidth: 'none',
};

const styles = {
  block: {
    maxWidth: 250,
  },
  radioButton: {
    marginBottom: 16,
  },
};


class ImportItem extends React.Component {
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
          border: '1px solid #357ebd',
          color: '#fff',
          overflow:'visible',
          fontSize:'14px',
          backgroundColor:'#428bca',
          marginRight:'7px',
        }}
        label="Next"
        onClick={this.handleClose}/>
      
    ];
  return (
      <div>
        <RaisedButton label="Import" onClick={this.handleOpen} className="import-btn"/>
      
        <Dialog
          title="Choose Import Type"
          actions={actions}
          modal={true}
          open={this.state.open}
          contentStyle={customContentStyle}> 
        <Divider style={{
            margin:'0px !important',
         }} />
          <form className="delete-item">
            <div className="form-group">
              <ItemCheck/>
            </div>
            <div className="clear"></div>
            <Divider />
          </form>
        </Dialog>
      </div>
    );
  }  
}

class ItemCheck extends React.Component {
  render() {
    return(
      <div>
        <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
          <RadioButton value="light" label="Modify Item Library" style={styles.radioButton} /> 
        </RadioButtonGroup>
        <p>Add new items and update your existing ones. Items cannot be deleted, only altered.</p>
        <RadioButtonGroup name="shipSpeed">
          <RadioButton value="not_light" label="Replace Item Library" style={styles.radioButton}/>
        </RadioButtonGroup>
        <p>Overwrite your existing items. All items will be deleted and replaced.</p>
      </div>
    );
  }
}


export default ImportItem;