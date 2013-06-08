function calculate(){
	var numMiles = document.getElementById('numMiles').value;
    	perMileFee = 3;
    	fee = 0;
    	total = numMiles * perMileFee;
    	numPeople = document.getElementById('numPeople').value;
	if (numPeople > 4 && numPeople < 10){
		document.getElementById('fees').innerHTML = 'Fees: $12';
		fee = 12;
		total = total + fee;
		document.getElementById('eachPays').innerHTML = 'Everyone pays: $'+ calculateFee(total,numPeople,fee);
	} else if(numPeople > 10){
		document.getElementById('fees').innerHTML = 'Fees: $20';
		fee = 20;
		total = total + fee;
		document.getElementById('eachPays').innerHTML = 'Everyone pays: $'+ calculateFee(total,numPeople,fee);
	} else if (numPeople <= 4){
		document.getElementById('fees').innerHTML = 'Fees: $3.50';
		fee = 3.50;
		total = total +  fee;
		document.getElementById('eachPays').innerHTML = 'Everyone pays: $'+ calculateFee(total,numPeople,fee);
	}

	document.getElementById('theTotal').innerHTML = 'Total: $' + total.toFixed(2);	
}

function calculateFee (total, numPeople, fee) {
	alert('Total: ' + total + 'Fee: ' + fee);
	eachPaysFunc = total/numPeople;
	eachPaysFunc = eachPaysFunc.toFixed(2);
	return eachPaysFunc;
}