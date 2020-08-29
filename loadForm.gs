function loadMainForm() {
  const htmlServ = HtmlService.createTemplateFromFile("main");
  htmlServ.initialValue = initialValue();
  const html = htmlServ.evaluate();
  html.setWidth(850).setHeight(600);
  const ui = SpreadsheetApp.getUi();
  ui.showModalDialog(html, "Edit Customer Data");
  
}

function createMenu_() {  
  const ui = SpreadsheetApp.getUi();
  const menu = ui.createMenu("Custom Menu");
  menu.addItem("Open Form", "loadMainForm");
  menu.addToUi();  
}


function onOpen(){
 createMenu_();  
}

var SHEET = SpreadsheetApp.getActiveSheet();

function initialValue(){  
  return SHEET.getRange(1, 5).getValue();  
}

function getNewValue(){
   return SHEET.getRange(1, 5).getValue(); 
}
