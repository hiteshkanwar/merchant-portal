import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

export default class ExportMenu extends React.Component {

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
      <div className="export-btn">
        <RaisedButton
           style={{
            border: '1px solid #ccc',
            backgroundColor: '#fff',
            lineHeight:'25px',
            marginTop:'10px',
            textTransform:'inherit',
            minWidth:'75px',
          }}
          onTouchTap={this.handleTouchTap}
          label="Export"
        />
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
        >
          <Menu>
            <MenuItem primaryText="Simmary CSV" />
            <MenuItem primaryText="Accounting Apps" />
            <MenuItem primaryText="Connect QuickBooks" />
            <MenuItem primaryText="Connect Xerox" />
          </Menu>
        </Popover>
      </div>
    );
  }
}