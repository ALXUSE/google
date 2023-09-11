function myFunction() {
  const sheetName = "Sheet1"; 
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
  const lastRow = sheet.getLastRow();
  sheet.getRange("C1:C" + lastRow).copyTo(sheet.getRange("A" + (lastRow + 1)));
  
}
