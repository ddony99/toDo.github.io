
//Date
//const date =  new Date();
//var current_date = date.getDate()+"-"+(date.getMonth()+1)+"-"+ date.getFullYear();
//document.getElementById("day").innerHTML = current_date;
//let showDate = new Date().toLocaleString('en-us',{month:'long', year:'numeric', day:'numeric'})
//document.getElementById("day").innerHTML = showDate;

let task =  [{
        name_task: "",
        status_task: "",
        num_task: ""
    }];

   // document.getElementById("task").innerHTML =  task[0].name_task;
   // document.getElementById("status").innerHTML =  task[0].status_task;
  
    
// store the last segment number in a global variable
/*
var lastSegment = 1;

function addRow(tableID) {
    
    var tbody = document.querySelector("#" + tableID + " tbody");
    var rows = tbody.querySelectorAl("tr");

    if(rows.length < 10){ // limit the user from creating too many segments
        
      // copy the first TR of the table
      var newRow = rows[0].cloneNode(true);
      // increment the last segment number and apply it to the new segment[] field
      newRow.querySelector("#number").innerHTML = ++lastSegment;
      
      // add the new row
      tbody.appendChild(newRow);
     
    } else {
         alert("Maximum Number of Segments is 10.");
    }
  
    
    
    document.getElementById("task0").innerHTML =  task[1].name_task;
    document.getElementById("status0").innerHTML =  task[1].status_task;
    document.getElementById("task0").innerHTML =  task[2].name_task;
    document.getElementById("status0").innerHTML =  task[2].status_task;
    addNewTask()
}
*/
/*
var lastSegment = 1;
var table = document.getElementById("dataTable");
var button = document.getElementById("okButton");

button.addEventListener("click", function() {
  // Get the last row of the table
  var lastRow = table.rows[table.rows.length - 1];

  // Create a new row
  var newRow =  lastRow.cloneNode(true);
  addNewTask()
   // Increment the text in the new row's cells
   for (var i = 0; i < newRow.cells.length; i++) {

    newRow.cells[0].innerHTML =  task[newTask].num_task
    newRow.cells[1].innerHTML =   task[newTask].name_task
    newRow.cells[2].innerHTML =   task[newTask].status_task
    console.log(`${task[newTask].name_task} / ${task[newTask].status_task}`)
  }

  // Add the new row to the table
  table.appendChild(newRow);
});


*/

function addRow() {
  var table = document.getElementById("dataTable");
  var row = table.insertRow(-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 =  row.insertCell(2);
  var cell4 =  row.insertCell(3);
  var cell5 =  row.insertCell(4);

  cell1.innerHTML = window.prompt("Number of Task");
  cell2.innerHTML = window.prompt("What Task?", "..."); 
  cell3.innerHTML = window.prompt("Enter Status?", "..."); 
  cell4.innerHTML = '<button class="btn btn-outline-info" type="button" id="edit_status"  >Edit me</button>';
  cell5.innerHTML = '<button class="btn btn-outline-danger" type="button"  >Drop me</button>';
  
  var button = document.getElementById("edit_status");
  button.addEventListener("click", function() {
    cell3.innerHTML = window.prompt("Enter the New Status of the Task?", "..."); 
    if(cell3.innerHTML === ''){
      alert(`empty retry enter a value`)
    }else{
   cell3.innerHTML;
   console.log(`${cell3.innerHTML} `)
  }

});


  /*
  var container = document.getElementById("edit");
  container.innerHTML = '<button class="btn btn-primary">Click me</button>';
  */
  
}

function edit(){
  var new_edit = window.prompt(`Enter new Task`)
 
  if(new_edit === ''){
    alert(`empty retry enter a value`)
     
  }else{
   new_edit = cell4.innerHTML
  }
   console.log(new_edit)
}
/*
function editTask(){

  //addNewTask()
  //alert('Edit')
  
  var status = window.prompt("Enter the New Status of the Task?", "..."); 
 
  if(status === ''){
         alert(`empty retry enter a value`)
  }else{
     // task[newTask] = {}
     // task[newTask].status_task= status
      //document.getElementById("status").innerHTML = task[newTask].status_task= status;
      var table = document.getElementById("dataTable");
      var row = table.insertRow(-1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 =  row.insertCell(2);
      cell1.innerHTML = ""
      cell2.innerHTML = ""
      cell3.innerHTML = status;
      
    
       console.log(`${status} `)
  }

}
*/
/*
var newTask = task.length + 1;

function addNewTask(name,status){
 
    var num = window.prompt("Number of Task");
    var name = window.prompt("What Task?", "..."); 
    var status = window.prompt("Enter Status?", "..."); 
   
    if(name === ''){
           alert(`empty retry enter a value`)
    }else if(status === ''){
            alert(`empty retry enter a value`)
    }else if(num === ''){
      alert(`empty retry enter a value`)
    }else{
        task[newTask] = {}
        task[newTask].name_task= name
        task[newTask].status_task= status
        task[newTask].num_task= num
        document.getElementById("task").innerHTML =   task[newTask].name_task = name;
        document.getElementById("status").innerHTML = task[newTask].status_task= status;
        document.getElementById("number").innerHTML = task[newTask].num_task= num;
       
         
    }
}
*/

var trash = task.length - 1;

function trashTask(){

    document.getElementById("addTask").remove();

}
    //document.getElementById("delete0").innerHTML = task[0].delete_task = null;
    //make a loops for increment table

 /*
    document.getElementById("okButton").addEventListener(
        "click",
        () => {
          //document.getElementById("welcome").hidden = true;
          document.getElementById("hide").hidden = false;
        },
        false
      );

 */