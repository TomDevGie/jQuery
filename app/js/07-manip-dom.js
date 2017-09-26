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

	/*$('button:first-child').click(function(){
		$('ul').before('<p>balise ajouté avec methode before()</p>');
	});

	$('button:nth-child(2)').click(function(){
		$('ul').after('<p>balise ajouté avec methode after()</p>');
	});

	$('button:nth-child(3)').click(function(){
		$('ul').prepend('<li>balise ajouté avec methode prepend()</li>');
	});

	$('button:nth-child(4)').click(function(){
		$('ul').append('<li>balise ajouté avec methode append()</li>');

	});*/

	$('button:nth-child(3)').click(function(){
		let valprec = $('li:first-child').text();
		let unite = valprec.substr(-1);
		if (unite > 1 ){
			$('ul').prepend('<li>item '+(parseInt(unite)-1)+'</li>');
		}else{
			alert('item plus du tout !!! ');
		}
		/*$('ul').prepend('<li>balise ajouté avec methode prepend()</li>');*/
	});

	$('button:nth-child(4)').click(function(){
		let valprec = $('li:last-child').text();
		let unite = valprec.substr(-1);
		if (unite == 0){
			unite = valprec.substr(-2);
		}

		if (unite < 20 ){
			$('ul').append('<li>item '+(parseInt(unite)+1)+'</li>');
		}else{
			alert('item toujours !!! ');
		}
		/*$('ul').append('<li>balise ajouté avec methode append()</li>');*/
	});
});

