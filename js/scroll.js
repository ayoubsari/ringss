$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

     //>=, not <=
    if (scroll >= 120) {
        //clearHeader, not clearheader - caps H
        $(".navbar-default").addClass("navbar-fixed-top");
       
    }

    else{
$(".navbar-default").removeClass("navbar-fixed-top");
    }
}); //missing );




      $(".btn_inscri,.ser_").click(function(){

      $("html,body").animate({scrollTop : $("#"+$(this).data('value')).offset().top},1000);
   
        });

            $(".we_ ").click(function(){

      $("html,body").animate({scrollTop : $("#"+$(this).data('value')).offset().top},1000);
   
        });




$(".con_ ").click(function(){
      $("html,body").animate({scrollTop : $("#"+$(this).data('value')).offset().top},1000);
   
        });



      $(".sab").click(function(){

      $("html,body").animate({scrollTop : $("#"+$(this).data('value')).offset().top},1000);
   
        });