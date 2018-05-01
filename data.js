dataSet = JSON.parse(dataSet)
var total = document.getElementById("total");
var greaterThan = document.getElementById("greaterThan");
var percentage = document.getElementById("percentage");

function getTotal(d){
	var add = function(num,x){return num + x["females"] + x["males"];};
	return d.reduce(add,0);
}

function getGreaterThan(d,num){
	var filterer = function(x){return x["age"] > num;};
	return getTotal(d.filter(filterer));
}

function getPercentage(d){
	var t = getTotal(d);
	var divide = function(x){return [x["age"],x["females"] / t]};
	return d.map(divide);
}

function newLines(list){
	var s = "age : percentage";
	for(var i = 0; i < list.length; i++){
		s +=   list[i][0] + " : " + (list[i][1] * 100) + "%<br>";
	}
	return s
}


total.innerHTML       = "" + getTotal(dataSet)
greaterThan.innerHTML = "" + getGreaterThan(dataSet,40)
percentage.innerHTML  = newLines(getPercentage(dataSet))
