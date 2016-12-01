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
          border: 'none',
          color: '#fff',
          overflow:'visible',
          fontSize:'14px',
          backgroundColor:'red',
          marginRight:'7px',
        }}
        label="Delete Category"
        onClick={this.handleClose}/>,
    ];
  return (
      <div>
        <div className="apply-set-btn trash-icon"><img src="/assets/trash-icon.png" onClick={this.handleOpen}/></div>
        <Dialog
          title="DeleteCategory"
          actions={actions}
          modal={true}
          open={this.state.open}
          contentStyle={customContentStyle}> 
          <p>Are you sure you want to delete the <b>Breakfast before 4:30</b> category? Deleting this category will affect 2 items. This action cannot be undone.</p>
        </Dialog>
      </div>
    );
  }  
}

export default DeleteCategory;