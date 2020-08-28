function loadPartialHTML_(partial) {
  const htmlServ = HtmlService.createTemplateFromFile(partial);
  htmlServ.initialValue = initialValue();
  return htmlServ.evaluate().getContent();
 
}

function loadSearchView(){
  return loadPartialHTML_("search");

}





function loadAddCustomersView(){
  return loadPartialHTML_("addcustomer");

}


function loadEditCustomersView(){
  return loadPartialHTML_("editcustomer");

}



function loadNewValue(){
  return loadPartialHTML_("newvalue");

}






//function getSpecificRange()
//{
//    var rows= SpreadsheetApp.getActiveSheet().getRange(2,1,1,26).getValues();
//  //rows, cols, number of rows, number of columns
////  Logger.log(rows[0][4]);
//
//}

  var SHEET = SpreadsheetApp.getActiveSheet();
    function initialValue(){
      
      return SHEET.getRange(1, 5).getValue();
      
    }
    
   
