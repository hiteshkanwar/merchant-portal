import React from 'react';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import Checkbox from 'material-ui/Checkbox';
import Menu from 'material-ui/Menu';


const styles = {
  radioButton: {
    marginTop: 16,
  },
};


class Selectbox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: 1};
    this.handleChange=this.handleChange.bind(this)
  }

  handleChange(event, index, value) { this.setState({value});}

  
  render() {
    return (
      
      
        <div style={styles.block}>
        <Menu value="" onChange={this.handleChange}>
        <Checkbox
          label="Deposist"
          style={styles.checkbox}
        />
        <Checkbox
          label="Gross Sales"
          style={styles.checkbox}
        />
        <Checkbox
          label="Top Items by Sales"
          style={styles.checkbox}
        /><Checkbox
          label="Top Categories by Sales"
          style={styles.checkbox}
        />
        <Checkbox
          label="Your Customers"
          style={styles.checkbox}
        />
        <Checkbox
          label="Customer Pending"
          style={styles.checkbox}
        />
        <Checkbox
          label="Customers Visits"
          style={styles.checkbox}
        />
        <Checkbox
          label="Customer Frequency"
          style={styles.checkbox}
        />
        <Checkbox
          label="Customers Recency"
          style={styles.checkbox}
        />
        </Menu>
      </div>
    );
  }
}

         
        
export default Selectbox;