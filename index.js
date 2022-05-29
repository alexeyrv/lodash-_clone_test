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
console.log('original = ', o1);

let o2 = _.clone(o1);
console.log('clone = ', o2);

let do2 = _.cloneDeep(o1);
console.log('deep = ', do2);

let res1 = 'original = ' + JSON.stringify(o1);
let res2 = 'clone() = ' + JSON.stringify(o2);
let res3 = 'cloneDeep() = ' + JSON.stringify(do2);

$('#res1').text(res1);
$('#res2').text(res2);
$('#res3').text(res3);
