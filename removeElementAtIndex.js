

import {createTableView} from "./createTableView.js";
import {array} from "./appendData.js";

export function removeElementAtindex(){

let lengthOfarray = array.length;
let index = prompt("Enter index to which you want delete.we have total  index is:",lengthOfarray);

if(lengthOfarray >= index){
    delete array[index];
console.log(array);

createTableView(array);
}else{
    console.log("index indefine");
}

}

