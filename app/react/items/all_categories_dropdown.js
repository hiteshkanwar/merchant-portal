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
  },
};

class AllCategory extends React.Component {

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
      <DropDownMenu maxHeight={300} value={this.state.value} onChange={this.handleChange}>
      
      <RadioButtonGroup label="All Categories" defaultSelected="all_categories" value={1} name="Categories">
          <RadioButton
            value={1}
            label="All Categories"
            style={styles.radioButton}/>
          <RadioButton
            value={2}
            label="Breakfast before 4:30"
            style={styles.radioButton}/>
           <RadioButton
            value={3}
            label="Dinner"
            style={styles.radioButton}/>
          <RadioButton
            value={4}
            label="Happy Hour"
            style={styles.radioButton}/>
          <RadioButton
            value={5}
            label="Lunch"
            style={styles.radioButton}/>
          <RadioButton
            value={6}
            label="Special Menu"
            style={styles.radioButton}/>
      </RadioButtonGroup>
      </DropDownMenu>
    );
  }
}

export default AllCategory;
