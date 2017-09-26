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
		$('.rouge').animate({'left':0}, 10);
		$('.vert').animate({'left':0}, 10);
		$('.violet').animate({'left':0}, 10);
	});
	$('button:nth-child(2)').click(function(){
		$('.bleu').animate({'left':500}, 1000);
	});
	$('button:nth-child(3)').click(function(){
		//setTimeout(function() {$('.bleu').animate({'left':500}, 1000)}, Math.random()*3000);
		$('.bleu').delay(Math.random()*2000).animate({'left':500}, 1000);
		$('.rouge').delay(Math.random()*2000).animate({'left':500}, 1000);
		$('.vert').delay(Math.random()*2000).animate({'left':500}, 1000);
		$('.violet').delay(Math.random()*2000).animate({'left':500}, 1000);

	});
	$('button:nth-child(4)').click(function(){
		$('.bleu').animate({
			'left': 500 ,
			'opacity': 0.5,
			'height':250,
			'width': 250
		},3000);
	});

	$('button:nth-child(5)').click(function(){
		$('.bleu').animate({
			'left': '+=100px' ,
			'opacity': 0.5,
			'height': '+=250px',
			'width': '-=10px'
		},3000);
		/*$('.rouge').animate({
			'left': 500 ,
			'opacity': 0.5,
			'height':250,
			'width': 250
		},3000);
		$('.vert').animate({
			'left': 500 ,
			'opacity': 0.5,
			'height':250,
			'width': 250
		},3000);
		$('.violet').animate({
			'left': 500 ,
			'opacity': 0.5,
			'height':250,
			'width': 250
		},3000);*/
	});
	$('button:nth-child(6)').click(function(){
		$('.bleu').animate({
			'height': 'toggle'
		},3000);
	});
	$('button:nth-child(7)').click(function(){
		let elem = $('.bleu');
		for(i=0; i<=2; i++){
			elem.animate({'left':500},1000)
			.slideUp(1000)
			.slideDown(1000)
			.animate({'left':0},1000);
		}
	});
	$('button:nth-child(8)').click(function(){
		let tab_color =['bleu','rouge','vert','violet'];	

		tab_color.forEach(function(color){
			let class_color = $('.'+color);

			for(i=0; i<=10; i++){
			class_color.animate({'left':Math.random()*750,'top': Math.random()*750},Math.random()*1000);			
		}
		class_color.animate({'left':0,'top':0},1000);		
		});	
		
		//autre methode
	/*	let elem = $('.bleu');
		let elem1 = $('.rouge');
		let elem2 = $('.vert');
		let elem3 = $('.violet');	*/

	/*	for(i=0; i<=10; i++){
			elem.animate({'left':Math.random()*750,'top': Math.random()*750},Math.random()*1000);
			elem1.animate({'left':Math.random()*750,'top': Math.random()*750},Math.random()*1000);
			elem2.animate({'left':Math.random()*750,'top': Math.random()*750},Math.random()*1000);
			elem3.animate({'left':Math.random()*750,'top': Math.random()*750},Math.random()*1000);
		}
		elem.animate({'left':0,'top':0},1000);
		elem1.animate({'left':0,'top':0},1000);
		elem2.animate({'left':0,'top':0},1000);
		elem3.animate({'left':0,'top':0},1000);*/

	});
	let posXcurseur;
	let posYcurseur;
	$(window).mousemove(function(e){
		let pos = $('button:nth-child(9)').position();
		posXcurseur = e.pageX;
		posYcurseur = e.pageY;
		if(posYcurseur == pos.top) {
			let newPos = pos.top+=10;
			$('button:nth-child(9)').animate({'top':newPos}, 400);
		}
	});
	
/*
	let posYcurseur = posY();
	let pos = $('button:nth-child(9)').position();

	if(posYcurseur == pos.top) {
		$('button:nth-child(8)').animate({'top':pos.top-10 = 400});
	}
*/
});

