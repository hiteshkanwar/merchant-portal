import React from 'react';
import ReactDOM from 'react-dom';
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Dialog from 'material-ui/Dialog';
import Divider from 'material-ui/Divider';

const customContentStyle = {
  width: '46%',
  maxWidth: 'none',
};

class DeleteCategory extends React.Component {
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
          border: '1px solid #357ebd',
          color: '#fff',
          overflow:'visible',
          fontSize:'14px',
          backgroundColor:'#428bca',
          marginRight:'7px',
        }}
        label="No"
        onClick={this.handleClose}/>,
      <FlatButton
       style={{
          border: '1px solid #ccc',
          color: '#333',
          overflow:'visible',
          fontSize:'14px',
          marginRight:'7px',
        }}
        label="Yes"
        onClick={this.handleClose}/>
    ];
  return (
      <div>
        <FloatingActionButton mini={true} onClick={this.handleOpen} >
          <img src="../assets/delete.svg" data-tip="Delete selected category" className="delete-icon"/>
        </FloatingActionButton>
        <Dialog
          title="Confirm Delete"
          actions={actions}
          modal={true}
          open={this.state.open}
          contentStyle={customContentStyle}
        > 
         <Divider style={{
            margin:'0px !important',
         }} />
        <form className="delete-category">
           
            <div className="form-group">
             <h3>Are you sure you wish to delete this <br></br> category?</h3>
            </div>
            <div className="form-group">
              
            </div>
            <div className="form-group">
              <p>Financial data will NOT be deleted</p>
            </div>

            <div className="clear"></div>
            <Divider />
          </form>
        </Dialog>
      </div>
    );
  }  
}

export default DeleteCategory;