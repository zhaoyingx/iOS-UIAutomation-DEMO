//ynm3k tool
//git@github.com:douban/ynm3k.git
//
//interface containing :
//findElementByNameAndClassType
//findElementByName
//findElementsByClassType


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

test("delete item",function(){
	for(var n=0;n<=4;n++)
	{
		addItemForTest("item"+(Math.ceil(Math.random()*1000)+""));
	}
	var oldLengthOfCell = Finder.findElementsByClassType("TableCell").length;
	oldLengthOfCell = oldLengthOfCell+"";
	log("oldLengthOfCell is "+oldLengthOfCell);
	Finder.findElementByNameAndClassType("Edit","Button").tap();

	var valueToDelete = window.tableViews()[0].cells()[0].name();
	log("valueToDelete is "+valueToDelete);
	Finder.findElementByName(valueToDelete).switches()[0].tap();
	var delButtonName = "Confirm Deletion for "+valueToDelete;
	Finder.findElementByNameAndClassType(delButtonName,"Button").tap();

	Finder.findElementByNameAndClassType("Done","Button").tap();

	var newLengthOfCell = Finder.findElementsByClassType("TableCell").length;
	assertEquals(newLengthOfCell,oldLengthOfCell-1,"");
})