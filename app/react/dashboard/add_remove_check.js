import React from 'react';
import ReactDOM from 'react-dom';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import Divider from 'material-ui/Divider';
import {List, ListItem, makeSelectable} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';

let SelectableList = makeSelectable(List);
const customContentStyle = {
  width: '46%',
  maxWidth: 'none',
};

const style = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  }
};
const styles = {
  rootparent: {
    backgroundImage : "url(/assets/grid.png )",
    backgroundColor:'#fff',
    backgroundRepeat:'no-repeat',
    backgroundPosition:'top',
  }
};

class AddRemoveSelect extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
      open: false
    }; 
    this.handleCheck= this.handleCheck.bind(this);
  }
  handleCheck(block){   
    if (block.target.checked) {
      $("#"+block.target.value).hide();
    }else{
      $("#"+block.target.value).show();
    }
  }
  render() {
  return (
      <div>
        <SelectableList defaultValue={3}>
          <div style={style.root}>
            <ListItem style={styles.rootparent}
            label="Deposits"

              value={1}
                  
                  nestedItems={[

                  <div className="grid-list">

                   <ListItem
                    value={"Deposits"}
                    primaryText="Deposits"
                    leftCheckbox={<Checkbox value="Deposits" onClick={this.handleCheck}/>}                 
                  />
                  <ListItem
                    value={"Gross Sales"}
                    primaryText="Gross Sales"
                    leftCheckbox={<Checkbox value="Gross_Sales" onClick={this.handleCheck}/>}                 
                  />
                  <ListItem
                    value={"Top items by sales"}
                    primaryText="Top items by Sales"
                    leftCheckbox={<Checkbox value="Top_items_by_Sales" onClick={this.handleCheck}/>}
                  />
                  <ListItem
                    value={"Top Categories by Sales"}
                    primaryText="Top Categories by Sales"
                    leftCheckbox={<Checkbox value="Top_Categories_by_Sales" onClick={this.handleCheck}/>}
                  />
                  <ListItem
                    value={"Your Customers"}
                    primaryText="Your Customers"
                    leftCheckbox={<Checkbox value="Your_Customers" onClick={this.handleCheck}/>}
                  />
                  <ListItem
                    value={"Customer Pending"}
                    primaryText="Customer Pending"
                    leftCheckbox={<Checkbox value="Customer_Pending" onClick={this.handleCheck}/>}
                  />
                  <ListItem
                    value={"Customers Visits"}
                    primaryText="Customers Visits"
                    leftCheckbox={<Checkbox value="Customers_Visits" onClick={this.handleCheck}/>}
                  />
                  <ListItem
                    value={"Customer Frequency"}
                    primaryText="Customer Frequency"
                    leftCheckbox={<Checkbox value="Customer_Frequency" onClick={this.handleCheck}/>}
                  />
                  <ListItem
                    value={"Customers Recency"}
                    primaryText="Customers Recency"
                    leftCheckbox={<Checkbox value="Customers_Recency" onClick={this.handleCheck}/>}
                  />
                  </div>                     
              ]}
            />
          </div>      
        </SelectableList> 
        </div>
    );
  }  
}

export default AddRemoveSelect;