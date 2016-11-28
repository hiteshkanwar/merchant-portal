import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';

class CreateItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.handleToggle=this.handleToggle.bind(this)
  }

  handleToggle (){
    this.setState({open: !this.state.open});
  }

  render() {
    return (
      <div>
        <RaisedButton
          label="CreateItem"
          onClick={this.handleToggle}
          className="import-btn"/>
        <Drawer width={560} openSecondary={true} open={this.state.open} >
        </Drawer>
      </div>
    );
  }
}

export default CreateItem;