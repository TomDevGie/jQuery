// jQuery(document).ready(function() {/*code*/});
// $(document).ready(function() {/*code*/});
// $(function() {/*code*/});

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
		$('.panel').slideUp(1000);
	});
	$('button:nth-child(2)').click(function(){

		$('.panel').slideDown(1000);
	});
	$('button:nth-child(3)').click(function(){
		$('.panel').slideToggle(1000);
	});
	

});

