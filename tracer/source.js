var a = 4;
a = 6;
a += 2;
a = (function(){ return 8; })()

var b = 2;
var c = 1;
var str = "";
for(var i = 1; i <= 5; i++){
	b = (b * 2);
	c = b % i;
	str += "a";
}