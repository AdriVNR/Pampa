$(function(){




	/* Grille Masonry*/

	$('.grid').masonry({
	  itemSelector: '.grid-item',
	  columnWidth: '.grid-sizer',
	  percentPosition: true
	});

	/* Slider */

	$('.carousel').carousel({
		interval: 2000
	});

	/* Menu mobile */

	$('.fa-bars').on('click', function(){
		$('#headermobile').fadeIn('slow');
	});
	$('#headermobile i').on('click', function(){
		$(this).parent('#headermobile').fadeOut('slow');
	});
	/* Lien */

	$('#encours').on('click', function(e){
		e.preventDefault();
		$('.encours').slideDown('slow');
	});
	$('.encours').on('click', function(){
		$(this).slideUp('slow');
	});

	/* Formulaire */
	$('#newsletter').on('submit', function(){	

		if($('#firstname').val().length < 5){
			$('.error').slideDown('slow');
			return false;
			
		} else if($('#lastname').val().length < 5){
			$('.error').slideDown('slow');
			return false;
			
		} else if($('#email').val().length < 5){
			$('.error').slideDown('slow');
			return false;
			
		}

		return true;

	});


	/* Chat */

	$('.outside').on('click', function(){
		$('.inside').slideToggle('slow');
	});

});