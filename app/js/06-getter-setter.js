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
		$('#action').text('text ajouté avec methode text()');
	});

	$('button:nth-child(2)').click(function(){
		$('#action').html('<b>text ajouté avec methode html()</b>');
	});
	$('button:nth-child(3)').click(function(){
		$('#name').val('Mangin');
	});

	$('button:nth-child(4)').click(function(){
		let text = $('#action').text();
		console.log(text);
	});
	$('button:nth-child(5)').click(function(){
		let html = $('#action').html();
		console.log(html);		
	});
	$('button:nth-child(6)').click(function(){
		let val = $('#name').val();
		console.log(val);		
	});
});

