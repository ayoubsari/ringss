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



//scroll bottom
   $(".iconn a").click(function(){

      $("html,body").animate({scrollTop : $("#"+$(this).data('value')).offset().top},1000);
        });



//*********Add class active******//

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

//Start carsolle
  var totalItems = $('#carousel .item').length;
  var thumbs = 4;
  var currentThumbs = 0;
  var to = 0;
  var thumbActive = 1;
  
  function toggleThumbActive (i) {
    $('#carousel-thumbs .item>div').removeClass('active');
    $('#carousel-thumbs .item.active>div:nth-child(' + i +')').addClass('active');
  }
  
  $('#carousel').on('slide.bs.carousel', function(e) {
    //var active = $(e.target).find('.carousel-inner > .item.active');
    //var from = active.index();
    var from = $('#carousel .item.active').index()+1;
    var next = $(e.relatedTarget);
    to = next.index()+1;
    var nextThumbs = Math.ceil(to/thumbs) - 1;
    if (nextThumbs != currentThumbs) {
      $('#carousel-thumbs').carousel(nextThumbs);
      currentThumbs = nextThumbs;
    }
    thumbActive = +to-(currentThumbs*thumbs);
    //console.log(from + ' => ' + to + ' / ' + currentThumbs);
  });
  $('#carousel').on('slid.bs.carousel', function(e) {
    toggleThumbActive(thumbActive);
  });
  $('#carousel-thumbs').on('slid.bs.carousel', function(e) {
    toggleThumbActive(thumbActive);
  });
    $("#carousel").on("swiperight",function(){
    $('#carousel').carousel('prev');
  });
  $("#carousel").on("swipeleft",function(){
    $('#carousel').carousel('next');
  });
  $("#carousel-thumbs").on("swiperight",function(){
    $('#carousel-thumbs').carousel('prev');
  });
  $("#carousel-thumbs").on("swipeleft",function(){
    $('#carousel-thumbs').carousel('next');
  });

//End Crasolle




});






