$(function(){
	
	var index;
	var nbImg;

	nbImg = $('.galerie img').length;

	function changeImg(){
		var newSrc = $('.galerie img').eq(index).attr('src');
		$('.lightbox img').attr('src', newSrc);
	}

	$('.galerie img').click(function(){
		let src = $(this).attr('src');
		$('.lightbox img').attr('src', src);
		$('.lightbox').fadeIn();
		// recupere index this
		index = $('.galerie img').index($(this));
		changePuces(index)
	});

	$('.lightbox .icon-close').click(function(){
		$('.lightbox').fadeOut();
	});	

	$('.lightbox .icon-chevron-left').click(function(){
		// connaitre index image  en cours.	
		// si img index 0 img suivvante = derniere img	
		index = (index-1 +nbImg)%nbImg;
		changeImg();
		changePuces(index)
	});

	$('.lightbox .icon-chevron-right').click(function(){
		// connaitre index image  en cours.	
		// si img index 0 img suivvante = derniere img
		index = (index +1)%nbImg;
		changeImg();
		changePuces(index)
	});

	function generatePuces(){
		puces = '<div class="puces">';
		for(let i = 1; i<=nbImg; i++){
			puces += '<i class="icon-circle-o" ></i>' 
		}
		puces += "</div>";
		$('.lightbox .cadre img').after(puces);
	}
	generatePuces();

	function changePuces(num){
		$('.lightbox .puces i').removeClass('icon-circle');

		$('.lightbox .puces i').eq(num).addClass('icon-circle');
	}

	$(document).on('click','.lightbox i', function(){
		index = $(document).find('.lightbox i').index($(this));
		changeImg();
		changePuces(index);
	});
});