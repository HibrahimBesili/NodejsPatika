const fs = require("fs");

fs.writeFile('employees.json', '{"name": "Employee 1 Name", "salary": 2000}' ,'utf8', (err) => {
    if (err) throw err;
  });

fs.readFile('employees.json','utf8',(err, data) => {
    if (err) throw err;
    console.log(data);
});

fs.writeFile('employees.json', '{"name": "Employee 2 Name", "salary": 3000}' ,'utf8', (err) => {
    if (err) throw err;
});

fs.unlink('employees.json', (err) => {
    if (err) console.log(err);
})
