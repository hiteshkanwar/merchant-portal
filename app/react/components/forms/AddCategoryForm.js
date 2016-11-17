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

class AddCategoryForm extends React.Component {
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
          Color: '#333',
          overflow:'visible',
          fontSize:'14px',
          marginRight:'7px',
        }}
        label="Close"
        onTouchTap={this.handleClose}
      />,
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
        onTouchTap={this.handleClose}
      />,
    ];
  return (
      <div>
        <FloatingActionButton mini={true} onTouchTap={this.handleOpen} >
          <ContentAdd />
        </FloatingActionButton>

        <Dialog
          title="Add Category"
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

export default AddCategoryForm;