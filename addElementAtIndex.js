 

 import { array } from "./appendData.js";
 import { createTableView } from "./createTableView.js";

 export function addElementAtindex(){
    let arraylength  = array.length;
    let index = prompt(`Enter index number in between 0 to ${arraylength}`,arraylength);
    index = Number(index);
    let element = prompt("Enter data to add seprated by comma");
    element=element.split(",");

    element={
        name:element[0],
        email:element[1],
        mobile:element[2]

    }

    array.splice(index,0,element);
    createTableView(array);
 }