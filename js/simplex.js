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
	var T = true; // traces debug booléen
	//affichage énoncé et résultat
	var text = '<p><label>'+maxZ.afficher()+'</p></label>';
	document.getElementById("reponse").innerHTML = text;
	//création de la matrice
	var somme = Number(variables.value)+Number(contraintes.value);
	if(T) console.log(somme);
	var matrice = new Array(); 
	for(var i=0; i<contraintes.value;i++)
		matrice[i] = new Array();
	
	// **********remplissage de la matrice**************************
	// 2 variables au minimum
	// fonction max
	maxZ.x1 = form.elements.x1max.value; 
	maxZ.x2 = form.elements.x2max.value;

	switch (variables.value) {
	// 2 variables au minimum
	case "2" : if(T) console.log("2 variables");

	// 2 contraintes au minimum
	matrice[0][0] = form.elements.x1c1.value; // c1x1
	matrice[0][1] = form.elements.x2c1.value; // c1x2
	matrice[0][2] = 1; // variable d'écart 1
	matrice[0][3] = 0;
	matrice[0][somme] = form.elements.x6c1.value; // maxcontraintec1
	matrice[1][0] = form.elements.x1c2.value; // c2x1
	matrice[1][1] = form.elements.x2c2.value; // c2x2
	matrice[1][2] = 0; 
	matrice[1][3] = 1; // variable d'écart 2
	matrice[1][somme] = form.elements.x6c2.value; // maxcontraintec2
	// 3 contraintes
	if(contraintes.value > 2){
		matrice[2][0] = form.elements.x1c3.value; // c3x1
		matrice[2][1] = form.elements.x2c3.value; // c3x2
		matrice[2][2] = 0; 
		matrice[2][3] = 0; 
		matrice[2][4] = 1; // variable d'écart 3 
		matrice[0][4] = 0; 
		matrice[1][4] = 0; 
		matrice[2][somme] = form.elements.x6c3.value; // maxcontraintec3
	}
	// 4 contraintes	
	if(contraintes.value > 3){ 
		matrice[3][0] = form.elements.x1c4.value; // c4x1
		matrice[3][1] = form.elements.x2c4.value; // c4x2
		matrice[3][2] = 0; 
		matrice[3][3] = 0; 
		matrice[3][4] = 0; 
		matrice[3][5] = 1; // variable d'écart 3 
		matrice[0][5] = 0; 
		matrice[1][5] = 0; 
		matrice[2][5] = 0; 
		matrice[3][somme] = form.elements.x6c4.value; // maxcontraintec4
	}
	// 5 contraintes	
	if(contraintes.value > 4){ 
		matrice[4][0] = form.elements.x1c5.value; // c5x1
		matrice[4][1] = form.elements.x2c5.value; // c5x2
		matrice[4][2] = 0; 
		matrice[4][3] = 0; 
		matrice[4][4] = 0; 
		matrice[4][5] = 0; 
		matrice[4][6] = 1; // variable d'écart 3 
		matrice[0][6] = 0; 
		matrice[1][6] = 0; 
		matrice[2][6] = 0; 
		matrice[3][6] = 0; 
		matrice[4][somme] = form.elements.x6c5.value; // maxcontraintec5
	}	
	break;
	default: if(T) console.log("euh c'est pas codé ça ! ");
	}
	if(variables.value > 2){ // 3 variables
		maxZ.x3 = form.elements.x3max.value;
		matrice[0][2] = form.elements.x3c1.value; // c1x3
		matrice[1][2] = form.elements.x3c2.value; // c2x3
		if(contraintes.value > 2){ 
			matrice[2][2] = form.elements.x3c3.value; // c3x3
		}	
		if(contraintes.value > 3){ 
			matrice[3][2] = form.elements.x3c4.value; // c4x3
		}	
		if(contraintes.value > 4){ 
			matrice[4][2] = form.elements.x3c5.value; // c5x3
		}	
	}
	if(variables.value > 3){ // 4 variables
		maxZ.x4 = form.elements.x4max.value;
		matrice[0][3] = form.elements.x4c1.value; // c1x4
		matrice[1][3] = form.elements.x4c2.value; // c2x4
		if(contraintes.value > 2){ 
			matrice[2][3] = form.elements.x4c3.value; // c3x4
		}	
		if(contraintes.value > 3){ 
			matrice[3][3] = form.elements.x4c4.value; // c4x4
		}	
		if(contraintes.value > 4){ 
			matrice[4][3] = form.elements.x4c5.value; // c5x4
		}	
	}
	if(variables.value > 4){ // 5 variables 
		matrice[0][4] = form.elements.x5c1.value; // c1x5
		matrice[1][4] = form.elements.x5c2.value; // c2x5
		maxZ.x5 = form.elements.x5max.value;
		if(contraintes.value > 2){ 
			matrice[2][4] = form.elements.x5c3.value; // c3x5
		}	
		if(contraintes.value > 3){ 
			matrice[3][4] = form.elements.x5c4.value; // c4x5
		}	
		if(contraintes.value > 4){ 
			matrice[4][4] = form.elements.x5c5.value; // c5x5
		}	
	}
	var text = '<p><label>'+maxZ.afficher()+'</p></label>';
	document.getElementById("reponse").innerHTML = text;
	
	
	if(T) console.table(matrice); // debug

	// var text = '<p><label>x1 = </label><label id="x1"></label></br><label>x2 = </label><label id="x2"></label></br><label>x3 = </label><label id="x3"></label></br><label>x4 = </label><label id="x4"></label></br><label>x5 = </label><label id="x5"></label></br></br><label>Ooptimum est de : </label><label id="optimum"></label></p>';	
	// algo
	
};

// saisies variables préléminaires
var contraintes;
var variables;
function clic(){ 
	contraintes = document.getElementById("contraintes");
	variables = document.getElementById("variables");
	console.log("contraintes : "+contraintes.value+" "+"variables : "+variables.value); // debug
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

