console.log("open simplex");

// recuperation DOM

var form = document.querySelector("form");

// objects prototype
var maxZ = {
        x1 :0, x2 :0, x3 :0, x4 :0, x5 :0,
	afficher: function (){
		var valeurs = "maxZ = ";
		var plus = false; // gestion de l'arrivée du signe +
		if(this.x1 > 0){
                        valeurs += ""+this.x1+" X1";plus = true;
		}
		if(this.x2 > 0){
			if(plus)	
				valeurs += " + ";
			else
				plus = true;
                        valeurs += ""+this.x2+" X2";
		}
		if(this.x3 > 0){
                        if(plus)
                                valeurs += " + ";
			else
				plus = true;
			valeurs += ""+this.x3+" X3";
		}
		if(this.x4 > 0){
                        if(plus)
                                valeurs += " + ";
			else
				plus = true;
                        valeurs += ""+this.x4+" X4";
		}
		if(this.x5 > 0){
                        if(plus)
                                valeurs += " + ";
		        valeurs += ""+this.x5+" X5";
		}
		return valeurs;
	}
};
var c1 = {
        x1 :0, x2 :0, x3 :0, x4 :0, x5 :0, x6 :0, ecart :0,
	afficher: function(){
	return this.x1+" X1 + "+this.x2+" X2 + "+this.x3+" X3 + "+this.x4+" X4 + "+this.x5+" X5 <= "+this.x6;
	}
};

var c2 = Object.create(c1);

// execution
function calcul(){

	// affichage énoncé et résultat
	var text = '<p><label>'+maxZ.afficher()+'</p></label>';
	document.getElementById("reponse").innerHTML = text;


	// ***************creation matrice*****************************

	var matrice = new Array(); 
	for(var i=0; i<Number(contraintes.value)+1;i++)
		matrice[i] = new Array();

	// ***********init*********************************************

	for(var i=0; i<Number(contraintes.value)+1;i++)
		for(var j=0; j<=somme; j++)
			matrice[i][j] = 0;	

	// **********remplissage de la matrice**************************

	// fonction max
	matrice[contraintes.value][0] = form.elements.x1max.value; // maxZ.x1
	matrice[contraintes.value][1] = form.elements.x2max.value; // maxZ.x2
	// maxZ.x2 = form.elements.x2max.value;

	// 2 contraintes et 2 variables  au minimum
	matrice[0][0] = form.elements.x1c1.value; // c1x1
	matrice[0][1] = form.elements.x2c1.value; // c1x2
	matrice[0][somme] = form.elements.x6c1.value; // maxcontraintec1
	matrice[1][0] = form.elements.x1c2.value; // c2x1
	matrice[1][1] = form.elements.x2c2.value; // c2x2
	matrice[1][somme] = form.elements.x6c2.value; // maxcontraintec2

	// variables d'écart
	for (var i=0; i<contraintes.value; i++)
		matrice[i][Number(variables.value)+i] = 1;

	// *****************2 variables******************************************* 
	if(T) console.log("2 variables"); // debug

	// 3 contraintes
	if(contraintes.value > 2){
		matrice[2][0] = form.elements.x1c3.value; // c3x1
		matrice[2][1] = form.elements.x2c3.value; // c3x2
		matrice[2][somme] = form.elements.x6c3.value; // maxcontraintec3
	}
	// 4 contraintes	
	if(contraintes.value > 3){ 
		matrice[3][0] = form.elements.x1c4.value; // c4x1
		matrice[3][1] = form.elements.x2c4.value; // c4x2
		matrice[3][somme] = form.elements.x6c4.value; // maxcontraintec4
	}
	// 5 contraintes	
	if(contraintes.value > 4){ 
		matrice[4][0] = form.elements.x1c5.value; // c5x1
		matrice[4][1] = form.elements.x2c5.value; // c5x2
		matrice[4][somme] = form.elements.x6c5.value; // maxcontraintec5
	}

	// ************************3 variables*****************************************

	if(variables.value > 2){  
		if(T) console.log("3 variables"); // debug
		matrice[contraintes.value][2] = form.elements.x3max.value; // maxZ.x3
		matrice[0][2] = form.elements.x3c1.value; // c1x3
		matrice[1][2] = form.elements.x3c2.value; // c2x3
		if(contraintes.value > 2) 
			matrice[2][2] = form.elements.x3c3.value; // c3x3
		if(contraintes.value > 3) 
			matrice[3][2] = form.elements.x3c4.value; // c4x3
		if(contraintes.value > 4) 
			matrice[4][2] = form.elements.x3c5.value; // c5x3
	}

	// ************************4 variables*****************************************

	if(variables.value > 3){ 
		if(T) console.log("4 variables"); // debug
		matrice[contraintes.value][3] = form.elements.x4max.value; // maxZ.x4
		matrice[0][3] = form.elements.x4c1.value; // c1x4
		matrice[1][3] = form.elements.x4c2.value; // c2x4
		if(contraintes.value > 2) 
			matrice[2][3] = form.elements.x4c3.value; // c3x4
		if(contraintes.value > 3) 
			matrice[3][3] = form.elements.x4c4.value; // c4x4
		if(contraintes.value > 4) 
			matrice[4][3] = form.elements.x4c5.value; // c5x4
	}

	// ************************5 variables*****************************************

	if(variables.value > 4){   
		if(T) console.log("5 variables"); // debug
		matrice[0][4] = form.elements.x5c1.value; // c1x5
		matrice[1][4] = form.elements.x5c2.value; // c2x5
		matrice[contraintes.value][4] = form.elements.x5max.value; // maxZ.x5 
		if(contraintes.value > 2) 
			matrice[2][4] = form.elements.x5c3.value; // c3x5
		if(contraintes.value > 3) 
			matrice[3][4] = form.elements.x5c4.value; // c4x5
		if(contraintes.value > 4) 
			matrice[4][4] = form.elements.x5c5.value; // c5x5
	}
	
	// *****************************determiner le pivot*************

	matrice = pivot(matrice);
//	if(T) console.log("calcul : "+ matrice[0][0]); // debug

	
	var text = '<p><label>'+maxZ.afficher()+'</p></label>';
	document.getElementById("reponse").innerHTML = text;
	
	
//	if(T) console.table(matrice); // debug

	// var text = '<p><label>x1 = </label><label id="x1"></label></br><label>x2 = </label><label id="x2"></label></br><label>x3 = </label><label id="x3"></label></br><label>x4 = </label><label id="x4"></label></br><label>x5 = </label><label id="x5"></label></br></br><label>Ooptimum est de : </label><label id="optimum"></label></p>';	
	// algo
	
};

