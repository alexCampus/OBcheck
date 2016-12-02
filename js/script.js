function surligne(champ, erreur)
{
   if(erreur)
      champ.style.backgroundColor = "#fba";
   else
      champ.style.backgroundColor = "";
}


// Check lastname, firstname, street, city  ------------ 

function verifLettre(champ){
	var max = 255;
	var min = 2;
	var val = champ.value;
	regex = new RegExp("(^[a-zA-Z']{1})([a-zA-Z']+)(([\ \-])([a-zA-Z']{1})([a-zA-Z']*))?$","");
	
   if (val == "") {
		document.getElementById("alert_"+champ.name).innerHTML="Le champs "+champ.name+" est vide !";
		champ.className="form-control notok";
		return false;
	}
	else if (regex.test(val) == false) {
		document.getElementById("alert_"+champ.name).innerHTML="Le champs "+champ.name+" contient un caractère interdit !";
		champ.className="form-control notok";
		return false;
	} else if (controleLength(val,min,max) == false) {
		document.getElementById("alert_"+champ.name).innerHTML="Le champs "+champ.name+" doit contenir entre "+min+" et "+max+" caractères.";
		champ.className="form-control notok";
		return false;
	} else {
		document.getElementById("alert_"+champ.name).innerHTML = "";
		champ.className="form-control ok";
		return true;
	}
}

// Check Date + age

function verifDate(champ) {
	var min = 10;
	var max = 10;
	date = new Date(champ.value);
	dateMini = new Date();	
	var age = ageee(date);

	if(date > dateMini) {
		champ.className="form-control notok";
		document.getElementById("alert_"+champ.name).innerHTML= "Vous ne pouvez pas être né après aujourd'hui."; 
		return false;
	} else if (age < 13) {
		document.getElementById("alert_"+champ.name).innerHTML="Vous n'avez pas l'âge requis !";
		return false;
	} else if (date == "") {
		document.getElementById("alert_"+champ.name).innerHTML="Le champs "+champ.name+" est vide !";
		champ.className="form-control notok";
		return false;
	} else if (controleLength(date,min,max) == false) {
		document.getElementById("alert_"+champ.name).innerHTML="Le champs "+champ.name+" doit contenir "+max+" caractères.";
		champ.className="form-control notok";
		return false;
		} else {
		document.getElementById("alert_"+champ.name).innerHTML = "";
		champ.className="form-control ok";
		return true;
	}
}

function ageee(birthday) {
   birthday = new Date(birthday);
   return new Number((new Date().getTime() - birthday.getTime()) / 31536000000).toFixed(0);
}

// Check email

function verifEmail(champ){
	var regex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
	var val = champ.value;
	if (val == "") {
		document.getElementById("alert_"+champ.name).innerHTML="Le champs "+champ.name+" est vide !";
		champ.className="form-control notok";
		return false;
	}
	else if (regex.test(val) == false) {
		document.getElementById("alert_"+champ.name).innerHTML="Le champs "+champ.name+" contient un caractère interdit !";
		champ.className="form-control notok";
		return false;
	} else {
		document.getElementById("alert_"+champ.name).innerHTML = "";
		champ.className="form-control ok";
		return true;
	}
}

// Check telnum

function verifTelNumber(champ){
	var regex = /^[0-9]{10}$/;
	var val = champ.value;

	if (val == "") {
		document.getElementById("alert_"+champ.name).innerHTML="Le champs "+champ.name+" est vide !";
		champ.className="form-control notok";
	}
	else if (regex.test(val) == false) {
		document.getElementById("alert_"+champ.name).innerHTML="Le champs "+champ.name+" contient un caractère interdit !";
		champ.className="form-control notok";
	} else {
		document.getElementById("alert_"+champ.name).innerHTML = "";
		champ.className="form-control ok";
	}
}


// Check Mot de passe

// function verifPassword(champ){
// 	var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
// 	if(champ.value.length < 8 || !regex.test(champ.value))
//    {
//       champ.className="form-control notok";
//       document.getElementById('alert_' + champ.name).innerHTML=  " Veuillez saisir au minimum 8 charactères incluant au moins une minuscule, une majuscule et un chiffre ";     
//       return false;

//    }
//    else
//    {
//       champ.className="form-control ok";
//       return true;
//    }
// }

// function verifConfirmPassword(champ){
// 	var password= document.getElementById('pwd_inscription');	
// 	if(champ.value != password.value || !regex.test(champ.value))
//    {
//       champ.className="form-control notok";
//       document.getElementById('alert_' + champ.name).innerHTML= "Les mots de passes ne correspondent pas.";
//       return false;
//    }
//    else
//    {
//       champ.className="form-control ok";
//       return true;
//    }
// }


