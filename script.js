var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var genNew = document.getElementById("genNew")
var clearBtn = document.getElementById("clearBtn")


function setGradient() {
	
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function setRandom() {
	var randomColor1 = Math.floor(Math.random()*8**8).toString(16);
	var randomColor2 = Math.floor(Math.random()*8**8).toString(16);
	color1.value = "#" + randomColor1;
	color2.value = "#" + randomColor2;
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";

	clearBtn.addEventListener("click", clearRandomColors);
}

function clearRandomColors() {
	color1.value = 0;
	color2.value = 0;
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";

	location.reload();
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

genNew.addEventListener("click", setRandom);