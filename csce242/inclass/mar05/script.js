let tableHeaderInfo = ["First Name", "Last Name", "Grade"];

let tableInfo = [
    {firstName: "Amy", lastName: "Smith", grade: "2"},
    {firstName: "Juan", lastName: "Pablo", grade: "4"},
    {firstName: "John", lastName: "Rainey", grade: "3"},
    {fistName: "Chandler", lastName: "Paulson", grade: "1"}
];

function addHeaderCell(tr, val) {
    let th = document.createElement('th');

    th.innerHTML = val;

    tr.appendChild(th)
}

function addHeader(tbl, val_1, val_2, val_3) {
    let tr = document.createElement('tr');

    addHeaderCell(tr, val_1);
    addHeaderCell(tr, val_2);
    addHeaderCell(tr, val_3);

    tbl.appendChild(tr)
}

function addCell(tr, val) {
    let td = document.createElement('td');

    td.innerHTML = val;

    tr.appendChild(td)
}


function addRow(tbl, val_1, val_2, val_3) {
    let tr = document.createElement('tr');

    addCell(tr, val_1);
    addCell(tr, val_2);
    addCell(tr, val_3);

    tbl.appendChild(tr)
}

window.onload = function() {
    let table = document.getElementById("table");
    addHeader(table, "First Name", "Last Name", "Grade");
    for (let i=0; i<tableInfo; ++i) {
        addRow(table, tableInfo[i].firstName, tableInfo[i].lastName, tableInfo[i].grade);
    }
    
    this.addRow(table, "Amy", "Smith", "2");
    this.addRow(table, "Juan", "Pablo", "3");
    this.addRow(table, "Chandler", "Philips", "4");

    document.querySelector("#table tr").onclick = 
}