function verifPassword(element) {
			var maj = /[A-Z]/
			var min = /[a-z]/
			var chiffre = /[0-9]/
			if (!(maj.test(element.value) && min.test(element.value) && chiffre.test(element.value) && controleLength(element.value,8,25))) {
				document.getElementById("alert_password").innerHTML="Vous devez avoir au moins une minuscule, une majuscule et un chiffre et doit faire entre 8 et 25 caractères.";
				champ.className="form-control notok";
				document.getElementById("alert_password").className="error";
			} else {
				document.getElementById("alert_password").innerHTML="";
				champ.className="form-control ok";
			}
		}


//Correspondance

function corrMdpControle(elementControle,elementTemoin) {
	if (elementControle.value !== elementTemoin.value && elementTemoin.value != "") {
		document.getElementById("alert_pwd_confirmation").innerHTML="Le mot de passe ne correspont pas !"
		champ.className="form-control notok";
		document.getElementById("alert_pwd_confirmation").style.color="red";
		return false;
	} else if (elementTemoin.value == "") {
		return false;
	} else {
		document.getElementById("alert_pwd_confirmation").innerHTML="Ok !";
		champ.className="form-control ok";
		document.getElementById("alert_pwd_confirmation").style.color="green";
		return true;
	}
}

//liste déroulante

function verifListe(){
	if(document.getElementById('situation').value != 0){
		return true;
	}
	document.getElementById('errorListe').innerHTML= "Vous devez faire un choix marital.";  
	return false;
}

 // Verification générale

function verifForm(f) {
	var nomOk = verifNom(f.nom);
	var prenomOk = verifPrenom(f.prenom);
	var listeOk = verifListe(f.situation);
	var dateOk = verifDate(f.date);
	var radioOk = verifRadio(f.radio);
	var nbRueOk = verifNbRue(f.nbRue);
	var rueOk = verifRue(f.rue);
	var codePostalOk = verifCodePostal(f.codePostal);
	var villeOk = verifVille(f.ville);
	var telNumberOk = verifTelNumber(f.telephone);
	var mailOk = verifEmail(f.email);
	var checkBoxOk = verifCheckBox(f.box);
	var passwordOk = verifPassword(f.password);
	var confirmPassworOk = verifConfirmPassword(f.confirmPassword);


	if (nomOk && prenomOk && listeOk && dateOk && 
		radioOk && nbRueOk && rueOk && codePostalOk && villeOk && 
		telNumberOk && mailOk && checkBoxOk && passwordOk && confirmPassworOk ) {
		return true;
	}

	return false;
}


//Controle de la longueur

function controleLength (string,min,max) {
	if (string.length < min || string.length > max) {
		return false;
	} else {
		return true;
	}
}

//Controle pseudo

function verifPseudo (champ) {
	console.log(champ);
	var val = champ.value;
	var min = 2;
	var max = 20;
	var regex = /^[0-9a-zA-Z_-]+$/;

	if(regex.test(val) && controleLength(val,min,max)){
		document.getElementById("alert_"+champ.name).innerHTML = "";
		champ.className="form-control ok";
		return true;
	}

	if (val == "") {
		document.getElementById("alert_"+champ.name).innerHTML="Le champs "+champ.name+" est vide !";
	}
	else if (regex.test(val) == false) {
		document.getElementById("alert_"+champ.name).innerHTML="Le champs "+champ.name+" contient un caractère interdit !";
	} else if (controleLength(val,min,max) == false) {
		document.getElementById("alert_"+champ.name).innerHTML="Le champs "+champ.name+" doit contenir entre "+min+" et "+max+" caractères.";
	}

	champ.className="form-control notok";
	return false;

}



function verifPublication(champ) {
	var publication = champ.value;
	var min = 1;
	var max = 500;
	var regex = /\"/;

	if(publication=="") {
		document.getElementById ("alert_"+champ.name).innerHTML="Le champs "+champ.name+" est vide !";
		return false;
		
	} else if (regex.test(publication) == true) {
		document.getElementById("alert_"+champ.name).innerHTML="Le champs "+champ.name+" contient un caractère interdit !";
		champ.className="form-control notok";
		return false;
	} else if (controleLength(publication,min,max) == false) {
		document.getElementById("alert_"+champ.name).innerHTML="Le champs "+champ.name+" doit contenir entre "+min+" et "+max+" caractères.";
		champ.className="form-control notok";
		return false;
	} else {
		document.getElementById("alert_"+champ.name).innerHTML = "";
		champ.className="form-control ok";
		return true;
	}
}


function verifTag(champ) {
	var val = champ.value;
	var min = 2;
	var max = 500;
	var regex = /^#[a-zA-Z0-9\ \-_\']+$/

	if (val == "") {
		document.getElementById("alert_"+champ.name).innerHTML="Le champs "+champ.name+" est vide !";
		champ.className="form-control notok";
		return false;
	}
	else if (regex.test(val) == false) {
		document.getElementById("alert_"+champ.name).innerHTML="Le champs "+champ.name+" contient un caractère interdit !";
		champ.className="form-control notok";
		return false;
	} else if (controleLength(val,min,max) == false) {
		document.getElementById("alert_"+champ.name).innerHTML="Le champs "+champ.name+" doit contenir entre "+min+" et "+max+" caractères.";
		champ.className="form-control notok";
		return false;
	} else {
		document.getElementById("alert_"+champ.name).innerHTML = "";
		champ.className="form-control ok";
		return true;
	}
}

