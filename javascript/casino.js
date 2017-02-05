var array =[1,2,3,4,5,6,7,8,9,10,11,12,13];
var number =document.getElementById("number");
function roll(){
	setTimeout(function(){
		number.innerHTML = Math.floor(Math.random()*13);
	}, 150 )
}
	