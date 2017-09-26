// jQuery(document).ready(function() {/*code*/});
// $(document).ready(function() {/*code*/});
// $(function() {/*code*/});

//let setTimeout(function() {}, 10);

//let setTimeout($('.bleu').animate({'left':500}, 1000), 10);


$(function() {

	// $('li').click(function(){
	// 	alert($(this).html());
	// });	

	// $('ul').click(function(){
	// 	$(this).append("<li>dernier item ajouté avec jQuery</li>")
	// });
	$('ul').one('click',function(){		
		$(this).append("<li>dernier item ajouté avec jQuery</li>")
	});

	// $('li:nth-child(4)').click(function()){
	// 	alert("nimporte quoi!!!");
	// });
	$(document).on('click','li:nth-child(4)',function(){
		alert("nimporte quoi!!!");
	});

});

