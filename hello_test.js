TestMyCode.run("testing hello function", function(assert){ 
    var result = hello();
   
    assert.equals("hello world", result, "testing hello function");
});

TestMyCode.run("testing hello_uppercase function", function(assert){
    var result = hello_uppercase("Lindelwa");
    // is the result as we expected?
    assert.equals("Hello!, LINDELWA", result,"testing hello_uppercase function");
});
TestMyCode.run("testing hello_joe function when Joe is true ", function(assert){ 
    var result = hello_joe("Joe");
   // is the result as we expected?
    assert.equals("Hello!", result, "testing hello_joe function");
});

TestMyCode.run("testing hello_joe function when both are failing", function(assert){ 

    var result = hello_joe("Lindi");
    // is the result as we expected?
    assert.equals("Hello Lindi!", result, "testing hello_joe function");
});

TestMyCode.run("testing hello_joe function when Bob is true ", function(assert){ 
     var result = hello_joe("Bob");
    // is the result as we expected?
    assert.equals("Hello!", result, "testing hello_joe function");
});

TestMyCode.run("testing number_list function", function(assert){ 
   var result = number_list(4);
   
    assert.equals([1,2,3,4].toString(), result.toString(), "testing number_list function");
});

TestMyCode.run("testing sum_numbers function", function(assert){ 
   var result = sum_numbers(4);
   
    assert.equals(10, result, "testing sum_numbers function");
});

