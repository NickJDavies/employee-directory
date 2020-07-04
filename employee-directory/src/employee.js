import React from 'react';

const headings = [
    "firstName"
]
const rows = [
    "john ",
    "apple "
]

function employee(employees) {
  return (
    <div className="employeeTable">
        {headings} + {rows[0]}
        {/* <table headings={headings} rows={rows} /> */}
    </div>
  );
}

export default employee;
