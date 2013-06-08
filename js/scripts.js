function calculate(){
	var numMiles = document.getElementById('numMiles').value;
    	numPeople = document.getElementById('numPeople').value;
    	total = numMiles * numPeople;
	if (numPeople > 4 && numPeople < 10){
		document.getElementById('fees').innerHTML = 'Fees: $12';
		total = total+ 12;
	}else if(numPeople > 10){
		document.getElementById('fees').innerHTML = 'Fees: $20';
		total = total + 20;
	}
	 else if (numPeople > 10){
		total = total + 20;
	} else if (numPeople < 4){
		total = total +  3.50;
	}

	document.getElementById('theTotal').innerHTML = 'Total: $' + total;	
}


