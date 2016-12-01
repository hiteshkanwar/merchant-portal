import React from 'react';
import ReactDOM from 'react-dom';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import Delete from 'material-ui/svg-icons/action/delete';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import AsssignItems from './assign_items'
import DeleteCategory from './delete_category'
const style = {
  margin: 12,
  backgroundColor: '#2996cc',
};

class Category extends React.Component {

  constructor(props) {
    super(props);

    //  this.state.products = [];
    this.state = {
      showCheckboxes: false,
    };
    this.state.filterText = "";
    this.state.products = [
      {
        id: 1,
        price: '49.99',
        name: 'Breakfast before 4:30'
      }, {
        id: 2,
        price: '9.99',
        name: 'Dinner'
      }, {
        id: 3,
        price: '29.99',
       
        name: 'Happy Hour'
      }, {
        id: 4,
        price: '99.99',
        
        name: 'Lunch'
      }, {
        id: 5,
        name: 'Special Menu',
        price: '399.99',
       
      }
    ];

  }
  handleUserInput(filterText) {
    this.setState({filterText: filterText});
  };
  handleRowDel(product) {
    var index = this.state.products.indexOf(product);
    this.state.products.splice(index, 1);
    this.setState(this.state.products);
  };

  handleAddEvent(evt) {
    var id = (+ new Date() + Math.floor(Math.random() * 999999)).toString(36);
    var product = {
      id: id,
      name: "",
      price: ""
    }
    this.state.products.push(product);
    this.setState(this.state.products);

  }

  handleProductTable(evt) {
    var item = {
      id: evt.target.id,
      name: evt.target.name,
      value: evt.target.value
    };
    var products = this.state.products;

    var newProducts = products.map(function(product) {
      for (var key in product) {
        if (key == item.name && product.id == item.id) {
          product[key] = item.value;

        }
      }
      return product;
    });
    this.setState(newProducts);
    console.log(this.state.products);
  };
  render() {

    return (
      <div>
        <SearchBar filterText={this.state.filterText} onUserInput={this.handleUserInput.bind(this)}/>
        <ProductTable onProductTableUpdate={this.handleProductTable.bind(this)} onRowAdd={this.handleAddEvent.bind(this)} onRowDel={this.handleRowDel.bind(this)} products={this.state.products} filterText={this.state.filterText}/>
      </div>
    );

  }

}
class SearchBar extends React.Component {
  handleChange() {
    this.props.onUserInput(this.refs.filterTextInput.value);
  }
  render() {
    return (
      <div>
      </div>

    );
  }

}

class ProductTable extends React.Component {

  render() {
    var onProductTableUpdate = this.props.onProductTableUpdate;
    var rowDel = this.props.onRowDel;
    var filterText = this.props.filterText;
    var product = this.props.products.map(function(product) {
      if (product.name.indexOf(filterText) === -1) {
        return;
      }
      return (<ProductRow onProductTableUpdate={onProductTableUpdate} product={product} onDelEvent={rowDel.bind(this)} key={product.id}/>)
    });
    return (
      <div>
      <RaisedButton label="Create Category" onClick={this.props.onRowAdd} style={style} className="import-btn import-btn-new"/>
        <div className="table-fullwidth">
        <Table className="table table-bordered">
          <TableHeader>
            <TableRow>
            </TableRow>
          </TableHeader>
          <TableBody>
            {product}
          </TableBody>
        </Table>
        </div>
      </div>
    );

  }

}

class ProductRow extends React.Component {
  onDelEvent() {
    this.props.onDelEvent(this.props.product);

  }
  render() {

    return (
      <tr className="eachRow">
        <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
          "type": "name",
          value: this.props.product.name,
          id: this.props.product.id
        }}/>
        <td className="del-cell">
          <p>2</p>
        </td>
        <td className="del-cell" width="13%">
          <AsssignItems/>
        </td>
        <td className="del-cell" width="5%">
          <DeleteCategory/>
        </td>
      </tr>
    );

  }

}
class EditableCell extends React.Component {

  render() {
    return (
      <td width="63%">
        <input type='text' name={this.props.cellData.type} id={this.props.cellData.id} value={this.props.cellData.value} onChange={this.props.onProductTableUpdate}/>
      </td>
    );

  }

}

export default Category;