//delete operation testing

var target = UIATarget.localTarget();
var app = target.frontMostApp();
var window = app.mainWindow();

UIATarget.onAlert = function onAlert(alert)
{
	return true;
}

var addItemForTest = function(item){
	window.navigationBar().buttons()["Add"].tap();
	var alert = app.alert();
	app.keyboard().typeString(item);
	alert.buttons()["Create"].tap();
	window.navigationBar().buttons()["Documents"].tap();
}

test("test edit button when length is greater than 0",function(){
	for(var n=0;n<=4;n++)
	{
		addItemForTest("item"+(Math.ceil(Math.random()*1000)+""));
	}

	var length = window.tableViews()[0].cells().length;
	var editButton = window.navigationBar().buttons()["Edit"].isEnabled();
	if(length >= 1)
	{
		assertEquals(1,editButton,"the editButton can be tapped");
	}else{
		assertEquals(0,editButton,"");
	}
	length = length+"";
	log("length of cells is "+length);
})

test("tap button to delete one item",function(){
	var oldTableCellLength = window.tableViews()[0].cells().length;
	window.navigationBar().buttons()["Edit"].tap();

	var addButton = window.navigationBar().buttons()["Add"].isEnabled();
	assertEquals(0,addButton,"addbutton cannot be tapped");

	var valueToDelete = window.tableViews()[0].cells()[0].name();
	window.tableViews()[0].cells()[0].switches()[0].tap();
	var delButtonName = "Confirm Deletion for "+valueToDelete;
	log("delButtonName is "+delButtonName);
	window.tableViews()[0].cells()[0].buttons()[delButtonName].tap();
	var newTableCellLength = window.tableViews()[0].cells().length;
	assertEquals(newTableCellLength,oldTableCellLength-1,"");
	window.navigationBar().buttons()["Done"].tap();
})

test("double click the switch button",function(){
	window.navigationBar().buttons()["Edit"].tap();
	var valueToDelete = window.tableViews()[0].cells()[0].name();
	var delButtonName = "Confirm Deletion for "+valueToDelete;
	window.tableViews()[0].cells()[0].switches()[0].doubleTap();
	var delButton = window.tableViews()[0].cells()[0].buttons()[delButtonName].isVisible();
	log("delButton is "+delButton);
	assertEquals(1,delButton,"delete button is visible on screen");
	window.navigationBar().buttons()["Done"].tap();
})

test("test deleteButton when tap anywhere",function(){
	window.navigationBar().buttons()["Edit"].tap();
	var valueToDelete_0 = window.tableViews()[0].cells()[0].name();
	var valueToDelete_1 = window.tableViews()[0].cells()[1].name();

	var delButtonName_0 = "Confirm Deletion for "+valueToDelete_0;
	var delButtonName_1 = "Confirm Deletion for "+valueToDelete_1;

	window.tableViews()[0].cells()[0].switches()[0].tap();
	var delButton_0 = window.tableViews()[0].cells()[0].buttons()[delButtonName_0].isVisible();
	assertEquals(1,delButton_0,"delButton_0 is visible on screen");

	window.tableViews()[0].cells()[1].switches()[0].tap();
	//get the value again
	delButton_0 = window.tableViews()[0].cells()[0].buttons()[delButtonName_0].isVisible();
	assertEquals(0,delButton_0,"delButton_0 is not visible on screen");
	window.navigationBar().buttons()["Done"].tap();
})

test("sliding to delete one item",function(){
	var valueToDelete = window.tableViews()[0].cells()[0].name();
	var delButtonName = "Confirm Deletion for "+valueToDelete;
	// window.tableViews()[0].cells()[0].buttons()[delButtonName].scrollToVisible();
	window.tableViews()[0].cells()[0].dragInsideWithOptions({startOffset:{x:0.0, y:0.5}, endOffset:{x:0.5, y:0.5}, duration:1.0});
	var delButton = window.tableViews()[0].cells()[0].buttons()[delButtonName].isVisible();
	assertEquals(1,delButton,"delButton is visible on screen");
	window.navigationBar().buttons()["Done"].tap();
})

test("test whether can delete two items by sliding",function(){
	var valueToDelete = window.tableViews()[0].cells()[0].name();
	var delButtonName = "Confirm Deletion for "+valueToDelete;
	window.tableViews()[0].cells()[0].dragInsideWithOptions({startOffset:{x:0.0, y:0.5}, endOffset:{x:0.5, y:0.5}, duration:1.0});
	var delButton = window.tableViews()[0].cells()[0].buttons()[delButtonName].isVisible();
	assertEquals(1,delButton,"");

	window.tableViews()[0].cells()[1].dragInsideWithOptions({startOffset:{x:0.0, y:0.5}, endOffset:{x:0.5, y:0.5}, duration:1.0});
	delButton = window.tableViews()[0].cells()[0].buttons()[delButtonName].isVisible();
	assertEquals(0,delButton,"");
})