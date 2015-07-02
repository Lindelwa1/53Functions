var count=1;
var list=[];//this is an array
var hello_list = function(number){
	while(count<=number){
		console.log("hello world");
			count++;
			list.push("hello world");//this statement is pushing into an array
	}
	
	return list;
}