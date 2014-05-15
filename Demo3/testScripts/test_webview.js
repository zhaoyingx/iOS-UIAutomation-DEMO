var target = UIATarget.localTarget();
var app = target.frontMostApp();
var window = app.mainWindow();

var delay = function(t){
	target.delay(t);
}

test("check link",function(){
	var url = "http://www.google.com";
	window.textFields()[0].tap();
	app.keyboard().typeString(url);
	window.buttons()["GO"].tap();
	delay(10);
	var link_webpage = window.scrollViews()[0].webViews()[0].links()[1];

	UIALogger.logMessage(link_webpage.url());
	//http://www.google.com.hk
	// var pattern = /^http:\/\/www\.google\.com\.[a-z]*/;
	var pattern = new RegExp('www\.google\.com\.[a-z]*');
	assertMatch(pattern,link_webpage.url());
	window.navigationBar().buttons()["Back"].tap();
	window.textFields()[0].buttons()["Clear text"].tap();
})

test("test link tap",function(){
	var url = "http://www.google.com";
	window.textFields()[0].tap();
	app.keyboard().typeString(url);
	window.buttons()["GO"].tap();
	delay(10);
	var link_image = window.scrollViews()[0].webViews()[0].links()[1];
	link_image.tap();
	var imageText = window.scrollViews()[0].webViews()[0].staticTexts()[0].name();
	assertEquals("图片",imageText);
	window.navigationBar().buttons()["Back"].tap();
	window.textFields()[0].buttons()["Clear text"].tap();
})