
import { createTableView } from "./createTableView.js";
import { array } from "./appendData.js";

export function addElementToTop(){

    let nameInput=document.getElementById("name").value;
    let emailInput=document.getElementById("email").value;
    let mobilenumberInput=document.getElementById("mobileNumber").value;


    let person = {
        name:nameInput,
        email:emailInput,
        mobile:mobilenumberInput

    }

    console.log(person);

    array.unshift(person);


    createTableView(array);
}