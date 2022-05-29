// Import stylesheets
import './style.css';
import $ from 'jquery';
import _ from 'lodash';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

let o1 = [
  { id: 1, name: 'a' },
  { id: 2, name: 'b' },
  { id: 3, name: [{ fn: 'aaa' }, { sn: 'bbb' }] },
];

console.log('here is console');
console.log('obj1 = ', o1);

let o2 = _.clone(o1);
console.log('clone = ', o2);

let do2 = _.cloneDeep(o1);
console.log('deep = ', do2);

let res = 'Resulted objects are clone() and cloneDeep() to the 1st original ';
res += JSON.stringify(o1);
res += JSON.stringify(o2);
res += JSON.stringify(do2);

$('#res').text(res);
