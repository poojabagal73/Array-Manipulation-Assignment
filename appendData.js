
import{createTableView} from "./createTableView.js"

export let array = [];
export function getInput(){
    let nameInput= document.getElementById("name").value;
    let emailInput= document.getElementById("email").value;
    let mobilenumberInput= document.getElementById("mobileNumber").value;

    console.log(nameInput);

    array.push({name:nameInput, email:emailInput, mobile:mobilenumberInput});
    console.log(array);
    createTableView(array);
    

}