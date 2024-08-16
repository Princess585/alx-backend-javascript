interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Ben',
  lastName: 'Peter',
  age: 30,
  location: 'China',
};

const student2: Student = {
  firstName: 'Blis',
  lastName: 'Faith',
  age: 27,
  location: 'India',
};

const studentsList: Student[] = [student1, student2];

let body = document.body;
let table = document.createElement('table');
let table_head = document.createElement('thead');
let table_body = document.createElement('tbody');
let thead_row = document.createElement('tr');

/*Table head definition */
for (let key in studentsList[0]) {
  let th = document.createElement('th');
  let text = document.createTextNode(key);
  th.appendChild(text);
  thead_row.appendChild(th);
}

// Add table head to table
table_head.appendChild(thead_row);
table.appendChild(table_head);
/* End table head definition*/

/* Table body definition */
// Add rows to the tbody
for (let student of studentsList) {
  let tr = document.createElement('tr');

  // loop through student data and add to row
  for (const value of Object.values(student)) {
    const text = document.createTextNode(value);
    let td = document.createElement('td');
    td.appendChild(text);
    tr.appendChild(td);
  }

  table_body.appendChild(tr); // add row to table
}
/* End table body definition */

/* Add table to document */
table.setAttribute('border', '2'); // set value of table border to 2
table.appendChild(table_body);
body.appendChild(table);
