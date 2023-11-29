const {readFileSync,writeFileSync}=require('fs');
console.log('start');
const first=readFileSync('./content/first.txt','utf-8')
const second =readFileSync('./content/second.txt','utf-8')

console.log(first,second);

writeFileSync('./content/first.txt','new2 new2');
console.log('end');

console.log('start another one');

