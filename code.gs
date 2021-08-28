function sendEmails() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var startRow = 2; // First row of data to process
  var totalRows = 25; // Number of rows to process
  // Fetch the range of cells A2:B3
  var dataRange = sheet.getRange(startRow, 7, totalRows, 2);
  // Fetch values for each row in the Range.
  var data = dataRange.getValues();
  for (var i in data) {
    var row = data[i];
    var emailAddress = row[0]; // First column
    var value = row[1]; // Second column
    Logger.log(value)
    var subject = 'Notification on VIP Membership Expiry';
    var final_msg = "Dear Beloved Customer, " + "\n\n" +"Your Membership is expiring in another " + value +    " days." + "\n\n" + "Please Renew your subscription by making payment at our website" + "\n\n" + "Thank you"
    if (value == 5){
    MailApp.sendEmail(emailAddress, subject, final_msg);
    }
  }
}
