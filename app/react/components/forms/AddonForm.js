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

class AddonForm extends React.Component {
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
        <FloatingActionButton mini={true} onClick={this.handleOpen} data-tip="Add an addon group">
          <ContentAdd  />
        </FloatingActionButton>

        <Dialog
          title="Add Addon Group"
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
              <label>Display</label>
              <input type="text" placeholder="Display Name"  className="description-field"/>
            </div>
             <div className="form-group">
            <Checkbox label="Only allow 1 selection"
              style={{
                width: '75%',
                float:'right',
              }} />
            </div>

            <div className="clear"></div>
            <Divider />
            <div className="pull-right">
              <FlatButton
                label="nil"
               style={{
                border: '1px solid #ccc',
                backgroundColor:'#fff',
                width:'40px',
                height:'40px',
                borderRadius:'50%',
                minWidth: 'inherit',
                backgroundImage:"url('/assets/refresh.svg')",
                backgroundRepeat:'no-repeat',
                backgroundPosition:'center',
                verticalAlign: 'top',
                color:'transparent',
              }} />

              <FlatButton
                label="+ Add"
                secondary={true}
                style={{
                  border: '1px solid #ccc',
                  color: '#666',
                  fontSize:'14px',
                  backgroundColor:'#fff',
                  borderRadius:'20px',
                  verticalAlign: 'top',
                  marginLeft: '10px',
                  lineHeight:'normal',
                  minWidth:'inherit',
              }} /> 
                 
            </div>
          </form>
        </Dialog>
      </div>
    );
  }  
}

export default AddonForm;