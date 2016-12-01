import React from 'react';
import ReactDOM from 'react-dom';
import RaisedButton from 'material-ui/RaisedButton';
import CreateTax from './create_tax';
import CreateTaxRule from './create_tax_rule';
import ApplyTaxItem from './apply_tax_items';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

class Taxes extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showCheckboxes: false
    };
    
    
  }

  render() {
    return (
      <div>
        <div className="taxes-header"><h3>Taxes</h3>
        <div className="pull-right">
            <CreateTax/>
          </div>
        </div>
          
          <div className="clear"></div>
        <Table className="taxes-table">
          <TableHeader adjustForCheckbox={this.state.showCheckboxes}>
            <TableRow>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn className="text-right">Percentage</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody  displayRowCheckbox={this.state.showCheckboxes}>
            <TableRow>
              <TableRowColumn><b>Sales Tax</b></TableRowColumn>
              <TableRowColumn ></TableRowColumn>
              <TableRowColumn className="text-right apply-set-btn" width="18%"><ApplyTaxItem/></TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>


        <div className="taxes-header2"><h3>Tax Rules for Dining Options</h3>
        <div className="pull-right">
            <CreateTaxRule/>
          </div>
        </div>
          <div className="clear"></div>
        <Table className="taxes-table">
          <TableHeader adjustForCheckbox={this.state.showCheckboxes}>
            <TableRow>
              <TableHeaderColumn>Rule</TableHeaderColumn>
              <TableHeaderColumn>Dining Option</TableHeaderColumn>
              <TableHeaderColumn>Tax Not Applied</TableHeaderColumn>
              <TableHeaderColumn className="text-right">Items</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody  displayRowCheckbox={this.state.showCheckboxes}>
            <TableRow>
              <TableRowColumn>Test rule</TableRowColumn>
              <TableRowColumn>Pickup</TableRowColumn>
              <TableRowColumn>Sales Tax</TableRowColumn>
              <TableRowColumn className="text-right">1 Items</TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>
      </div>  
    );
  }
}

export default Taxes;