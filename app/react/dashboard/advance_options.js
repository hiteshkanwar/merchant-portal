import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

export default class AdvanceOption extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
    this.handleTouchTap=this.handleTouchTap.bind(this);
    this.handleRequestClose=this.handleRequestClose.bind(this)
  }

  handleTouchTap(event) {
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose(){
    this.setState({
      open: false,
    });
  };

  render() {
    return (
      <div>
        <a href="javascript:void(0)" onTouchTap={this.handleTouchTap} >Advance Options</a>
      
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
        >
          <Menu>
            <MenuItem primaryText="Device" />
            <MenuItem primaryText="Device Nickmane" />
            <MenuItem primaryText="Mobile Staff" />
          </Menu>
        </Popover>
      </div>
    );
  }
}