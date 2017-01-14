console.log("open simplex");

// recup dom
var form = document.querySelector("form");
console.log("nombre de champs saisie : " + form.elements.length); // debug

// objects
var maxZ = {
        valuex1max :0, valuex2max :0, valuex3max :0, valuex4max :0, valuex5max :0
};
var c1 = {
	valuex1 :0, valuex2 :0, valuex3 :0, valuex4 :0, valuex5 :0, valuex6 :0
};
var c2 = {
	valuex1 :0, valuex2 :0, valuex3 :0, valuex4 :0, valuex5 :0, valuex6 :0
};
var c3 = {
	valuex1 :0, valuex2 :0, valuex3 :0, valuex4 :0, valuex5 :0, valuex6 :0
};
var c4 = {
	valuex1 :0, valuex2 :0, valuex3 :0, valuex4 :0, valuex5 :0, valuex6 :0
};
var c5 = {
	valuex1 :0, valuex2 :0, valuex3 :0, valuex4 :0, valuex5 :0, valuex6 :0
};

// execution
form.addEventListener("submit",function(e){
	maxZ.value1max = form.elements.valuex1max.value;
	maxZ.value2max = form.elements.valuex2max.value;
	maxZ.value3max = form.elements.valuex3max.value;
	maxZ.value4max = form.elements.valuex4max.value;
	maxZ.value5max = form.elements.valuex5max.value;
	console.log(maxZ.value1max+" "+maxZ.value2max+" "+maxZ.value3max+" "+maxZ.value4max+" "+maxZ.value5max); // debug
	c1.valuex1 = form.elements.valuex1c1.value;
	c1.valuex2 = form.elements.valuex2c1.value;
	c1.valuex3 = form.elements.valuex3c1.value;
	c1.valuex4 = form.elements.valuex4c1.value;
	c1.valuex5 = form.elements.valuex5c1.value;
	c1.valuex6 = form.elements.valuex6c1.value;
	console.log(c1.valuex1+" "+c1.valuex2+" "+c1.valuex3+" "+c1.valuex4+" "+c1.valuex5+" "+c1.valuex6); // debug
	c2.valuex1 = form.elements.valuex1c2.value;
	c2.valuex2 = form.elements.valuex2c2.value;
	c2.valuex3 = form.elements.valuex3c2.value;
	c2.valuex4 = form.elements.valuex4c2.value;
	c2.valuex5 = form.elements.valuex5c2.value;
	c1.valuex6 = form.elements.valuex6c2.value;
	console.log(c2.valuex1+" "+c2.valuex2+" "+c2.valuex3+" "+c2.valuex4+" "+c2.valuex5+" "+c2.valuex6); // debug
	c3.valuex1 = form.elements.valuex1c3.value;
	c3.valuex2 = form.elements.valuex2c3.value;
	c3.valuex3 = form.elements.valuex3c3.value;
	c3.valuex4 = form.elements.valuex4c3.value;
	c3.valuex5 = form.elements.valuex5c3.value;
	c3.valuex6 = form.elements.valuex6c3.value;
	console.log(c3.valuex1+" "+c3.valuex2+" "+c3.valuex3+" "+c3.valuex4+" "+c3.valuex5+" "+c3.valuex6); // debug
	c4.valuex1 = form.elements.valuex1c4.value;
	c4.valuex2 = form.elements.valuex2c4.value;
	c4.valuex3 = form.elements.valuex3c4.value;
	c4.valuex4 = form.elements.valuex4c4.value;
	c4.valuex5 = form.elements.valuex5c4.value;
	c4.valuex6 = form.elements.valuex6c4.value;
	console.log(c4.valuex1+" "+c4.valuex2+" "+c4.valuex3+" "+c4.valuex4+" "+c4.valuex5+" "+c4.valuex6); // debug
	c5.valuex1 = form.elements.valuex1c5.value;
	c5.valuex2 = form.elements.valuex2c5.value;
	c5.valuex3 = form.elements.valuex3c5.value;
	c5.valuex4 = form.elements.valuex4c5.value;
	c5.valuex5 = form.elements.valuex5c5.value;
	c5.valuex6 = form.elements.valuex6c5.value;
	console.log(c5.valuex1+" "+c5.valuex2+" "+c5.valuex3+" "+c5.valuex4+" "+c5.valuex5+" "+c5.valuex6); // debug
	e.preventDefault(); //annulation de l'envoi des données du formulaire
});

