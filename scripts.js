let table = document.createElement('table');
let tr = document.createElement('tr');
let th1 = document.createElement('th');
let th2 = document.createElement('th');
let th3 = document.createElement('th');
let th4 = document.createElement('th');

th1.innerText = "Number";
th2.innerText = "Company";
th3.innerText = "Games";
th4.innerText = "Pop-games";

table.append(tr);
tr.append(th1);
tr.append(th2);
tr.append(th3);
tr.append(th4);
document.body.append(table);

fetch('./data.json')
    .then(function(response){
        return response.json();
    })
    .then(function(json){
    for (const key in json) {
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        
    }
});    