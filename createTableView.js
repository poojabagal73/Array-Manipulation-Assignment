//Function to Create Table View from an Array of Objects:

export function createTableView(data){


    let table = '<table>';
    table +='<tr><th>Name</th><th>Email</th><th>Mobile</th><th>';
    data.forEach(item => {
        table +=`<tr><td>${item.name}</td><td>${item.email}</td><td>${item.mobile}</td><td>`;

        
    });

    table +='</table>'
    document.getElementById("table").innerHTML = table;

}
/*
const peopledata=[
    { name: "Vilas Shetkar", email: "vilasshetkar@gmail.com", mobile: 9049508514 },
     { name: "abc", email: "abc@gmail.com", mobile: 9000000078 }
];

const tableElement =createTableView(peopledata);

*/