//edit operation testing

var target = UIATarget.localTarget();
var app = target.frontMostApp();
var window = app.mainWindow();

test("state of editFields",function(){
	var valueOfCell = window.tableViews()[0].cells()[0].name();
	log("valueOfCell is "+valueOfCell);
	window.tableViews()[0].cells()[0].tap();
	var textFieldisEnabled = window.tableViews()[0].cells()[0].textFields()[0].isEnabled();
	assertEquals(0,textFieldisEnabled,"cannot be tapped");
	var valueInTextField = window.tableViews()[0].cells()[0].textFields()[0].value();
	log("valueInTextField is "+valueInTextField);
	assertEquals(valueInTextField,valueOfCell,"");
	window.navigationBar().buttons()["Documents"].tap();
})

test("test modify name",function(){
	window.tableViews()[0].cells()[0].tap();
	window.navigationBar().buttons()["Edit"].tap();
	window.tableViews()[0].cells()[0].textFields()[0].tap();
	// window.tableViews()[0].cells()[0].textFields()[0].setValue("testingtesting");
	
	window.tableViews()[0].cells()[0].textFields()[0].buttons()["Clear text"].tap();

	var doneButton = window.navigationBar().buttons()["Done"].isEnabled();
	assertEquals(0,doneButton,"done cannot be tapped when input empty");

	app.keyboard().typeString("Hello UIAutomation");
	app.keyboard().typeString("\n"); //tap return
	window.navigationBar().buttons()["Done"].tap();
	window.navigationBar().buttons()["Documents"].tap();
	var newValue = window.tableViews()[0].cells()[0].name();
	assertEquals("Hello UIAutomation",newValue,"modify successfully");
})

test("test edit notes",function(){
	window.tableViews()[0].cells()[0].tap();
	window.navigationBar().buttons()["Edit"].tap();
	window.tableViews()[0].cells()[2].textViews()[0].tap();
	var notes = "Use the Automation instrument to automate user interface tests for your iOS app through test scripts that you write.";
	app.keyboard().typeString(notes);
	window.navigationBar().buttons()["Done"].tap();
	var valueOfNotes = window.tableViews()[0].cells()[2].textViews()[0].value();
	assertEquals(notes,valueOfNotes,"add notes successfully");
	window.navigationBar().buttons()["Documents"].tap();
})

test("add photo",function(){
	window.tableViews()[0].cells()[0].tap();
	window.navigationBar().buttons()["Edit"].tap();
	window.tableViews()[0].cells()[1].tap();
	window.tableViews()[0].cells()[0].tap();
	window.tableViews()[0].cells()[0].images()[0].tap();
	window.navigationBar().buttons()["Done"].tap();

	assertNotNull(window.tableViews()[0].cells()[1],"photo add successfully");
	window.navigationBar().buttons()["Documents"].tap();
})