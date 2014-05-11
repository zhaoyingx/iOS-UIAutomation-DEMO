var target = UIATarget.localTarget();
var app = target.frontMostApp();
var window = app.mainWindow();

var delay = function(t){
	target.delay(t);
}

test("test searchBar and search result",function(){
	window.tableViews()[0].segmentedControls()[0].buttons()["All"].tap();
	assertNull(window.tableViews()[0].cells());
	app.keyboard().typeString("a");
	assertNotNull(window.tableViews()[0].cells());
	var textInSearchBar = window.tableViews()[0].searchBars()[0].value();
	assertEquals("a",textInSearchBar);
	window.tableViews()[0].buttons()["Cancel"].tap();
})

test("test segment tapped",function(){
	window.tableViews()[0].segmentedControls()[0].buttons()["All"].tap();
	app.keyboard().typeString("a");
	var all_length = window.tableViews()[0].cells().length;
	window.tableViews()[0].segmentedControls()[0].buttons()["Device"].tap();
	var device_length = window.tableViews()[0].cells().length;
	window.tableViews()[0].segmentedControls()[0].buttons()["Portable"].tap();
	delay(1);
	var portable_length = window.tableViews()[0].cells().length;
	window.tableViews()[0].segmentedControls()[0].buttons()["Desktop"].tap();
	delay(1);
	var desktop_length = window.tableViews()[0].cells().length;
	assertEquals(all_length,device_length+portable_length+desktop_length);
	window.tableViews()[0].buttons()["Cancel"].tap();
})

test("test no results",function(){
	window.tableViews()[0].segmentedControls()[0].buttons()["All"].tap();
	app.keyboard().typeString("aaaaaaa");
	app.keyboard().typeString("\n"); //search
	var nameOfResults = window.tableViews()[0].tableViews()[0].name();
	assertEquals("No Results",nameOfResults);
	window.tableViews()[0].buttons()["Cancel"].tap();
})