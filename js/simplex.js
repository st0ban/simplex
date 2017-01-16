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
                        valeurs += ""+this.x2+" X2";plus = true;
		}
		if(this.x3 > 0){
                        if(plus)
                                valeurs += " + ";
			valeurs += ""+this.x3+" X3";plus = true;
		}
		if(this.x4 > 0){
                        if(plus)
                                valeurs += " + ";
                        valeurs += ""+this.x4+" X4";plus = true;
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
	// initialisation des objets
	maxZ.x1 = form.elements.x1max.value; // 2 variables 
	maxZ.x2 = form.elements.x2max.value;
	c1.x1 = form.elements.x1c1.value;
	c1.x2 = form.elements.x2c1.value;
	c1.x6 = form.elements.x6c1.value;
	c2.x1 = form.elements.x1c2.value;
	c2.x2 = form.elements.x2c2.value;
	c2.x6 = form.elements.x6c2.value;
	if(contraintes.value > 2){ 
	var c3 = Object.create(c1);
		c3.x1 = form.elements.x1c3.value;
		c3.x2 = form.elements.x2c3.value;
		c3.x6 = form.elements.x6c3.value;
	}	
	if(contraintes.value > 3){ 
	var c4 = Object.create(c1);
		c4.x1 = form.elements.x1c4.value;
		c4.x2 = form.elements.x2c4.value;
		c4.x6 = form.elements.x6c4.value;
	}	
	if(contraintes.value > 4){ 
	var c5 = Object.create(c1);
		c5.x1 = form.elements.x1c5.value;
		c5.x2 = form.elements.x2c5.value;
		c5.x6 = form.elements.x6c5.value;
	}	
	if(variables.value > 2){ // 3 variables
		maxZ.x3 = form.elements.x3max.value;
		c1.x3 = form.elements.x3c1.value;
		c2.x3 = form.elements.x3c2.value;
	if(contraintes.value > 2){ 
		c3.x3 = form.elements.x3c3.value;
	}	
	if(contraintes.value > 3){ 
		c4.x3 = form.elements.x3c4.value;
	}	
	if(contraintes.value > 4){ 
		c5.x3 = form.elements.x3c5.value;
	}	
	}
	if(variables.value > 3){ // 4 variables
		maxZ.x4 = form.elements.x4max.value;
		c1.x4 = form.elements.x4c1.value;
		c2.x4 = form.elements.x4c2.value;
	if(contraintes.value > 2){ 
		c3.x4 = form.elements.x4c3.value;
	}	
	if(contraintes.value > 3){ 
		c4.x4 = form.elements.x4c4.value;
	}	
	if(contraintes.value > 4){ 
		c5.x4 = form.elements.x4c5.value;
	}	
	}
	if(variables.value > 4){ // 5 variables 
		maxZ.x5 = form.elements.x5max.value;
		c1.x5 = form.elements.x5c1.value;
		c2.x5 = form.elements.x5c2.value;
	if(contraintes.value > 2){ 
		c3.x5 = form.elements.x5c3.value;
	}	
	if(contraintes.value > 3){ 
		c4.x5 = form.elements.x5c4.value;
	}	
	if(contraintes.value > 4){ 
		c5.x5 = form.elements.x5c5.value;
	}	
	}
	console.log(maxZ.afficher()); // debug
	console.log(c1.afficher()); // debug
	console.log(c2.afficher()); // debug
	if(contraintes.value > 2) 
		console.log(c3.afficher()); // debug
	if(contraintes.value > 3) 
		console.log(c4.afficher()); // debug
	if(contraintes.value > 4) 
		console.log(c5.afficher()); // debug
	// algo
	//e.preventDefault(); //annulation de l'envoi des données du formulaire
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
	text += '<tr><th>max z = </th><td><input type="number" min=0 max=100 value=0 name="x1max" /></td><td><input type="number" min=0 max=100 value=0 name="x2max" /></td>';

	if(variables.value > 2){        
        	text += '<td><input type="number" min=0 max=100 value=0 name="x3max" /></td>';
       		if(variables.value > 3){
                	text += '<td><input type="number" min=0 max=100 value=0 name="x4max" /></td>';
                        if(variables.value > 4) 
                		text += '<td><input type="number" min=0 max=100 value=0 name="x5max" /></td>';
                }
        }
	text += '<td></td><td></td></tr>';
	// ligne 3
	text += '<tr><th>Contrainte 1</th><td><input type="number" min=0 max=100 value=0 name="x1c1" /></td><td><input type="number" min=0 max=100 value=0 name="x2c1" /></td>';
	if(variables.value > 2){        
                text += '<td><input type="number" min=0 max=100 value=0 name="x3c1" /></td>';
                if(variables.value > 3){
                        text += '<td><input type="number" min=0 max=100 value=0 name="x4c1" /></td>';
                        if(variables.value > 4) 
                                text += '<td><input type="number" min=0 max=100 value=0 name="x5c1" /></td>';
                }
        }
        text += '<td>&lt=</td><td><input type="number" min=0 max=1000 value=0 name="x6c1"/td></tr>';
        // ligne 4  
	text += '<tr><th>Contrainte 2</th><td><input type="number" min=0 max=100 value=0 name="x1c2" /></td><td><input type="number" min=0 max=100 value=0 name="x2c2" /></td>';
	if(variables.value > 2){        
                text += '<td><input type="number" min=0 max=100 value=0 name="x3c2" /></td>';
                if(variables.value > 3){
                        text += '<td><input type="number" min=0 max=100 value=0 name="x4c2" /></td>';
                        if(variables.value > 4) 
                                text += '<td><input type="number" min=0 max=100 value=0 name="x5c2" /></td>';
                }
        }
        text += '<td>&lt=</td><td><input type="number" min=0 max=1000 value=0 name="x6c2"/td></tr>';
        // ligne 5 
	if(contraintes.value > 2){
		text += '<tr><th>Contrainte 3</th><td><input type="number" min=0 max=100 value=0 name="x1c3" /></td><td><input type="number" min=0 max=100 value=0 name="x2c3" /></td>';
        if(variables.value > 2){ 
                text += '<td><input type="number" min=0 max=100 value=0 name="x3c3" /></td>';
                if(variables.value > 3){
                        text += '<td><input type="number" min=0 max=100 value=0 name="x4c3" /></td>';
                        if(variables.value > 4)
                                text += '<td><input type="number" min=0 max=100 value=0 name="x5c3" /></td>';
                }
        }
        text += '<td>&lt=</td><td><input type="number" min=0 max=1000 value=0 name="x6c3"/td></tr>';
	}
        // ligne 6
	if(contraintes.value > 3){
                text += '<tr><th>Contrainte 4</th><td><input type="number" min=0 max=100 value=0 name="x1c4" /></td><td><input type="number" min=0 max=100 value=0 name="x2c4" /></td>';
        if(variables.value > 2){
                text += '<td><input type="number" min=0 max=100 value=0 name="x3c4" /></td>';
                if(variables.value > 3){
                        text += '<td><input type="number" min=0 max=100 value=0 name="x4c4" /></td>';
                        if(variables.value > 4)
                                text += '<td><input type="number" min=0 max=100 value=0 name="x5c4" /></td>';
                }
        }
        text += '<td>&lt=</td><td><input type="number" min=0 max=1000 value=0 name="x6c4"/td></tr>';
        }
        // ligne 7 
	if(contraintes.value > 4){ 
                text += '<tr><th>Contrainte 5</th><td><input type="number" min=0 max=100 value=0 name="x1c5" /></td><td><input type="number" min=0 max=100 value=0 name="x2c5" /></td>';
        if(variables.value > 2){
                text += '<td><input type="number" min=0 max=100 value=0 name="x3c5" /></td>';
                if(variables.value > 3){
                        text += '<td><input type="number" min=0 max=100 value=0 name="x4c5" /></td>';
                        if(variables.value > 4)
                                text += '<td><input type="number" min=0 max=100 value=0 name="x5c5" /></td>';
                }
        }
        text += '<td>&lt=</td><td><input type="number" min=0 max=1000 value=0 name="x6c5"/td></tr>';
        }
	text += '</table></br>';
	document.getElementById("injecter").innerHTML = text;
}
// boutons
var boutonVariables = document.getElementById("variables");
boutonVariables.addEventListener("click", clic);
var boutonContraintes = document.getElementById("contraintes");
boutonContraintes.addEventListener("click", clic);
var boutonCalculer = document.getElementById("calculer");
boutonCalculer.addEventListener("click", calcul);

