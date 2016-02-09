$(document).ready(function(){


  var makeHeight = function(){
	  var imageHeight = $('.image img').height()
	  $('.approach-images').css('height', imageHeight)
  }

  $( window ).resize(function() {
    makeHeight()
  });

  makeHeight()


  //nav bar animation
  var animatedScroll = false;

  $(window).scroll(function(){
      var position = $(window).scrollTop()
      if (!animatedScroll || position < 100) {
          animatedScroll = true;
          if  (position < 100){

            $('header nav').removeClass('shownav');
      			$( "header nav img" ).stop().animate({
      			   height: '150px',
      			}, 500, "linear", function(){animatedScroll = false; });

          } else {

          $('header nav').addClass('shownav')
  	  		$( "header nav img" ).stop().animate({
  		   	 	height: '100px',
  		  	}, 500, "linear", function(){animatedScroll = false; })
          }
      }
  });



  //controls the hover
  $('.approach-images .image img').mouseover(function(){
    var height = $(this).height();
    var $cover = $(this).parent().children('div')[0];

    $($cover).animate({
      height: height
    }, 500, "linear")

  })

  $('.approach-images .image > div:nth-child(2)').mouseleave(function(){
    $(this).animate({
      height: "0px"
    }, 500, "linear")
  })




})