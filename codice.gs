function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('Index');
}

function processRegistrationForm(formObject) {
  var email = formObject.email;
  var password = formObject.password;

  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Users');
  
  // Verifica se l'email esiste già
  var data = sheet.getDataRange().getValues();
  for (var i = 1; i < data.length; i++) {
    if (data[i][0] === email) {
      return HtmlService.createHtmlOutput('Email già registrata.');
    }
  }

  // Aggiungi il nuovo utente
  sheet.appendRow([email, password]);

  return HtmlService.createHtmlOutput('Registrazione avvenuta con successo!');
}
