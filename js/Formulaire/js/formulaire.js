// Controle totale

var email =false;
var nom = false;
var prenom =false;
var numtel = false;
var date_de_naissance = false;








// Controle des caractères


	//Uniquement des lettres + ' + espace + -
	function controleText (string) {
		console.log(string);
		var lettre = /^[A-Za-z'/ -]+$/;
		if (!lettre.test(string)) {
			console.log("controleText - FAUX")
			return false;
		} else {
			console.log("controleText - VRAI")
			return true;
		}
	}

	//Uniquement les lettres, les chiffres et ()@?!'-. "espace"
	function controleTextChiffre (string) {
		console.log(string);
		var lettre = /^[A-Za-z0-9()@?!'/ -/.]+$/;
		if (!lettre.test(string)) {
			console.log("controleTextChiffre - FAUX")
			return false;
		} else {
			console.log("controleTextChiffre - VRAI")
			return true;
		}
	}

	//Uniquement les chiffres

	function controleNumber (string) {
		console.log("controleNumber");
		var chiffre = /\d+/
		if (!chiffre.test(string.value)) {
			console.log("controleNumber - FAUX")
			return false;

		} else {
			console.log("controleNumber - VRAI")
			return true;
		}

	}

//Controle de la longueur

function controleLength (string,min,max) {
	if (string.length < min || string.length > max) {
		return false;
	} else {
		return true;
	}
}

//Controle de l'age

	function ageee(birthday) {
		birthday = new Date(birthday);
		return new Number((new Date().getTime() - birthday.getTime()) / 31536000000).toFixed(0);
	}







//Controle des champs

	//Controle du nom et prénom
		function nameControle (element) {
			var val = element.value;
			var min = 2;
			var max = 20;

			if (val == "") {
				document.getElementById("alert_"+element.name).innerHTML="Le champs "+element.name+" est vide !"
				element.style.border = "2px solid red";
				element.style.background = "#ffadad"
			}
			else if (controleText(val) == false) {
				document.getElementById("alert_"+element.name).innerHTML="Le champs "+element.name+" contient un caractère interdit !"
				element.style.border = "2px solid red";
				element.style.background = "#ffadad"
			} else if (controleLength(val,min,max) == false) {
				element.style.border = "2px solid red";
				element.style.background = "#ffadad"
				document.getElementById("alert_"+element.name).innerHTML="Le champs "+element.name+" doit contenir entre "+min+" et "+max+" caractères."
			} else {
				document.getElementById("alert_"+element.name).innerHTML = "";
				element.style.background = "white";
				element.style.border = "";
			}
		}

	//Controle du pseudo

	function pseudoControle (element) {
		var val = element.value;
		var min = 2;
		var max = 20;

		if (val == "") {
			document.getElementById("alert_"+element.name).innerHTML="Le champs "+element.name+" est vide !"
			element.style.border = "2px solid red";
			element.style.background = "#ffadad"
		}
		else if (controleTextChiffre(val) == false) {
			document.getElementById("alert_"+element.name).innerHTML="Le champs "+element.name+" contient un caractère interdit !"
			element.style.border = "2px solid red";
			element.style.background = "#ffadad"
		} else if (controleLength(val,min,max) == false) {
			element.style.border = "2px solid red";
			element.style.background = "#ffadad"
			document.getElementById("alert_"+element.name).innerHTML="Le champs "+element.name+" doit contenir entre "+min+" et "+max+" caractères."
		} else {
			document.getElementById("alert_"+element.name).innerHTML = "";
			element.style.background = "white";
			element.style.border = "";
		}
	}




	//Controle de l'age

	function ageControle(element){
		var bday = new Date(element.value);
		var age = ageee(bday);
		if (age < 13) {
			document.getElementById("alert_age").innerHTML="Vous n'avez pas l'age requis !";
		} else {
			document.getElementById("alert_age").innerHTML="";
			return true;
		}
	}

	//Controle de l'email

	function emailControle(element) {
		var mailCheck = /^[a-zA-Z0-9-._]+@[a-zA-Z0-9_-]+\.[a-z]+$/;
		if (!mailCheck.test(element.value)) {
			document.getElementById("alert_email").innerHTML="Adresse e-mail invalide !";
			element.style.border = "2px solid red";
			element.style.background = "#ffadad";
		} else {
			element.style.background = "white";
			element.style.border = "";

		}

	}

	//Controle du mot de passe

		//Conformité

		function mdpControle(element) {
			var maj = /[A-Z]/
			var min = /[a-z]/
			var chiffre = /[0-9]/
			if (!(maj.test(element.value) && min.test(element.value) && chiffre.test(element.value) && controleLength(element.value,8,25))) {
				document.getElementById("alert_motpasse").innerHTML="Vous devez avoir au moins une minuscule, une majuscule et un chiffre et doit faire entre 8 et 25 caractères.";
				element.style.border = "2px solid red";
				element.style.background = "#ffadad";
				document.getElementById("alert_motpasse").style.color="#ffadad";
			} else {
				document.getElementById("alert_motpasse").innerHTML="Ok !";
				element.style.background = "white";
				element.style.border = "";
				document.getElementById("alert_motpasse").style.color="green";
			}
		}


		//Correspondance

		function corrMdpControle(elementControle,elementTemoin) {
			if (elementControle.value !== elementTemoin.value && elementTemoin.value != "") {
				document.getElementById("alert_confirmmotpasse").innerHTML="Le mot de passe ne correspont pas !"
				elementControle.style.border = "2px solid red";
				elementControle.style.background = "#ffadad";
				return false;
			} else {
				document.getElementById("alert_confirmmotpasse").innerHTML="Ok !";
				elementControle.style.background = "white";
				elementControle.style.border = "";
				document.getElementById("alert_confirmmotpasse").style.color="green";
				return true;
			}
		}

	//Controle valeur présente

		function valeurPresente() {
			if (elementControle.value !== elementTemoin.value && elementTemoin.value != "") {
				document.getElementById("alert_confirmmotpasse").innerHTML="Le mot de passe ne correspont pas !"
				elementControle.style.border = "2px solid red";
				elementControle.style.background = "#ffadad";
				document.getElementById("alert_confirmmotpasse").style.color="#ffadad";
				return false;
			} else {
				document.getElementById("alert_confirmmotpasse").innerHTML="Ok !";
				elementControle.style.background = "white";
				elementControle.style.border = "";
				document.getElementById("alert_confirmmotpasse").style.color="green";
				return true;
			}
		}