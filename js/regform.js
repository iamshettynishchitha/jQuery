$(function(){
    if(localStorage.getItem("students")==null){
        localStorage.setItem("students",JSON.stringify([]));
    }
     showRegisteredStudents();
    
    dialog = $("#dialog").dialog({
      autoOpen: false,
        height:500,
        width:500,
        modal:true
    
    });
       $(".regstu").click(function(){
           dialog.dialog("open");
       });
    
    /* datepicker start*/
    $("#dob").datepicker({
        changeYear:true,
        changeMonth:true
    });
        
   
    $(".submit").click(function(){
        var isValid = $("#regform").validate({
      rules:{
          usn:{
              required:true,
          },
          name:{
              required:true,
              minlength:2
          },
          email:{
              required:true,
              email:true
          },
         mobile:{
             required:true
         },
          percentage:{
              required:true,
              min:55,
              max:100
          },
          dob:{
              required:true
          }
      },
          messages:{
              usn:{
              required:'usn cannot be empty'   
              },
              name:{
                  required:'name cannot be empty',
                  minlength:'minimum 10 character required'
              },
              email:{
                  required:'email canot be empty'
              },
              mobile:{
                  required:'mobile cannot be empty'
              },
              percentage:{
                  required:'percentage canotbe empty',
                min:'below 55 not be eligible',
                  max:'eligible'
              },
              dob:{
                  required:'dob canot be empty'
              }
          }
  }).form(); 
        if(isValid){
            var usn = $("#usn").val();
            var name = $("#name").val();
             var email = $("#email").val();
             var mobile = $("#mobile").val();
             var course = $("#course").val();
             var percentage = $("#percentage").val();
            var dob =$("#dob").val();
            $(".reset").click();
            
            student = {
                "usn":usn,
                "name":name,
                "email":email,
                "mobile":mobile,
                "course":course,
                "percentage":percentage,
                "dob":dob
            }
            var students = getDataFromLocalStorage();
            students.push(student);
            updateLocalStorageData(students);
            showRegisteredStudents();
            dialog.dialog("close");
            return false;
        }
        
    });
     function showRegisteredStudents(){
         var students = getDataFromLocalStorage();
        var data = " ";
         if(students.length == 0){
             data = "<h3>No students registered yet.."
         }else{
             data +="<table id='regstudents'><thead><tr>"
             data +="<th>#</th>";
             data +="<th>USN</th>";
             data +="<th>Name</th>";
             data +="<th>Email</th>";
             data +="<th>Mobile</th>";
             data +="<th>Course</th>";
             data +="<th>Percentage</th>";
             data +="<th>DOB</th>";
             data += "</tr></thead>";
             for(var i = 0;i<students.length;i++){
                 var j = i + 1;
                 data +="<tr>";
                 data +="<td>"+j+"</td>";
                 data +="<td>"+students[i].usn+"</td>";
                 data +="<td>"+students[i].name+"</td>";
                 data +="<td>"+students[i].email+"</td>";
                 data +="<td>"+students[i].mobile+"</td>";
                 data +="<td>"+students[i].course+"</td>";
                 data +="<td>"+students[i].percentage+"</td>";
                 data +="<td>"+students[i].dob+"</td>";
                 data += "</tr>";
             }
             data += "</table>";
         }
         $("#content").html(data);
         $("#regstudents").dataTable({
             "pageLength":2
         })
     }
  function getDataFromLocalStorage(){
      var students = JSON.parse(localStorage.getItem("students"));
      return students;
  }
    function updateLocalStorageData(updatedStudentsArr){
        localStorage.setItem("students",JSON.stringify(updatedStudentsArr));
        
    }
    
});