var rellax = new Rellax ('.rellax')


//hace que se pause la animacion del section 8 cuando se pone el mouse arriba de los cuadrados
$(document).ready(function(){
	$(".imag > p").hover(function(){
		$(".section8").css({"animation-play-state": "paused"});
	}, 
	function(){
		$(".section8").css({"animation-play-state": "running"});
	});
});
