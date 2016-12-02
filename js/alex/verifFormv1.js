function surligne(champ, erreur)
{
   if(erreur)
      champ.style.backgroundColor = "#fba";
   else
      champ.style.backgroundColor = "";
}

function verifNom(champ)
{		
	regex = new RegExp("(^[a-zA-Z']{1})([a-zA-Z']+)(([\ \-])([a-zA-Z']{1})([a-zA-Z']*))?$","");
   if(champ.value.length < 2 || !regex.test(champ.value))
   {
      surligne(champ, true);      
      document.getElementById('errorNom').innerHTML= "Votre " + champ.name + " est mal rempli.";      
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }
}

function verifPrenom(champ)
{		
	regex = new RegExp("(^[a-zA-Z']{1})([a-zA-Z']+)(([\ \-])([a-zA-Z']{1})([a-zA-Z']*))?$","");
   if(champ.value.length < 2 || !regex.test(champ.value))
   {
      surligne(champ, true);
      document.getElementById('errorPrenom').innerHTML= "Votre " + champ.name + " est mal rempli.";
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }
}

function verifVille(champ)
{		
	regex = new RegExp("(^[a-zA-Z']{1})([a-zA-Z']+)(([\ \-])([a-zA-Z']{1})([a-zA-Z']*))?$","");
   if(champ.value.length < 2 || !regex.test(champ.value))
   {
      surligne(champ, true);      
      document.getElementById('errorVille').innerHTML= "Votre " + champ.name + " est mal rempli.";
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }
}

function verifRue(champ) {
	regex = new RegExp("(^[a-zA-Z']{1})([a-zA-Z']+)(([\ \-'])([a-zA-Z']{1})([a-zA-Z']*))?$","");
   if(champ.value.length < 2 || !regex.test(champ.value))
   {
      surligne(champ, true);
      document.getElementById('errorRue').innerHTML= "Votre " + champ.name + " est mal rempli."; 
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }
}

function verifDate(champ) {	
	date = new Date(champ.value);
	dateMini = new Date("2010-11-07");	
	if(date > dateMini)
   {
      surligne(champ, true);
      document.getElementById('errorDate').innerHTML= "Votre " + champ.name + " est mal rempli."; 
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }
}

function verifEmail(champ)
{
	var regex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
   if(!regex.test(champ.value))
   {
      surligne(champ, true);
      document.getElementById('errorEmail').innerHTML= "Votre " + champ.name + " est mal rempli."; 
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }
}

function verifTelNumber(champ)
{	
	var regex = /^[0-9]*$/;
   if(champ.value.length < 10 || champ.value.length > 10 || !regex.test(champ.value))
   {
      surligne(champ, true);
      document.getElementById('errorNbTelephone').innerHTML= "Votre " + champ.name + " est mal rempli."; 
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }
}

function verifCodePostal(champ)
{
	var regex = /^[0-9]*$/;
	if(champ.value.length > 5 || !regex.test(champ.value))
   {
      	surligne(champ, true);
    	document.getElementById('errorCodePostal').innerHTML= "Votre " + champ.name + " est mal rempli.";  
      	return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }
}

function verifNbRue(champ)
{
	var regex = /^[0-9]*$/;
	if(champ.value.length > 5 || !regex.test(champ.value))
   {
      	surligne(champ, true); 
    	document.getElementById('errorNbRue').innerHTML= "Votre " + champ.name + " est mal rempli."; 
      	return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }
}

function verifPassword(champ)
{
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

function verifConfirmPassword(champ)
{	
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

//Checkbox
function verifCheckBox()
{		
	var i = 0;
	nb = 0
		
	for (i=0;i< document.getElementsByClassName("box").length;i++)
	{
		if(document.getElementsByClassName("box").item(i).checked)
		{
			nb++;			
		}
	}
	if (nb <= 2) {
		document.getElementById('errorCheckBox').innerHTML= "Vous devez choisir 3 checkBox!!";
      	return false;
	} 
	return true; 
}

// bouton radio
function verifRadio()
{		
	var i = 0;
	nb = 0
		
	for (i=0;i< document.getElementsByName("radio").length;i++)
	{
		if(document.getElementsByName("radio").item(i).checked)
		{
			nb++;			
		}
	}
	if (nb <= 0) {
		document.getElementById('errorRadio').innerHTML= "Vous devez choisir un nombre d'enfants."; 
		return false;
	}	
	return true;
}

//liste déroulante
function verifListe()   
 {  
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