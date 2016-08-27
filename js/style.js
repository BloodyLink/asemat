$(document).ready(function(){
	$('.borde_redondeado').corner("15px");
	$('.div_item_menu_lateral').corner("5px");
	$('.div_mas').corner("5px");
	$('#div_beneficios_child').corner("15px bottom");
	$('#div_blank').corner("sharp 37px tl");
	$('#div_container_seccion2').corner("100px");
	$('#bm_1').corner("15px left");
	$('#bm_5').corner("15px right");
	$('.menu_despl').corner("15px bottom")

	animacion_menu_despl()
});


	function animacion_menu_despl(){
		$('#bm_1').mouseover(function(){
			$('#menu_despl_1').stop().animate({height: "122px"});
			return false;
		});
		$('#bm_1').mouseout(function(){
			$('#menu_despl_1').stop().animate({height: "0.1px"});
			return false;
		});
		$('#menu_despl_1').mouseover(function(){
			$(this).stop().animate({height: "122px"});
			return false;
		});
		$('#menu_despl_1').mouseout(function(){
			$(this).stop().animate({height: "0.1px"});
			return false;
		});
		$('#bm_2').mouseover(function(){
			$('#menu_despl_2').stop().animate({height: "204px"});
			return false;
		});
		$('#bm_2').mouseout(function(){
			$('#menu_despl_2').stop().animate({height: "0.1px"});
			return false;
		});
		$('#menu_despl_2').mouseover(function(){
			$(this).stop().animate({height: "204px"});
			return false;
		});
		$('#menu_despl_2').mouseout(function(){
			$(this).stop().animate({height: "0.1px"});
			return false;
		});
		$('#bm_3').mouseover(function(){
			$('#menu_despl_3').stop().animate({height: "81px"});
			return false;
		});
		$('#bm_3').mouseout(function(){
			$('#menu_despl_3').stop().animate({height: "0.1px"});
			return false;
		});
		$('#menu_despl_3').mouseover(function(){
			$(this).stop().animate({height: "81px"});
			return false;
		});
		$('#menu_despl_3').mouseout(function(){
			$(this).stop().animate({height: "0.1px"});
			return false;
		});
		$('#bm_4').mouseover(function(){
			$('#menu_despl_4').stop().animate({height: "122px"});
			return false;
		});
		$('#bm_4').mouseout(function(){
			$('#menu_despl_4').stop().animate({height: "0.1px"});
			return false;
		});
		$('#menu_despl_4').mouseover(function(){
			$(this).stop().animate({height: "122px"});
			return false;
		});
		$('#menu_despl_4').mouseout(function(){
			$(this).stop().animate({height: "0.1px"});
			return false;
		});
	}