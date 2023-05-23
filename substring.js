
let strl;
let arrobj = {};
const item = prompt('Enter your string:').toLowerCase();
console.log('String: '+item);
let str = '';
let size = item.length;
for(let i = 0;i < size; i++){
    if(str.includes(item[i])){
        // if(str.startsWith(item[i])){
        //     str = str.substring(1);
        // }
        // else{
            let strlen = str.length;
            item.slice(strlen);
            str = item[i];
        // }
    }
    else{
        str += item[i];
    }
    arrobj[str] = str.length;
    strl = Object.keys(arrobj).reduce((a, b) => arrobj[a] > arrobj[b] ? a: b);
}
console.log(arrobj);
console.log(`Longest substring without repeating characters is '${strl}' and its length is ${arrobj[strl]}`)