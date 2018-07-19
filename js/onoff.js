$(function(){
     var flag = true;
    $("#onoroff").click(function(){
   
        if(flag){
            var imgname = "images/off.jpg"
            flag = false;
        }else{
            var imgname = "images/on.jpg"
            flag = true;
        }
       
        $("img").attr("src",imgname);
    });
    /* show hide and toggle example*/
    $("#btnhide").click(function(){
        $("#randomtext").hide();
    });
    $("#btnshow").click(function(){
        $("#randomtext").show();
    });
    $("#btntoggle").click(function(){
        $("#randomtext").toggle();
    });
    /* end of show hide and toggle example */
    /* fadein out example */
    $("#fadeout").click(function(){
        $("#box").fadeOut();
    });
      $("#fadein").click(function(){
        $("#box").fadeIn();
    });
      $("#fadetoggle").click(function(){
        $("#box").fadeToggle();
    });
    /* end of fadein out example */
});