function pivot(matrice){
	
//	if(T) console.log("pivot : "+ matrice[0][0]); // debug
	// trouver le pivot
	var max = matrice[contraintes.value][0];
	var imax = 0;
	for(var i=1; i<somme; i++)
		if(matrice[contraintes.value][i] > max){
			max = matrice[contraintes.value][i];
			imax = i;
		}
	var min = matrice[0][somme];
	var imin = 0;
	for(var i=1; i<contraintes.value; i++)
		if(matrice[i][somme] < min){
			min = matrice[i][somme];
			imin = i;
		}
	var pivot = matrice[imin][imax];		
	if(T) console.log(" max : "+ max + " min : "+ min + " pivot : "+ pivot); // debug
	
	return matrice;
}
// saisies variables préléminaires

var T = true;   // traces debug booléen
var contraintes;
var variables;
var somme;
function clic(){ 
	contraintes = document.getElementById("contraintes");
	variables = document.getElementById("variables");
	somme = Number(variables.value)+Number(contraintes.value);
	if(T) console.log("contraintes : "+contraintes.value+" "+"variables : "+variables.value+" somme : "+somme); //debug
	// construction du tableau HTML
	// ligne 1 
	var text = '<table id="tableau"><tr><td></td><th>x<sub>1</sub></th><th>x<sub>2</sub></th>';
	if(variables.value > 2){	
		text += '<th>x<sub>3</sub></th>';
		if(variables.value > 3){
			text += '<th>x<sub>4</sub></th>';
			if(variables.value > 4)	
				text += '<th>x<sub>5</sub></th>';
		}
	}
	text += '<th></th><th></th></tr>';
	// ligne 2		
	text += '<tr><th>max z = </th><td><input type="number" min=0 max=100 value=0 name="x1max" onclick="calcul();" /></td><td><input type="number" min=0 max=100 value=0 name="x2max" onclick="calcul();" /></td>';

	if(variables.value > 2){        
        	text += '<td><input type="number" min=0 max=100 value=0 name="x3max" onclick="calcul();" /></td>';
       		if(variables.value > 3){
                	text += '<td><input type="number" min=0 max=100 value=0 name="x4max" onclick="calcul();" /></td>';
                        if(variables.value > 4) 
                		text += '<td><input type="number" min=0 max=100 value=0 name="x5max" onclick="calcul();" /></td>';
                }
        }
	text += '<td></td><td></td></tr>';
	// ligne 3
	text += '<tr><th>Contrainte 1</th><td><input type="number" min=0 max=100 value=0 name="x1c1" onclick="calcul();" /></td><td><input type="number" min=0 max=100 value=0 name="x2c1" onclick="calcul();" /></td>';
	if(variables.value > 2){        
                text += '<td><input type="number" min=0 max=100 value=0 name="x3c1" onclick="calcul();" /></td>';
                if(variables.value > 3){
                        text += '<td><input type="number" min=0 max=100 value=0 name="x4c1" onclick="calcul();" /></td>';
                        if(variables.value > 4) 
                                text += '<td><input type="number" min=0 max=100 value=0 name="x5c1" onclick="calcul();" /></td>';
                }
        }
        text += '<td>&lt=</td><td><input type="number" min=0 max=1000 value=0 name="x6c1" onclick="calcul();" /td></tr>';
        // ligne 4  
	text += '<tr><th>Contrainte 2</th><td><input type="number" min=0 max=100 value=0 name="x1c2" onclick="calcul();" /></td><td><input type="number" min=0 max=100 value=0 name="x2c2" onclick="calcul();" /></td>';
	if(variables.value > 2){        
                text += '<td><input type="number" min=0 max=100 value=0 name="x3c2" onclick="calcul();" /></td>';
                if(variables.value > 3){
                        text += '<td><input type="number" min=0 max=100 value=0 name="x4c2" onclick="calcul();" /></td>';
                        if(variables.value > 4) 
                                text += '<td><input type="number" min=0 max=100 value=0 name="x5c2" onclick="calcul();" /></td>';
                }
        }
        text += '<td>&lt=</td><td><input type="number" min=0 max=1000 value=0 name="x6c2" onclick="calcul();"/td></tr>';
        // ligne 5 
	if(contraintes.value > 2){
		text += '<tr><th>Contrainte 3</th><td><input type="number" min=0 max=100 value=0 name="x1c3" onclick="calcul();" /></td><td><input type="number" min=0 max=100 value=0 name="x2c3" onclick="calcul();" /></td>';
        if(variables.value > 2){ 
                text += '<td><input type="number" min=0 max=100 value=0 name="x3c3" onclick="calcul();" /></td>';
                if(variables.value > 3){
                        text += '<td><input type="number" min=0 max=100 value=0 name="x4c3" onclick="calcul();"/></td>';
                        if(variables.value > 4)
                                text += '<td><input type="number" min=0 max=100 value=0 name="x5c3" onclick="calcul();" /></td>';
                }
        }
        text += '<td>&lt=</td><td><input type="number" min=0 max=1000 value=0 name="x6c3" onclick="calcul();"/td></tr>';
	}
        // ligne 6
	if(contraintes.value > 3){
                text += '<tr><th>Contrainte 4</th><td><input type="number" min=0 max=100 value=0 name="x1c4" onclick="calcul();"/></td><td><input type="number" min=0 max=100 value=0 name="x2c4" onclick="calcul();"/></td>';
        if(variables.value > 2){
                text += '<td><input type="number" min=0 max=100 value=0 name="x3c4" onclick="calcul();" /></td>';
                if(variables.value > 3){
                        text += '<td><input type="number" min=0 max=100 value=0 name="x4c4" onclick="calcul();" /></td>';
                        if(variables.value > 4)
                                text += '<td><input type="number" min=0 max=100 value=0 name="x5c4" onclick="calcul();" /></td>';
                }
        }
        text += '<td>&lt=</td><td><input type="number" min=0 max=1000 value=0 name="x6c4" onclick="calcul();"/td></tr>';
        }
        // ligne 7 
	if(contraintes.value > 4){ 
                text += '<tr><th>Contrainte 5</th><td><input type="number" min=0 max=100 value=0 name="x1c5" onclick="calcul();" /></td><td><input type="number" min=0 max=100 value=0 name="x2c5" onclick="calcul();" /></td>';
        if(variables.value > 2){
                text += '<td><input type="number" min=0 max=100 value=0 name="x3c5" onclick="calcul();" /></td>';
                if(variables.value > 3){
                        text += '<td><input type="number" min=0 max=100 value=0 name="x4c5" onclick="calcul();" /></td>';
                        if(variables.value > 4)
                                text += '<td><input type="number" min=0 max=100 value=0 name="x5c5" onclick="calcul();" /></td>';
                }
        }
        text += '<td>&lt=</td><td><input type="number" min=0 max=1000 value=0 name="x6c5" onclick="calcul();" /td></tr>';
        }
	text += '</table></br>';
	document.getElementById("injecter").innerHTML = text;
	var text = '<p><label>'+maxZ.afficher()+'</p></label>';
	document.getElementById("reponse").innerHTML = text;
}
// boutons
var boutonVariables = document.getElementById("variables");
boutonVariables.addEventListener("click", clic);
var boutonContraintes = document.getElementById("contraintes");
boutonContraintes.addEventListener("click", clic);
var boutonCalculer = document.getElementById("calculer");
boutonCalculer.addEventListener("click", calcul);

