var btu = document.getElementById('open')
var ct = document.getElementById('back')
var clo = document.getElementById('close')
var two = document.getElementById('two')
var three = document.getElementById('three')
var four = document.getElementById('four')
var five = document.getElementById('five')
var six = document.getElementById('six')

btu.onclick = function show() {
	ct.style.animation = "moveUp 0.5s ease-in-out backwards";
	clo.style.animation = "moveUp 0.5s ease-in-out backwards";
	two.style.animation = "moveUp 0.5s ease-in-out 0.1s backwards";
	three.style.animation = "moveUp 0.5s ease-in-out 0.2s backwards";
	four.style.animation = "moveUp 0.5s ease-in-out 0.3s backwards";
	five.style.animation = "moveUp 0.5s ease-in-out 0.4s backwards";
	six.style.animation = "moveUp 0.5s ease-in-out 0.5s backwards";
	ct.style.display = "block";
}

clo.onclick = function close() {
    ct.style.animation = "moveDown 0.6s ease-in-out backwards";
	clo.style.animation = "moveDown 0.5s ease-in-out backwards";
	two.style.animation = "moveDown 0.5s ease-in-out 0.1s backwards";
	three.style.animation = "moveDown 0.5s ease-in-out 0.2s backwards";
	four.style.animation = "moveDown 0.5s ease-in-out 0.3s backwards";
	five.style.animation = "moveDown 0.5s ease-in-out 0.4s backwards";
	six.style.animation = "moveDown 0.5s ease-in-out 0.5s backwards";
	setTimeout(xiaoshi,600);
}
function xiaoshi()
{
	ct.style.display = "none";
}