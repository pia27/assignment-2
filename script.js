/*
var row = 1;
var submit = document.getElementById("submit");
submit.addEventListener("click",displayDetails);
function displayDetails(){
    var fname =document.getElementById("fname").value;
    if(!fname){
    alert("Please fill all details");
    return;
}
var display = document.getElementById("display");
var newRow = display.insertRow(row);
var cell1 = newRow.insertcell(0);
cell1.innerHTML = name;
row++;
}
/*
var FirstName =document.forms['form']['FirstName'];
var LastName =document.stud_form.LastName;
var Department =document.stud_form.Department;
var CollegeName =document.stud_form.CollegeName;
var Year=document.stud_form.Year;
  
var FirstName_error = document.getElementById('FirstName_error');
*/ 


function validateForm() {
  var x= document.forms["myForm"]["fname"].value && document.forms["myForm"]["lname"].value && document.forms["myForm"]["dname"].value && document.forms["myForm"]["cname"].value;
  if (x == "") {
    alert("Area must be filled out");
    return false;
    }
}
/*
function validateForm() {
  var fname= document.forms["myForm"]["fname"].value ;
  if (fname.value== "") {
    alert("Area must be filled out");
    alert.focus();
    return false;
    }
}
function validateForm() {
  var lname= document.forms["myForm"]["lname"].value ;
  if (lname.value== "") {
    alert("Area must be filled out");
    return false;
    }
}
/*
 document.forms["myForm"]["lname"].value && document.forms["myForm"]["dname"].value && document.forms["myForm"]["cname"].value;
 */
function addRow()
      {
        //get input values
        var fname= document.getElementById('fname').value;
        var lname= document.getElementById('lname').value;
        var dname= document.getElementById('dname').value;
        var cname= document.getElementById('cname').value;
        //get the html table
        //0=the first table
        var table=document.getElementsByTagName('table')[0];
        //add new empty row to the table
        //0 = in the top;
        //table.rows.length=the end
        //table.rows.length/2+1 = the center
        var newRow=table.insertRow(table.rows.length/2+1);
        //add cells to the row
        var cel1 = newRow.insertCell(0);
        var cel2 = newRow.insertCell(1);
        var cel3 = newRow.insertCell(2);
        var cel4 = newRow.insertCell(3);
        //add values to the cells
        cel1.innerHTML = fname;
        cel2.innerHTML = lname;
        cel3.innerHTML = dname;
        cel4.innerHTML = cname;

        /*cel1.innerHTML = "FirstName";
        cel2.innerHTML = "LastName";
        cel3.innerHTML = "DepartmentName";
        cel4.innerHTML = "CollegeName";*/


      }
      