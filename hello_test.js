TestMyCode.run("testing hello function", function(assert){ 
    var result = hello();
   
    assert.equals("hello", result, "testing hello function");
});

TestMyCode.run("testing hello_uppercase function", function(assert){ 
    var result = hello_uppercase();
   
    assert.equals("Hello!", result, "testing hello_uppercase function");
});

TestMyCode.run("testing hello_joe function", function(assert){ 
    var result = hello_joe();
   
    assert.equals("Hello!", result, "testing hello_joe function");
});

TestMyCode.run("testing number_list function", function(assert){ 
   var result = number_list(4);
   
    assert.equals[1,2,3,4].toString().result, "testing number_list function");
});

