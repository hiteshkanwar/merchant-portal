import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Dialog from 'material-ui/Dialog';
import Divider from 'material-ui/Divider';

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

const customContentStyle = {
  width: '46%',
  maxWidth: 'none',
};


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
        onTouchTap={this.handleClose} />,
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
        onTouchTap={this.handleClone} />,
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
        onTouchTap={this.handleClose}  />,

    ];
  return (
      <div >
           <FloatingActionButton mini={true} disabled={false} 
            style={{
            marginRight:'3px',
          }}
         onTouchTap={this.handleOpen} >
          <img src="/images/pencil.svg" className="edit-icon"/>
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

export default EditItemForm;