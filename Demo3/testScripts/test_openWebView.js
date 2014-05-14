var target = UIATarget.localTarget();
var app = target.frontMostApp();
var window = app.mainWindow();

var delay = function(t){
	target.delay(t);
}

UIATarget.onAlert = function onAlert(alert)
{
	var title = alert.name();
	return false;
}

test("test input",function(){
	window.buttons()["GO"].tap();
	var alert = app.alert();
	assertEquals(1,alert.isVisible(),"input is empty");
	//return false ：handle default
	// alert.cancelButton().tap();
})

test("test clear",function(){
	app.keyboard().typeString("http://test");
	var text = window.textFields()[0].value();
	assertEquals("http://test",text);
	window.textFields()[0].buttons()["Clear text"].tap();
	text = window.textFields()[0].value();
	assertEquals("please input URL",text,"CLear successfully");
})

test("test open webview",function(){
	var url = "http://www.fancy.com/";
	window.textFields()[0].tap();
	app.keyboard().typeString(url);
	window.buttons()["GO"].tap();
	delay(10);
	var webview = window.scrollViews()[0].webViews()[0];
	assertEquals(1,webview.isVisible());
	window.navigationBar().buttons()["Back"].tap();
	window.textFields()[0].buttons()["Clear text"].tap();
})