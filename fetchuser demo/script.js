
var res;var ress;
$(document).ready(function(){

$('#user').on('keyup keypress', function(e) {
  var keyCode = e.keyCode || e.which;
  if (keyCode === 13) { 
    e.preventDefault();
    $('#sub').click();
    return false;
  }
});

$('#sub').click(function(){
var username=$('#user').val();
if(username==""){$.notify("input is empty", "error");}
else{
 $.notify("Please wait", "success");



 var demo=new fetchuser(username);

  if(demo.userexists){
       $('#name').val(demo.name);
       $('#bio').val(demo.biography);
        $('#bio').trigger('autoresize');
       $('#followers').val(demo.followers);
       $('#following').val(demo.following);
       $('#private').val(demo.isprivate);
       $('#media').val(demo.media);
          $("#prev").attr('src', demo.pic);
           $("#imgg").attr('href', demo.pic);

           $('#z').css("visibility","visible");$('form').remove();
                    }
else{ $.notify("User not found", "error");}
    


}

});


});
