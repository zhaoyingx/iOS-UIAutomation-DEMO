//add testing

var target = UIATarget.localTarget();
var app = target.frontMostApp();
var window = app.mainWindow();

test("testing initial state",function(){
	var lengthofInitial = window.tableViews()[0].cells().length;
	var editButton = window.navigationBar().buttons()["Edit"].isEnabled();
	if(lengthofInitial == 0)
	{
		assertEquals(0,editButton,"the editButton cannot be tap when the cell is 0");
		log("cell is empty");
	}else{
		assertEquals(1,editButton,"the editButton can be tapped");
	}
})

UIATarget.onAlert = function onAlert(alert)
{
	var title = alert.name();
	if(title == "New Document"){
		return true;
	}
	return false;
}

test("test add button",function(){
	var oldTableCellLength = window.tableViews()[0].cells().length;
	window.navigationBar().buttons()["Add"].tap();
	var alert = app.alert();
	log(alert.name());
	var createButton = alert.buttons()["Create"].isEnabled();
	var inputText = alert.textFields()[0].name();
	if(inputText == null)
	{
		assertEquals(0,createButton,"create button cannot be tapped if textField is empty");
	}else{
		assertEquals(1,createButton,"");
	}
	app.keyboard().typeString("cook");
	alert.buttons()["Create"].tap();
	window.navigationBar().buttons()["Documents"].tap();
	var newTableCellLength = window.tableViews()[0].cells().length;
	assertEquals(newTableCellLength,oldTableCellLength+1,"items++");
})

test("test adding the existing item",function(){
	window.navigationBar().rightButton().tap();
	var alert = app.alert();
	app.keyboard().typeString("cook");
	alert.buttons()["Create"].tap();
	var oldTableCellLength = window.tableViews()[0].cells().length;
	var newTableCellLength = window.tableViews()[0].cells().length;
	assertEquals(newTableCellLength,oldTableCellLength,"items does not change");
	alert.defaultButton().tap();
})