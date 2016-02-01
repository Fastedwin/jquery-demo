// this is an anonymous function - you dont' call it, jquery does. 
// brackets = document onload. so anyting in the brackets run when document is ready

// $(function() {

	//do not use onclick, use ".on" - it allows you to do more

	//!!!!!$('#slide-button').on('click', function(){});


	//--------------------------------------

	// selection below - you are selecting the header
	// (.'bla') <- you are selecting the class of Blah
	// (.'bla>div') <- div inside bla
	// (#'bla')<-- this selects the ID of bla using the #

	// $('header').animate({state},time); <-the state needs an object (needs a list of values)
	//Json - encode object into string {left:"0em", top:"0em"}


	//!!!!!!     $('header').animate({left:"0em"},1000); 


// });



$(function() {

	//do not use onclick, use ".on" - it allows you to do more
	$('#slide-button').on('click', function(){

		$('header').animate({left:"0em"},500, function() {

			$('#slide-button>i').removeClass('fa-arrow-circle-right').addClass('fa-arrow-circle-left');
			}); 

		}); 


	$('#slide-button').on('click', function(){

		$('header').animate({left:"-17em"},500, function() {

			$('#slide-button>i').removeClass('fa-arrow-circle-right').addClass('fa-arrow-circle-left');
			}); 

		}); 


	});


// $(function() {

// 	//do not use onclick, use ".on" - it allows you to do more
// 	$('#slide-button').on('click', function(){

// 		$('header').animate({left:"-17em"},500, function() {

// 			$('#slide-button>i').removeClass('fa-arrow-circle-right').addClass('fa-arrow-circle-left');
// 			}); 

// 		}); 


// 	});








