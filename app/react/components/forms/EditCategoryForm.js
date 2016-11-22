import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Dialog from 'material-ui/Dialog';
import Divider from 'material-ui/Divider';

const customContentStyle = {
  width: '46%',
  maxWidth: 'none',
};

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
          <img src="../assets/pencil.svg" className="edit-icon" data-tip="Edit selected category"/>
        </FloatingActionButton>
         
        <Dialog
          title="Edit Category"
          actions={actions}
          modal={true}
          open={this.state.open}
          contentStyle={customContentStyle}> 
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

export default EditCategoryForm;