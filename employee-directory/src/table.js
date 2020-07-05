import React, { useState} from 'react';
import style from './table.css';
// import sortFunction from "./sortFunction";

class TableMaker extends React.Component {
  constructor(props) {
    super(props);
    
    const headings = [
      "First Name",
      "Second Name"
    ]

    const rows = [
      [ 30, "John", "Doe", 1],
      [ 50, "Mary", "Geoffries", 2],
      [ 90, "Nicholas", "Davies", 3],
      [ 42, "Gordon", "Ramsey", 4]
    ]
  
    this.state = {
      headings: headings,
      rows: rows
    };
  }

  ageSort = () => {
    this.setState({rows: this.state.rows.sort(function(a, b) {return (a[0] - b[0])})});
  };

  indexSort = () => {
    this.setState({rows: this.state.rows.sort(function(a, b) {return (a[3] - b[3])})});
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>
              <button onClick={ this.ageSort }> Age </button>
            </th>
            {this.state.headings.map(c => (
              <th>
                {c}
              </th>
            ))}
            <th>
              <button onClick={ this.indexSort }> Index </button>
            </th>
          </tr>
        </thead>
        <tbody>
        {this.state.rows.map(c => (
          <tr>
              {c.map(c => (
                <td>{c}</td>
              ))}
          </tr>
        ))}
        </tbody>
    </table>
    );
  }
}

export default TableMaker;
