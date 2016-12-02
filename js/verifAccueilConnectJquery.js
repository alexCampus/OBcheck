$(function() {

	var workClassOk = function($that) {
		$that.removeClass('notok').addClass('ok');
	};

	var workClassError = function($that) {
		$that.removeClass('ok').addClass('notok');
	};



	
	var checkComment = function($that) {
		
		var $regex = new RegExp("\"");
		var min = 1;
		var max = 500;
		var publication = $that.val();
 
		var name = $($that).attr("name");		
		
		var boolP = $($that).next().hasClass('error'); 		

		//Test si le p existe pour savoir si il le crée

		if (boolP == false) {
			var divError = $('<p></p>');
			$($that).after(divError);
			divError.addClass('error');
		}

		//Défini le p pour le message d'erreur
		var findP = $($that).next();


		//Vérification du formulaire

		if (!$regex.test(publication) && controleLength(publication, min,max)) {
			$(findP).text("");
			workClassOk($that);				
			return true;
		}

		if (publication == "") {			
			$(findP).text("Le champ " + name + " est vide.");
			workClassError($that);	

		} else if ($regex.test(publication) == true) {
			$(findP).text("Le champ " + name + " contient un caractère interdit");
			workClassError($that);		

		} else if ( controleLength(publication, min,max) == false) {
			$(findP).text("Le champ " + name + " doit contenir entre " + min + " et " + max + " caractères.");
			workClassError($that);	

		}
		return false;

	};

	//Recupère les TextArea
	var $comment = $('textarea');
	
	


	//Action du OnBlur
	
	$comment.blur(function(){
		checkComment($(this));
		
	});


	//test du submit
	$('form').submit(function(){
		$input = $(this).find('textarea');
		$test = checkComment($input);
		
		if ($test) {			
			return true;
		} 
		return false;		
	});
})


