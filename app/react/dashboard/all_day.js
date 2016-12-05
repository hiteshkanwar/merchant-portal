import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';

const items = [];
for (let i = 0; i < 100; i++ ) {
  items.push(<MenuItem value={i} key={i} primaryText={`Item ${i}`} />);
}

const styles = {
  margin:'0px',
  padding:'0px',

  block: {
    maxWidth: 250,

  },
  radioButton: {
    marginBottom: 16,
    height:40,
  },
};

class AllCustom extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value:1};
    this.handleChange=this.handleChange.bind(this)
  }

  handleChange (event, index, value) {
    this.setState({value});
  }

  render() {
    return (
    <div className="all-day">
      <DropDownMenu maxHeight={300} value={this.state.value} onChange={this.handleChange}>
        <RadioButtonGroup label="All Day" defaultSelected="all_categories" value={1} name="Categories">
          <RadioButton
            value={1}
            label="All Day"
            style={styles.radioButton}/>
          <RadioButton
            value={2}
            label="Custom"
            style={styles.radioButton}/>
        </RadioButtonGroup>
      </DropDownMenu>
      </div>
    );
  }
}

export default AllCustom;