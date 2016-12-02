alert("Je marche !");


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
	}
	else if (regex.test(val) == false) {
		document.getElementById("alert_"+champ.name).innerHTML="Le champs "+champ.name+" contient un caractère interdit !";
		champ.className="form-control notok";
	} else if (controleLength(val,min,max) == false) {
		document.getElementById("alert_"+champ.name).innerHTML="Le champs "+champ.name+" doit contenir entre "+min+" et "+max+" caractères.";
		champ.className="form-control notok";
	} else {
		document.getElementById("alert_"+champ.name).innerHTML = "";
		champ.className="form-control ok";
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
	} else if (age < 13) {
		document.getElementById("alert_"+champ.name).innerHTML="Vous n'avez pas l'âge requis !";
	} else if (date == "") {
		document.getElementById("alert_"+champ.name).innerHTML="Le champs "+champ.name+" est vide !";
		champ.className="form-control notok";
	} else if (controleLength(date,min,max) == false) {
		document.getElementById("alert_"+champ.name).innerHTML="Le champs "+champ.name+" doit contenir "+max+" caractères.";
		champ.className="form-control notok";
	} else {
		document.getElementById("alert_"+champ.name).innerHTML = "";
		champ.className="form-control ok";
	}
}

function ageee(birthday) {
   birthday = new Date(birthday);
   return new Number((new Date().getTime() - birthday.getTime()) / 31536000000).toFixed(0);
}

// Check email

function verifEmail(champ){
	var regex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
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

// Check telnum

function verifTelNumber(champ){
	var regex = /^[0-9]{10}$/;

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

function verifPassword(champ){
	var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
	if(champ.value.length < 8 || !regex.test(champ.value))
   {
      surligne(champ, true); 
      document.getElementById('errorPassword').innerHTML= "Votre " + champ.name + " est mal rempli.";     
      return false;

   }
   else
   {
      surligne(champ, false);
      return true;
   }
}

function verifConfirmPassword(champ){
	var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
	var password= document.getElementById('pwd');	
	if(champ.value != password.value || !regex.test(champ.value))
   {
      surligne(champ, true);
      document.getElementById('errorPasswordConfirm').innerHTML= "Votre " + champ.name + " est mal rempli.";
      return false;
   }
   else
   {
      surligne(champ, false);
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
	var val = champ.value;
	var min = 2;
	var max = 20;
	var regex = /^[0-9a-zA-Z_-]+$/;

	if (val == "") {
		document.getElementById("alert_"+champ.name).innerHTML="Le champs "+champ.name+" est vide !";
		champ.className="form-control notok";
	}
	else if (regex.test(val) == false) {
		document.getElementById("alert_"+champ.name).innerHTML="Le champs "+champ.name+" contient un caractère interdit !";
		champ.className="form-control notok";
	} else if (controleLength(val,min,max) == false) {
		document.getElementById("alert_"+champ.name).innerHTML="Le champs "+champ.name+" doit contenir entre "+min+" et "+max+" caractères.";
		champ.className="form-control notok";
	} else {
		document.getElementById("alert_"+champ.name).innerHTML = "";
		champ.className="form-control ok";
	}
}



function verifPublication(champ) {
	var publication = champ.value;
	var min = 0;
	var max = 500;
	var regex = /\"/;

	if(publication=="") {
		document.getElementById ("alert_"+champ.name).innerHTML="Le champs "+champ.name+" est vide !";
		champ.className="form-control notok";
	}
	else if (regex.test(publication) == true) {
		document.getElementById ("alert_"+champ.name).innerHTML="Le champs "+champ.name+" contient un caractère interdit!";
		champ.className="form-control notok";
	} else if (controleLength )
}


function verifTag(champ) {
	var val = champ.value;
	var regex = /^#[a-zA-Z0-9\ -_\']+$/

	if (val == "") {
		document.getElementById("alert_"+champ.name).innerHTML="Le champs "+champ.name+" est vide !";
		champ.className="form-control notok";
	}
	else if (regex.test(val) == false) {
		document.getElementById("alert_"+champ.name).innerHTML="Le champs "+champ.name+" contient un caractère interdit !";
		champ.className="form-control notok";
	} else if (controleLength(val,min,max) == false) {
		document.getElementById("alert_"+champ.name).innerHTML="Le champs "+champ.name+" doit contenir entre "+min+" et "+max+" caractères.";
		champ.className="form-control notok";
	} else {
		document.getElementById("alert_"+champ.name).innerHTML = "";
		champ.className="form-control ok";
	}
}

function verifSearchBar() {

}