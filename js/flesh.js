
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