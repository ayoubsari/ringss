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
$(".conetnu1 ul li").click(function(){

$(this).addClass('style_css').siblings().removeClass("style_css");
$(".tabs_content > div").hide();
$("."+$(this).data("class")).show();
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
/*Start Accordion*/
  $(".set > a").on("click", function(){
    if($(this).hasClass('active')){
      $(this).removeClass("active");
      $(this).siblings('.content').slideUp(500);
      $(".set > a i").removeClass("fa-minus").addClass("fa-plus");
    }else{
      $(".set > a i").removeClass("fa-minus").addClass("fa-plus");
    $(this).find("i").removeClass("fa-plus").addClass("fa-minus");
    $(".set > a").removeClass("active");
    $(this).addClass("active");
    $('.content').slideUp(500);
    $(this).siblings('.content').slideDown(500);
    }
    
  });
/*End Accordion*/
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
    /*Validate nom*/
    $tr=false;
 var reg_nom=/^[\p{Arabic}\s\p{N}]+$/;

 $("#user_name").keyup(function(){
if(reg_nom.test($("#user_name").val()))
  {
  $('[data-toggle="p"]').popover("hide");
  $("#user_name").css("border","1px solid green");
  return  $tr=true;
}
else{

     $('[data-toggle="p"]').popover("show");
    $("#user_name").css("border","1px solid #BE4B49");
 return $tr=false;
  }
 });
 /*End validate nom*/
   /*Validate prenom*/
    $pr=false;
 var reg_prenom=/^[A-Za-z ]{2,30}$/;

 $("#user_prenom").keyup(function(){
if(reg_prenom.test($("#user_prenom").val()))
  {
  $('[data-toggle="pr"]').popover("hide");
  $("#user_prenom").css("border","1px solid green");
  return  $pr=true;
}
else{

     $('[data-toggle="pr"]').popover("show");
    $("#user_prenom").css("border","1px solid #BE4B49");
 return $pr=false;
  }
 });
 /*End validate prenom*/
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
/*Validate prenom*/

  //Subjet
  $pr=false;
 $("#user_prenom").keyup(function(){
  $val=$(this).val().length;

if($(this).val().length>3)
  {
  $('[data-toggle="pr"]').popover("hide");
  $("#user_prenom").css("border","1px solid green");
  return  $pr=true;
}
else{

     $('[data-toggle="pr"]').popover("show");
    $("#user_prenom").css("border","1px solid #BE4B49");
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


     /**End validate form**/

});






