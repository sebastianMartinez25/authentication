import { apikeyg, spreadSheetId } from "./postList.js";
function authenticateUser(username, password) {
    var SPREADSHEET_ID = spreadSheetId;
var SHEET_NAME = "usersData";
var API_KEY = apikeyg;
    
  var url = "https://sheets.googleapis.com/v4/spreadsheets/" + SPREADSHEET_ID + "/values/" + SHEET_NAME + "?key=" + API_KEY;
  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      var rows = data.values;
      var authenticated = false;
      for (var i = 0; i < rows.length; i++) {
        if (rows[i][0] === username && rows[i][1] === password) {
          authenticated = true;
          break;
        }
      }
      const authenticatedSection = document.getElementById
      ('authenticated-section');
      const errorLoggin=document.getElementById("errorLoggin");
      if (authenticated) {
        // Redirige al usuario a la página principal de tu sitio web.
        errorLoggin.innerHTML="";
        authenticatedSection.style.display = 'block';     
      } else {
        errorLoggin.style.color="#ff8000";
        errorLoggin.innerHTML="Nombre de usuario o contraseña incorrectos. Inténtalo de nuevo.";
        authenticatedSection.style.display = 'none';
      }
    })
    .catch(function(error) {
      console.log(error);
    });
}
//fin auth
document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Llama a una función en tu aplicación Vue.js para verificar si el usuario está autenticado
    
    authenticateUser(username, password);
  });

  
