function shortest_word(str)  
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
}  

