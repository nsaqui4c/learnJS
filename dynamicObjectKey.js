// Dynamics object keys

//if the key of any object is string then we cannot access the value using dot notation

const item = { 'item-hat' : 'cap'}
// we cannot access as below
//item.item-hat or item.'item-hat'

//We have to use as 

item['item-hat']

// We can utilize square bracket for normal keys also
app={key:'value'}

console.log(app[key]

// We can also square bracket to create dynamic object key


let appstate='loading'
const app={ [appstate]:'true'}
console.log(app)
// 'loading' : 'true'

