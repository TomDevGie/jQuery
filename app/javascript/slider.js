$(function(){
	let acceptDefile; 
	var interval;
	let val1;
	let largeur;

	acceptDefile= true;

	largeur = $('.slider').width();
	$('.slider li').width(largeur);

	$(window).resize(function(){
		largeur = $('.slider').width();
		$('.slider li').width(largeur);
	});


	function defileLeft() {
		$('.slider ul').animate({'left':-largeur}, 1000, function(){
			$('.slider li:last').after($('.slider li:first'));
			$(this).css({'left':0});
			acceptDefile = true;
			changeText();
		});
	}
	function defileRight() {		
		$('.slider ul').css({'left':-largeur});
		$('.slider li:first').before($('.slider li:last'));
		$('.slider ul').animate({'left':0}, 1000, function(){
			acceptDefile= true;
			changeText();
		});
	}

	interval = setInterval(defileLeft, 3000);
	//console.log(interval);

	$('.slider .icon-chevron-left').click(function(){
		if (acceptDefile){
			acceptDefile = false;
			defileRight();
		}		
	});

	$('.slider .icon-chevron-right').click(function(){		
		if (acceptDefile){
			acceptDefile= false;
			defileLeft();
		}		
	});

	$('.slider span').mouseleave(function(){
		interval = setInterval(defileLeft, 3000);
	});

	$('.slider span').mouseenter(function(){
		clearInterval(interval);
	});

	function changeText(){
		val1 = $('.slider li:first img').attr('alt');
		$('.slider h1').text(val1);
	}

});