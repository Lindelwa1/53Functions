/**function longest_word(str)  
{  
  var array1 = str.match(/\w[a-z]{0,}/gi);  
  var result = array1[0];  
  
  for(var i = 1 ; i < array1.length ; i++)  
  {  
    if(result.length < array1[1].length)  
    {  
    result = array1[i];  
    }   
  }  
  return result;  
}**/



function longest_word(january) {
    var jr = january.split(" ");   // the result will be an array with the values:
    var longest = 0;               // declaring 
    var travis = null;             //equal to nothing
    for (var i = 0; i < jr.length; i++) { //comparing all the items in the array
        if (longest < jr[i].length) {
            longest = jr[i].length;
            travis = jr[i];
        }
    }
 
return [travis, longest];
}

