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