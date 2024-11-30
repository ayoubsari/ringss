$(function(){
  //**Start date copyright acteulle ***/
  date = new Date;
    annee = date.getFullYear();
  $("#date_m").html(" "+annee);
  //**End date copyright acteulle ***/
$(".conetnu1 ul li").click(function(){

$(this).addClass('style_css').siblings().removeClass("style_css");
$(".tabs_content > div").hide();
$("."+$(this).data("class")).show();
console.log($($(this).data("class")));

});

   $(".iconn a").click(function(){

      $("html,body").animate({scrollTop : $("#"+$(this).data('value')).offset().top},1000);
        });

//*********Add class active******//
$('.cycle .menu_pédagie .list-menu li').click(function(){

$(this).addClass('act_color').siblings().removeClass('act_color');


});
 //*********End class active******//
/*Start tabs*/
 $(".list-menu li").click(function(){

$(".tabs_content > div").hide();
//$("."+$(this).data("class")).show();
$("."+$(this).data("class")).fadeIn("3000");
console.log($($(this).data("class")));

});

/*End tabs*/
/*Start button file*/
$(document).on('click', '.browse', function(){
  var file = $(this).parent().parent().parent().find('.file');
  file.trigger('click');
});
$(document).on('change', '.file', function(){
  $(this).parent().find('.frm').val($(this).val().replace(/C:\\fakepath\\/i, ''));
}); 
/*End button file*/
//Start Button Flish 
$(window).scroll(function(){
   console.log($(this).scrollTop());
if($(this).scrollTop() >= 250)
{
   $(".flech").show();
}
else{
  $(".flech").hide();
  }
});

   $(".flech").click(function(){
    $("html,body").animate({scrollTop :0},1000);
   });

//Start Button Flish 


/**Start validate form**/
/*Start Validate nom et prenom*/

  //Subjet
  $prrrr=false;
 $("#user_nom").keyup(function(){
  $val=$(this).val().length;

if($(this).val().length>3)
  {
  $('[data-toggle="prrrr"]').popover("hide");
  $("#user_nom").css("border","1px solid green");
  return  $prrrr=true;
}
else{

     $('[data-toggle="prrrr"]').popover("show");
    $("#user_nom").css("border","1px solid #BE4B49");
 return $prrrr=false;
  }

 });
 /*End validate nom et prenom*/
/*Start Validate Telephonem*/

  //Subjet
  $prrr=false;
 $("#user_tel").keyup(function(){
  $val=$(this).val().length;

if($(this).val().length>3)
  {
  $('[data-toggle="prrr"]').popover("hide");
  $("#user_tel").css("border","1px solid green");
  return  $prrr=true;
}
else{

    $('[data-toggle="prrr"]').popover("show");
    $("#user_tel").css("border","1px solid #BE4B49");
 return $prrr=false;
  }

 });
 /*End validate Telephonem*/

 /*Validate Email*/
 $em=false;
 var reg_email=/^[A-Za-z0-9]{3,20}@[A-Za-z]{1,7}\.[A-Za-z]{1,3}$/;
$("#user_email").keyup(function(){
if(reg_email.test($("#user_email").val()))
  {
  $('[data-toggle="em"]').popover("hide");
  $("#user_email").css("border","1px solid green");
  return  $em=true;
}
else{

     $('[data-toggle="em"]').popover("show");
    $("#user_email").css("border","1px solid #BE4B49");
 return $em=false;
  }
 });
 /*End validate Email*/
/*Start Validate prenom*/

  //Subjet
  $prr=false;
 $("#user_lequelle").keyup(function(){
  $val=$(this).val().length;

if($(this).val().length>3)
  {
  $('[data-toggle="prr"]').popover("hide");
  $("#user_lequelle").css("border","1px solid green");
  return  $prr=true;
}
else{

     $('[data-toggle="prr"]').popover("show");
    $("#user_lequelle").css("border","1px solid #BE4B49");
 return $pr=false;
  }

 });
 /*End validate prenom*/

 /*Validate Message*/
    $messgae_b=false;
 

 $("#user_message").keyup(function(){
  $val=$(this).val().length;
  $valm=$(this).attr('maxlength');
  $val_d=$valm-$val
    console.log($val_d);
  $("#nombre_c").html($val_d+"/"+$valm);

if($(this).val().length>3)
  {
  $('[data-toggle="prm"]').popover("hide");
  $("#user_message").css("border","1px solid green");
  return  $messgae_b=true;
}
else{

     $('[data-toggle="prm"]').popover("show");
    $("#user_message").css("border","1px solid #BE4B49");
 return $messgae_b=false;
  }

 });
 /*End validate Message*/
 $( "form" ).submit(function( event ) {
   if($prrrr==true && $prrr==true && $em==true && $messgae_b==true && $prr == true)
   {

       return;

   }

 event.preventDefault();
});

     /**End validate form**/

});






