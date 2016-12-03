import React from 'react';
import DatePicker from 'material-ui/DatePicker';
import Toggle from 'material-ui/Toggle';

const optionsStyle = {
  maxWidth: 255,
  marginRight: 'auto',
};

export default class DatePick extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      autoOk: true,
    };
    this.handleToggle=this.handleToggle.bind(this) 
  }

  handleToggle(event, toggled) {
    this.setState({
      [event.target.name]: toggled,
    });
  };

  render() {
    return (
      <div>
      	<div className="date-pic">
        <DatePicker hintText="mm-dd-yy" mode="landscape" 
      	autoOk={this.state.autoOk}/></div>
      </div>
    );
  }
}