function verifSearchBar(champ) {
	var publication = champ.value;
	var min = 3;
	var max = 30;
	var regex = /\"/;

	if(publication=="") {
		document.getElementById ("alert_"+champ.name).innerHTML="Le champs "+champ.name+" est vide !";
		return false;
		
	} else if (regex.test(publication) == true) {
		document.getElementById("alert_"+champ.name).innerHTML="Le champs "+champ.name+" contient un caractère interdit !";
		champ.className="form-control notok";
		return false;
	} else if (controleLength(publication,min,max) == false) {
		document.getElementById("alert_"+champ.name).innerHTML="Le champs "+champ.name+" doit contenir entre "+min+" et "+max+" caractères.";
		champ.className="form-control notok";
		return false;
	} else {
		document.getElementById("alert_"+champ.name).innerHTML = "";
		champ.className="form-control ok";
		return true;
	}
}


//controle extension photo de profil
function check_picture(file){
	
	var gif="gif";
    var jpg="jpg";
    var jpeg="jpeg";
    var png="png";
    var photo=file.value;
    var namephoto=photo.split(".");

    document.getElementById("alert_photo").innerHTML="";

    if( namephoto[1]!=jpg){
    	document.getElementById("alert_photo").innerHTML="Le format de l'image n'est pas correcte !";
    	return false;
        
    }
    else{
        document.getElementById("alert_photo").innerHTML ="OK";
        file.className="form-control ok";
        return true;
	}
 }


 // Verification du form Connexion
 function verifFormConnexion(f) {
 	var pseudoOk = verifPseudo(f.pseudo_connexion);
	var passwordOk = verifPassword(f.pwd_connexion);
	
	if(pseudoOk && passwordOk) {
		return true;
	}
	return false;
}


//verification form inscription
function verifFormInscription(f) {	
	var pseudoOk = verifPseudo(f.pseudo);
	var emailOk = verifEmail(f.email);
	var dateOk = verifDate(f.birthday);
	var passwordOk = verifPassword(f.pwd_inscription);
	var confirmPasswordOk = verifConfirmPassword(pwd_confirmation);
	
	if (pseudoOk && emailOk && dateOk && passwordOk && confirmPasswordOk) {
		return true;
	}
	return false;
}

//verification form publication et Tag
function verifFormPublicationTag(f) {
	var publicationOK = verifPublication(f.comment);
	var tagOk = verifTag(f.tag);

	if (publicationOK && tagOk) {
		return true;
	}
	return false;
}

//verification form Publication
function verifFormPublication(f) {
	var publicationOK = verifPublication(f.comment2);

	if (publicationOK ) {
		return true;
	}
	return false;
}

//verification form Publication && Lettre
function verifFormPublicationLettre(f) {
	var destinataireOk = verifLettre(f.user);
	var commentOk = verifPublication(f.comment);
	if (destinataireOk && commentOk) {
		return true;
	}
	return false;
}

//verification form contact
function verifFormContact(f) {
	var nomOk = verifNom(f.nom);
	var prenomOk = verifPrenom(f.prenom);
	var emailOk = verifEmail(f.email);
	var publicationOK = verifPublication(f.message)

	if (nomOk && prenomOk && emailOk && publicationOK ) {
		return true;
	}
	return false;
}

//verification Create Event
function verifFormCreateEvent(f) {
	var intituleOk = verifLettre(f.intitule);
	var descriptionOk = verifPublication(f.description);
	var dateOk = verifDate(f.date);
	var lieuOk = verifLettre(f.lieu);
	var tagOk = verifTag(f.tag);

	if (intituleOk && descriptionOk && dateOk && lieuOk && tagOk) {
		return true;
	}
	return false;
}

//verification form Email
function verifFormEmail(f) {
	var emailOk = verifEmail(f.email);
	if (emailOk) {
		return true;
	}
	return false;
}

//verifiction form user profil
function verifFormInfoUser(f){
	var pseudoOk = verifPseudo(f.pseudo);
	var nomOk = verifNom(f.nom);
	var prenomOk = verifPrenom(f.prenom);
	var emailOk = verifEmail(f.email);
	var dateOk = verifDate(f.date);
	var villeOk = verifVille(f.city);
	var publicationOK = verifPublication(f.presentation)

	if (pseudoOk && nomOk && prenomOk && emailOk && dateOk && villeOk && publicationOK){
		return true;
	}
	return false;
}