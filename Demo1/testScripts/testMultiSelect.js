var target = UIATarget.localTarget();
var app = target.frontMostApp();
var window = app.mainWindow();

var addItems = function(item){
	for(var n=0;n<item;n++)
	{
		window.navigationBar().leftButton().tap();
	}
}

test("rightButton changes according to select items",function(){
	window.navigationBar().rightButton().tap();
	window.tableViews()[0].cells()[0].tap();
	var name_1 = window.navigationBar().leftButton().name();
	assertEquals("Delete (1)",name_1);
	var n = 5;
	for(var i=1;i<=n;i++)
	{
		window.tableViews()[0].cells()[i].tap();
	}
	var name_mul = window.navigationBar().leftButton().name();
	var expect_name = "Delete ("+((n+1)+"")+")";
	assertEquals(expect_name,name_mul);
	window.navigationBar().rightButton().tap();
})

test("test delete",function(){
	addItems(10);
	var oldLength = window.tableViews()[0].cells().length;
	window.navigationBar().rightButton().tap();
	var n = 5;
	for(var i=0;i<n;i++)
	{
		window.tableViews()[0].cells()[i].tap();
	}
	window.navigationBar().leftButton().tap();
	//if using window.actionSheet it will return error
	target.frontMostApp().actionSheet().buttons()["OK"].tap();
	var newLength = window.tableViews()[0].cells().length;
	assertEquals(oldLength-n,newLength);
})

test("delete all",function(){
	window.navigationBar().rightButton().tap();
	window.navigationBar().leftButton().tap();
	target.frontMostApp().actionSheet().buttons()["OK"].tap();
	var newLength = window.tableViews()[0].cells().length;
	assertEquals(0,newLength,"delete all successfully");
})