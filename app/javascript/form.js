$(function(){
	// masquer toutes les icones de validation 
	$(".formulaire .validation").css({"display":"none"});

	// remplir les champs avec un text par default
	$(".formulaire [name]").each(function(){
		$(this).val($(this).attr('data-default'));
	});	

	// gestion du focus
	$(".formulaire [name]").focus(function(){
		if ($(this).val() == $(this).attr('data-default')){
			$(this).val("");
		}
	});

	// remettre le champ par defaut
	$(".formulaire [name]").blur(function(){
		if ($(this).val() == ""){
			$(this).val($(this).attr('data-default'));
			if ($(this).is('[required]')){
				changeIcon($(this), "icon-close", "icon-check");
			}
		}	else{
			if ($(this).is('[required]')){
				changeIcon($(this), "icon-check", "icon-close");
			}
		}
	});

	//fonction de changement d'icone
	function changeIcon(elem, icone1, icone2){
		$(elem).siblings(".validation").addClass(icone1).removeClass(icone2).css({"display":"block"});
	}

	$('.formulaire').submit(function(){
		var valid = true;
		// si un champs et mal remplis on passe a false
		$('formulaire [required]').each(function(){
			if ($(this).val() == $(this).attr('data-default')){
				valid = false;
				changeIcon($(this), "icon-close", "icon-check");
			}
		});
		return valid;

	});

});