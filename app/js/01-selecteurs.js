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

	$('button:first').click(function(){
		$('p').hide(1000);
	});
	$('button:nth-of-type(2)').click(function(){
		$('p').show(1000);
	});
	$('button:nth-of-type(3)').click(function(){
		$('*').hide(1000);
	});
	$('button:nth-of-type(4)').click(function(){
		$(this).hide(1000);
	});
	$('button:nth-of-type(5)').click(function(){
		$('li:first').hide(1000);
	});
	$('button:nth-of-type(6)').click(function(){
		$('li:first-child').hide(1000);
	});
	$('button:nth-of-type(7)').click(function(){
		$('[href="http://www.edugroupe.com"]').hide(1000);
	});
});
