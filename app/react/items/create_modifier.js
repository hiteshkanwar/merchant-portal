import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';
import FlatButton from 'material-ui/FlatButton';

class CreateModifier extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.handleToggle=this.handleToggle.bind(this)
    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this)
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

  render() {
    return (
      <div>
        <RaisedButton
          label="Create Modifier Set"
          onClick={this.handleToggle}
          className="import-btn import-btn-new"/>
        <Drawer width={560} openSecondary={true} open={this.state.open} >
         <form className="add-form-category">
            <div className="form-group">
              <input type="text" placeholder="Name" className="input-name big-input"/>
            </div>
              <Divider/>
            <div>
              <legend>Options</legend>
            </div>
            <div className="check-main">
            <Checkbox
              label="Customer can only select one option"
              style={styles.checkbox}
            />
            </div>
            <div>
              <p className="note">The first option in your set will become the default.
              </p>
            </div>
            <div className="multiple-input">
            <div className="form-group">
              <input type="text" placeholder="New Options"/>
              <input type="text" placeholder="New Options"/>
      
            </div>
            </div>
            <div>
              <center><p>

                To change the default modifiers of an item, edit individual items in the Item Library section. Default modifiers will be automatically applied when you add the item to the cart.
              </p></center>
            </div>
            <Divider/>
            <div>
               <center><p> 
                Currently applied to 0 items.
              </p></center>
            </div>
            <div className="clear"></div>
            <div className="buttons-bottom">
            <FlatButton
       style={{
          border: '1px solid #ccc',
          Color: '#333',
          overflow:'visible',
          fontSize:'14px',
          marginRight:'7px',
        }}
        label="Close"
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
const styles = {
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
  },
};
export default CreateModifier;