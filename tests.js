QUnit.test("hello test", function( assert ) {
  assert.equal( hello(), "hello world!" );
});
QUnit.test("hello_uppercase test" ,function( assert ){
 assert.equal(hello_uppercase("HELLO"),"Hello!HELLO");

});
QUnit.test("hello_joe test" ,function( assert ){
	assert.equal(hello_joe("Joe"),"Hello!");
	assert.equal(hello_joe("Bob"),"Hello!");
	assert.equal(hello_joe("Lindi"),"Hello Lindi!");
});
	

QUnit.test("number_list test" ,function( assert ){
	assert.equal(number_list(4),[1,2,3,4].toString());

});
QUnit.test("sum_numbers test" ,function( assert ){
	assert.equal(sum_numbers(4),10);

});
QUnit.test("length test" ,function( assert ){
	assert.equal(length("this is done"), 12);

});

QUnit.test("upper test" ,function( assert ){
	assert.equal(upper("getting"), "GETTING");

});
QUnit.test("reverse test" ,function( assert ){
	assert.equal(reverse("ereht gnitteG!"));

});

QUnit.test("hello_list test" ,function( assert ){
	assert.equal(hello_list(2), "hello world,hello world");

});

QUnit.test("high_low test", function(assert){
	var array = [1,2,3,4];
	var result = "max =4min =1";
   deepEqual(high_low(array),result);
});

QUnit.test("count_words test", function(assert){
  assert.equal(count_words("hello world"),2);
});