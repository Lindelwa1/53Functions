/**function sum_word_len(x){
	sum = 0;
	count = 0;
	var wordArray = []
	wordArray = x.split("");
for(var i=0; i <= wordArray.length ;i++){
	count += i;
}
sum += push(count);
return sum;
}**/
 function sum_word_len(sentence){
   // var count = 0;
   return sentence.split(' ').join().length;
  
}
