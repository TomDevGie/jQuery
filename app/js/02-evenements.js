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
		$('#action').text('contenu modifié avec jQuery');
	});

	$('button:nth-child(2)').dblclick(function(){
		$('#action').text('<b> GG warrior, tu connais les régles !!</b>');
	});

	$('button:nth-child(3)').mouseenter(function(){
		$('#action').html('<b> ceci est le mouseenter !!</b>');
	});
	$('button:nth-child(4)').mouseleave(function(){
		$('#action').html('<b> ceci est le mouseleave !!</b>');
	});
	$('button:nth-child(5)').mousedown(function(){
		$('#action').html('<b> ceci est le mousedown !!</b>');
	});
	$('button:nth-child(6)').mouseup(function(){
		$('#action').html('<b> ceci est le mouseup !!</b>');
	});
	$('button:nth-child(7)').hover(function(){
		$('#action').html('<b>equivalent du mouseenter</b>');
	},function(){
		$('#action').html('<b>equivalent du mouseleave</b>');
	});
	$('[type="text"]').focus(function(){
		$(this).css({'background':'#ccc','border':'1px solid red'});
	});
	$('[type="text"]').blur(function(){
		$(this).css({'background':'#fff','border':'1px solid #ccc'});
	});

});

