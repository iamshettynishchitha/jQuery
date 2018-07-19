$(function(){
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
            $(".reset").click();
            
            student = {
                "usn":usn,
                "name":name,
                "email":email,
                "mobile":mobile,
                "course":course,
                "percentage":percentage
            }
            console.log(student);
            return false;
        }
    
        
    });
  
    
});