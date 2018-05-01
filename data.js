dataSet = JSON.parse(dataSet)
var total = document.getElementById("total");
var greaterThan = document.getElementById("greaterThan");
var percentage = document.getElementById("percentage");

function getTotal(){
	var add = function(num,x){return num + x["females"] + x["males"];};
	return dataSet.reduce(add,0)
}

total.innerHTML = "" + getTotal()
