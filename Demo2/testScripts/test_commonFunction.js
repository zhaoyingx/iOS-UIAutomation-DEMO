var target = UIATarget.localTarget();
var app = target.frontMostApp();
var window = app.mainWindow();

test("test tableView sliding",function(){
	window.tableViews()[0].segmentedControls()[0].buttons()["All"].tap();
	app.keyboard().typeString("a");
	var isSearchBarFocus = window.tableViews()[0].searchBars()[0].hasKeyboardFocus();
	assertEquals(1,isSearchBarFocus);
	window.tableViews()[0].segmentedControls()[0].buttons()["Device"].tap();
	
	window.tableViews()[0].cells()[0].dragInsideWithOptions({startOffset:{x:0.5, y:0.0}, endOffset:{x:0.5, y:1.0}});
	isSearchBarFocus = window.tableViews()[0].searchBars()[0].hasKeyboardFocus();
	assertEquals(0,isSearchBarFocus);
	window.tableViews()[0].buttons()["Cancel"].tap();
})

test("test items clicked",function(){
	window.tableViews()[0].segmentedControls()[0].buttons()["All"].tap();
	app.keyboard().typeString("a");
	app.keyboard().typeString("\n");
	window.tableViews()[0].cells()[0].tap();
	var text = window.staticTexts()[0];
	assertNotNull(text);
	window.navigationBar().buttons()["Products"].tap();
	window.tableViews()[0].buttons()["Cancel"].tap();
})

test("title change",function(){
	var nameOfCell = window.tableViews()[0].cells()[5].name().split(",")[0];
	window.tableViews()[0].cells()[5].tap();
	var title = window.navigationBar().staticTexts()[1].name();
	assertEquals(nameOfCell,title);
	window.navigationBar().buttons()["Products"].tap();
})

test("content correct",function(){
	var valueOfCell = window.tableViews()[0].cells()[4].name().split(",")[1];
	var partone = valueOfCell.split("|")[0].replace(/(^\s*)|(\s*$)/g, "");
	var parttwo = valueOfCell.split("|")[1].replace(/(^\s*)|(\s*$)/g, "");
	window.tableViews()[0].cells()[4].tap();
	var content = window.staticTexts()[0].name();
	var contentPartOne = content.split("-")[0].replace(/(^\s*)|(\s*$)/g, "");
	var contentPartTwo = content.split("-")[1].replace(/(^\s*)|(\s*$)/g, "");
	assertEquals(partone,contentPartOne);
	assertEquals(parttwo,contentPartTwo);
	window.navigationBar().buttons()["Products"].tap();
})