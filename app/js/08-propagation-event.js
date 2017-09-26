// jQuery(document).ready(function() {/*code*/});
// $(document).ready(function() {/*code*/});
// $(function() {/*code*/});

//let setTimeout(function() {}, 10);

//let setTimeout($('.bleu').animate({'left':500}, 1000), 10);


$(function() {

	// $('li').click(function(){
	// 	alert($(this).html());
	// });	

	$('li').click(function(e){
		e.stopPropagation();
		alert($(this).html());
	});	
});

