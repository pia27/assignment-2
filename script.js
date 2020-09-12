var rIndex,
table = document.getElementById("table");
          // check the empty input
          function checkEmptyInput()
          {
              var isEmpty = false,
                  fname = document.getElementById("fname").value,
                  lname = document.getElementById("lname").value,
                  dname = document.getElementById("dname").value,
                  cname = document.getElementById("cname").value;
                  
          
              if(fname === ""){
                  alert("First Name Connot Be Empty");
                  isEmpty = true;
              }
              else if(lname === ""){
                  alert("Last Name Connot Be Empty");
                  isEmpty = true;
              }
              else if(dname === ""){
                  alert("Department Connot Be Empty");
                  isEmpty = true;
              }

              else if(cname === ""){
                  alert("College Name Connot Be Empty");
                  isEmpty = true;
              }
              
              return isEmpty;
          }
          
          // add Row
          function addHtmlTableRow()
          {
              // get the table by id
              // create a new row and cells
              // get value from input text
              // set the values into row cell's
              if(!checkEmptyInput()){
              var newRow = table.insertRow(table.length),
                  cell1 = newRow.insertCell(0),
                  cell2 = newRow.insertCell(1),
                  cell3 = newRow.insertCell(2),
                  cell4 = newRow.insertCell(3),
                  
                  fname = document.getElementById("fname").value,
                  lname = document.getElementById("lname").value,
                  dname = document.getElementById("dname").value,
                  cname = document.getElementById("cname").value;
          
              cell1.innerHTML = fname;
              cell2.innerHTML = lname;
              cell3.innerHTML = dname;
              cell4.innerHTML = cname;
              // call the function to set the event to the new row
              selectedRowToInput();
          }
          }
          
          // display selected row data into input text
          function selectedRowToInput()
          {
              
              for(var i = 1; i < table.rows.length; i++)
              {
                  table.rows[i].onclick = function()
                  {
                    // get the seected row index
                    rIndex = this.rowIndex;
                    document.getElementById("fname").value = this.cells[0].innerHTML;
                    document.getElementById("lname").value = this.cells[1].innerHTML;
                    document.getElementById("dname").value = this.cells[2].innerHTML;
                    document.getElementById("cname").value = this.cells[3].innerHTML;
                  };
              }
          }
          selectedRowToInput();
          
          function editHtmlTbleSelectedRow()
          {
              var fname = document.getElementById("fname").value,
                  lname = document.getElementById("lname").value,
                  dname = document.getElementById("dname").value,
                  cname = document.getElementById("cname").value;
                  
             if(!checkEmptyInput()){
              table.rows[rIndex].cells[0].innerHTML = fname;
              table.rows[rIndex].cells[1].innerHTML = lname;
              table.rows[rIndex].cells[2].innerHTML = dname;
              table.rows[rIndex].cells[3].innerHTML = cname;
            }
          }

          function clearSelectedRow()
          {
              table.deleteRow(rIndex);
              // clear input text
              document.getElementById("fname").value = "";
              document.getElementById("lname").value = "";
              document.getElementById("dname").value = "";
              document.getElementById("cname").value = "";
          }
          
          function removeSelectedRow()
          {
              table.deleteRow(rIndex);
              // clear input text
              document.getElementById("fname").value = "";
              document.getElementById("lname").value = "";
              document.getElementById("dname").value = "";
              document.getElementById("cname").value = "";
          }
          
          


      
            
           