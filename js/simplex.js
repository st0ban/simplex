console.log("open simplex");

// recuperation DOM

var form = document.querySelector("form");

// objects
var maxZ = {
        valuex1max :0, valuex2max :0, valuex3max :0, valuex4max :0, valuex5max :0,
	afficher: function (){
		return "maxZ = "+this.valuex1max+" X1 + "+this.valuex2max+" X2 + "+this.valuex3max+" X3 + "+this.valuex4max+" X4 + "+this.valuex5max+" X5";
	}
};
var c1 = {
        valuex1 :0, valuex2 :0, valuex3 :0, valuex4 :0, valuex5 :0, valuex6 :0, ecart :0,
	afficher: function(){
	return this.valuex1+" X1 + "+this.valuex2+" X2 + "+this.valuex3+" X3 + "+this.valuex4+" X4 + "+this.valuex5+" X5 <= "+this.valuex6;
	}
};

var c2 = Object.create(c1);
var c3 = Object.create(c1);
var c4 = Object.create(c1);
var c5 = Object.create(c1);

// execution
form.addEventListener("submit",function(e){
	// initialisation des objets
	maxZ.valuex1max = form.elements.valuex1max.value;
	maxZ.valuex2max = form.elements.valuex2max.value;
	maxZ.valuex3max = form.elements.valuex3max.value;
	maxZ.valuex4max = form.elements.valuex4max.value;
	maxZ.valuex5max = form.elements.valuex5max.value;
	console.log(maxZ.afficher()); // debug
	c1.valuex1 = form.elements.valuex1c1.value;
	c1.valuex2 = form.elements.valuex2c1.value;
	c1.valuex3 = form.elements.valuex3c1.value;
	c1.valuex4 = form.elements.valuex4c1.value;
	c1.valuex5 = form.elements.valuex5c1.value;
	c1.valuex6 = form.elements.valuex6c1.value;
	console.log(c1.afficher()); // debug
	c2.valuex1 = form.elements.valuex1c2.value;
	c2.valuex2 = form.elements.valuex2c2.value;
	c2.valuex3 = form.elements.valuex3c2.value;
	c2.valuex4 = form.elements.valuex4c2.value;
	c2.valuex5 = form.elements.valuex5c2.value;
	c2.valuex6 = form.elements.valuex6c2.value;
	console.log(c2.afficher()); // debug
	c3.valuex1 = form.elements.valuex1c3.value;
	c3.valuex2 = form.elements.valuex2c3.value;
	c3.valuex3 = form.elements.valuex3c3.value;
	c3.valuex4 = form.elements.valuex4c3.value;
	c3.valuex5 = form.elements.valuex5c3.value;
	c3.valuex6 = form.elements.valuex6c3.value;
	console.log(c3.afficher()); // debug
	c4.valuex1 = form.elements.valuex1c4.value;
	c4.valuex2 = form.elements.valuex2c4.value;
	c4.valuex3 = form.elements.valuex3c4.value;
	c4.valuex4 = form.elements.valuex4c4.value;
	c4.valuex5 = form.elements.valuex5c4.value;
	c4.valuex6 = form.elements.valuex6c4.value;
	console.log(c4.afficher()); // debug
	c5.valuex1 = form.elements.valuex1c5.value;
	c5.valuex2 = form.elements.valuex2c5.value;
	c5.valuex3 = form.elements.valuex3c5.value;
	c5.valuex4 = form.elements.valuex4c5.value;
	c5.valuex5 = form.elements.valuex5c5.value;
	c5.valuex6 = form.elements.valuex6c5.value;
	console.log(c5.afficher()); // debug
	// algo
	e.preventDefault(); //annulation de l'envoi des données du formulaire
});

