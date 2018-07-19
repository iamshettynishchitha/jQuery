$(function(){
  $("#regform").validate({
      rules:{
          usn:{
              required:true,
          },
          name:{
              required:true,
              minlength:10
          },
          email:{
              required:true,
              email:true
          },
         mobile:{
             required:true
         },
          percentage:{
              required:true;
              
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
                  required:'mobile number canot be empty'
              },
              percentage:{
                  required:
              }
              
          }
  }); 
    
    
});