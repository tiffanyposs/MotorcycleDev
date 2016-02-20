$( document ).ready(function(){
	//toggle the selected nav
	$('.nav a').on('click', function(){
		var oldIndex = $('.nav').find('#slider-selected').index();
		var newIndex = $(this).parent().index();

		//alter nav
		$('.nav').find('#slider-selected').removeAttr('id');
		$(this).parent().attr('id', 'slider-selected');

		//animate slides
		$('.slide').eq(oldIndex).hide("slide", { 
			direction: "right" 
		}, 1000);

		$('.slide').eq(newIndex).delay(200).show("slide", {
			direction: "left" 
		}, 1000);
	});

});