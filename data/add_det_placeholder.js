const fs = require('fs');

let obj = require(process.argv[2]);
// console.log(JSON.stringify(obj,null,2))

// console.log(obj.results)
obj.results ? obj.results.forEach(ele => {
  // console.log(ele.details)
  !ele.details ? ele.details = "<<<<-PLACEHOLDER->>>>": console.log('Already has details');
}) : null;

obj = JSON.stringify(obj, null, 2);

let newName  = process.argv[2]; newName = newName.replace('./','').split('.');
newName = `${newName[0]}${process.argv[3]}.json`

console.log(newName);
// console.log(obj);
obj ? (fs.writeFile(newName, obj ,'utf8', (err) => {
  err ? console.log( `The following error occured: ${err}`): console.log('File has been edited and saved!')
})) : console.log('Error!')
