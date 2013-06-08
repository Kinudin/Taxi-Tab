function calculate(){
	var numMiles = document.getElementById('numMiles').value;
    	numPeople = document.getElementById('numPeople').value;
    	total = numMiles * numPeople;
	document.getElementById('theTotal').innerHTML = 'Total: $' + total;	
}