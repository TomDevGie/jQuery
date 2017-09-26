// jQuery(document).ready(function() {/*code*/});
// $(document).ready(function() {/*code*/});
// $(function() {/*code*/});

//let setTimeout(function() {}, 10);

//let setTimeout($('.bleu').animate({'left':500}, 1000), 10);


$(function() {
	/* syntaxe general
		$('selecteur-css').evenment(function(){
			$('selecteur-css').methodeJquery();
		});*/
	$('h1').css({'background':'red'});

	// $('button').click(function(){
	// 		$('h2').css({'background':'green'});
	// 	});

	
	$('button:first-child').click(function(){
		$('.bleu').animate({'left':0}, 10);
		alert('animation terminée');
	});

	$('button:nth-child(2)').click(function(){
		$('.bleu').animate({'left':500}, 1000,function(){alert('animation terminée');});
		
	});

	$('button:nth-child(3)').click(function(){
		//setTimeout(function() {$('.bleu').animate({'left':500}, 1000)}, Math.random()*3000);
		$('.bleu').delay(Math.random()*2000).animate({'left':500}, 1000);
		$('.rouge').delay(Math.random()*2000).animate({'left':500}, 1000);
		$('.vert').delay(Math.random()*2000).animate({'left':500}, 1000);
		$('.violet').delay(Math.random()*2000).animate({'left':500}, 1000);

	});

});

