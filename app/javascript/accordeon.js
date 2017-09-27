$(function(){
	$('.accordeon h1').click(function(){
		if(!$(this).hasClass('active')){
			// retirer la class active sur tout les h1
			$('.accordeon h1').removeClass('active');
			// add class active sur this
			$(this).addClass('active');
			//fermer tout les p
			$('.accordeon p').slideUp();
			// ouvrir le p juste apres this
			$(this).next().slideDown();
			// modificataion des icones remettre icon-chevron-right
			$('.accordeon h1').find('span').addClass('icon-chevron-right').removeClass('icon-chevron-down');
  			// on toggle la classe icon-chevron-right contre icon-chevron-down
			$(this).find("span").toggleClass("icon-chevron-right icon-chevron-down");
		}
	});
});